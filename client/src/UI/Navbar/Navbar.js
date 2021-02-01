import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) =>{
    return (
        <div id = 'navContainer' style = {{backgroundColor:props.color}}>
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
        </div>
    );
}

export default Navbar;