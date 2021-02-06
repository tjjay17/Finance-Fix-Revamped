import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {connect} from 'react-redux';

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
        <div id = 'navContainer' style = {{backgroundColor:props.color}}>
            {navItems}
        </div>
    );
}

const mapStateToProps = state =>{
    return{
        authenticated:state.auth.authenticated
    }
}

export default connect(mapStateToProps,null)(Navbar);