import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {connect} from 'react-redux';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';

const Navbar = (props) =>{
    let navItems;
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
                <p id = 'userBar'>
                    {props.email}
                </p>
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
        email:state.auth.email
    }
}

export default connect(mapStateToProps,null)(Navbar);