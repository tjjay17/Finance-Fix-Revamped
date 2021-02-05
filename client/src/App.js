import {Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/SignUp/Register';
import Login from './Pages/Login/Login';
import Navbar from './UI/Navbar/Navbar';
import {connect} from 'react-redux';
import React,{useState,useEffect} from 'react';

function App() {
  const [color,updateColor] = useState('');

  useEffect(() =>{
    document.addEventListener('scroll',handleScroll)
  });

  const handleScroll = () =>{
    if(window.pageYOffset > 0){
      updateColor('#0099ff');
    }else{
      updateColor('white')
    }
  }
 
  return (
    <div className="App" style = {{overflow:'hidden'}}>
      <Navbar color = {color} />
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
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    token:state.auth.token,
    email:state.auth.email,
    name:state.auth.name
  }
}

export default connect(mapStateToProps)(App);
