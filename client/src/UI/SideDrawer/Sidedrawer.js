import React from 'react';
import './Sidedrawer.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Sidedrawer = (props) =>{
    let navItems;
    let drawerClass;

    if(props.toggle){
        drawerClass = 'slideOpen';
    }else{
        drawerClass = 'slideClosed';    
    }

    if(props.authenticated){
        navItems = (
            <div id = 'items' onClick = {props.toggleDrawer}>
                <Link to = '/'>
                    <p>Dashboard</p>
                </Link>

                <Link to = '/plaid'>
                    <p>Plaid</p>
                </Link>

                <Link to = '/expenses'>
                    <p>Expenses</p>
                </Link>

                <div onClick = {() =>{
                    localStorage.removeItem('token');
                    window.location.reload();
                }}>
                    <p>Sign Out</p>
                </div>
            </div>
        )
    }else{
        navItems = (
            <div id = 'items' onClick = {props.toggleDrawer}>
                <Link to = '/'>
                    <p>Home</p>
                </Link>
                <Link to = '/register'>
                    <p>Register</p>
                </Link>
                <Link to = '/login'>
                    <p>Login</p>
                </Link>
            </div>
        );
    }
  
    return(
        <div id = 'sideDrawerContainer' className = {drawerClass}>
            {navItems}
        </div>
    );  
}

const mapStateToProps = state =>{
    return{
        authenticated:state.auth.authenticated
    }
}

export default connect(mapStateToProps,null)(Sidedrawer);