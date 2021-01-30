import React from 'react';
import {useHistory} from 'react-router-dom';
import './Home.css';

const Home = () =>{
    let history = useHistory();
    
    const handleRegClick = () =>{
        history.push('/register');
    }

    const handleLogClick = () =>{
        history.push('/login');
    }
    
    return(
        <div id = 'homeContainer'>
            <h1>Finance Fix</h1>
            <img src = '/assets/chart.svg' alt = 'data'/>
            <p>Track monthly expenses with the Plaid API - an API that can collect info securely from the bank.</p>
            <div id = 'buttonGroup'>
                <button onClick = {handleRegClick}>Register</button>
                <button onClick = {handleLogClick}>Login</button>
            </div>
        </div>
    );
}

export default Home;