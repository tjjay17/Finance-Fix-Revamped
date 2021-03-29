import {Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/SignUp/Register';
import Login from './Pages/Login/Login';
import Navbar from './UI/Navbar/Navbar';
import {connect} from 'react-redux';
import {verifyToken} from './redux/actions/auth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Plaid from './Pages/Plaid/Plaid';
import './App.css';
import React,{useState,useEffect} from 'react';
import Sidedrawer from './UI/SideDrawer/Sidedrawer';

function App(props) {
  const [color,updateColor] = useState('');
  const [shadow,updateShadow] = useState('none');
  const [isOpen,toggle] = useState(false);
  let routes;

  useEffect(() =>{
    props.verify(); 
    document.title = 'Dashboard';
    document.addEventListener('scroll',handleScroll)
  },[]);

  const handleScroll = () =>{
    if(window.pageYOffset > 0){
      updateColor('#0099ff');
      updateShadow('2px 2px 11px 2px #000000');
    }else{
      updateColor('white');
      updateShadow('none');
    }
  }

  if(!props.authenticated){
   routes = (
      <Switch>
        <Route exact path = '/login'>
          <Login />
        </Route>

        <Route exact path = '/register'>
          <Register />
        </Route>

        <Route exact path = '/'>
          <Home />
        </Route>

        <Route path = '/'>
          <Home />
        </Route>
      </Switch>
    );
  }else{
    routes = (
      <Switch>
        <Route exact path = '/plaid'>
          <Plaid />
        </Route>

        <Route exact path = '/'>
            <Dashboard />
        </Route>

        <Route path = '/'>
          <Dashboard />
        </Route>

      </Switch>
    );
  }
 
  return (
    <div className="App" style = {{overflow:'hidden'}}>
      <Navbar  openDrawer = {() => toggle(prev => !prev)} open = {isOpen} color = {color} shadow = {shadow} />
      <Sidedrawer toggle = {isOpen} toggleDrawer = {() => toggle(prev => !prev)} />
      {routes}
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    token:state.auth.token,
    email:state.auth.email,
    authenticated:state.auth.authenticated,
    id:state.auth.id
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    verify:() => dispatch(verifyToken())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
