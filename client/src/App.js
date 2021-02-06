import {Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/SignUp/Register';
import Login from './Pages/Login/Login';
import Navbar from './UI/Navbar/Navbar';
import {connect} from 'react-redux';
import {verifyToken} from './redux/actions/auth';
import Dashboard from './Pages/Dashboard/Dashboard';
import React,{useState,useEffect} from 'react';

function App(props) {
  const [color,updateColor] = useState('');
  const [isLoading,updateScreen] = useState(true);
  let routes;

  useEffect(() =>{
    props.verify(); 
    updateScreen(false);
    document.addEventListener('scroll',handleScroll)
  },[]);

  const handleScroll = () =>{
    if(window.pageYOffset > 0){
      updateColor('#0099ff');
    }else{
      updateColor('white')
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
      </Switch>
    );
  }else{
    routes = (
      <Switch>
        <Route exact path = '/'>
            <Dashboard />
        </Route>
      </Switch>
    );
  }
  
  // if(isLoading){

  // }
 
  return (
    <div className="App" style = {{overflow:'hidden'}}>
      <Navbar color = {color} />
      {routes}
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    token:state.auth.token,
    email:state.auth.email,
    authenticated:state.auth.authenticated
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    verify:() => dispatch(verifyToken())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
