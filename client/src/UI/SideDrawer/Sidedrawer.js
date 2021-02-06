import React from 'react';
import './Sidedrawer.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Sidedrawer = (props) =>{
    let navItems;
    if(props.autenticated){
        navItems = (
            <div id = 'items'>
                <Link to = '/'>
                    <p>Dashboard</p>
                </Link>
            </div>
        )
    }else{
        navItems = (
            <div id = 'items' onClick = {props.closeDrawer}>
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
        <div id = 'sideDrawerContainer'>
            {navItems}
        </div>
    );  
}

const mapStateToProps = state =>{
    return{
        auth:state.auth.authenticated
    }
}

export default connect(mapStateToProps,null)(Sidedrawer);