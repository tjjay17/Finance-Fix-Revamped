import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {connect} from 'react-redux';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';

const Navbar = (props) =>{
    let navItems;

    const signOut = () =>{
        localStorage.removeItem('token');
        window.location.reload();
    }

    if(props.authenticated){
        navItems = (
            <div id = 'navItems'>
                <Link to = '/'>
                    <p>Dashboard</p>
                </Link>
                <Link to = '/plaid'>
                    <p>Plaid</p>
                </Link>
                <Link to = '/Expenses'>
                    <p style = {{color:'black',textDecorationColor:'black'}}>Expenses</p>
                </Link>
                {/* <div id = 'barAndMenu'> */}
                    <p id = 'userBar' onClick = {signOut}>
                        {/* {props.email}
                        <img id = 'arrowDown' src = '/assets/downarrow.png' alt = 'down' width = '20' height = '20'/> */}
                        Sign Out
                    </p>
                    
                {/* </div> */}
            </div>   
        );
    }else{
        navItems = (
            <div id = 'navItems'>
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
    return (
        <div id = 'navContainer' style = {{boxShadow:props.shadow,backgroundColor:props.color}}>
            {navItems}
            <div className = 'menuToggle' onClick = {props.openDrawer}>
                <HamburgerIcon open = {props.open ? 'change' :null} />
            </div>
        </div>
    );
}

const mapStateToProps = state =>{
    return{
        authenticated:state.auth.authenticated,
        email:state.auth.email,
        name:state.auth.name
    }
}

export default connect(mapStateToProps,null)(Navbar);