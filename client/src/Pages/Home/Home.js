import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './Home.css';

const Home = () =>{
    useEffect(() =>{
        document.title = 'Finance-Fix';
    });

    let history = useHistory();
    
    const handleRegClick = () =>{
        history.push('/register');
    }

    const handleLogClick = () =>{
        history.push('/login');
    }
    
    return(
        <div id = 'homeContainer'>
            {/* <img id = 'homeSplash' src = '/assets/splash.svg' alt = 'splash' /> */}
            <h1>Finance Fix</h1>
            <img id = 'chartImg' src = '/assets/chart.svg' alt = 'data'/>
            <p>Track monthly expenses with the Plaid API - an API that can collect info securely from the bank.</p>
            <div id = 'buttonGroup'>
                <button onClick = {handleRegClick}>Register</button>
                <button onClick = {handleLogClick}>Login</button>
            </div>
        </div>
    );
}

export default Home;