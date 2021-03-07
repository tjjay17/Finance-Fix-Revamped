import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';
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
            <h1>Finance - Fix</h1>
            {/* <p style = {{fontSize:'4vw'}}>Plaid API integrated system to manage your finances</p> */}
            <img id = 'chartImg' src = '/assets/Finance.svg' alt = 'chart' />
            <div id = 'features'>
                    <FeatureCard src = '/assets/blueDollar.svg' feature = {'Keep Track Of How Much You Spend And Adjust.'}/>
                    <FeatureCard src = '/assets/plaid.svg' feature = {'Optionally Use Plaid To Directly Integrate Your Bank Account.'}/>
                    <FeatureCard src = '/assets/secure.svg' feature = {'Securely Use A Platform With Friendly UI.'} />
            </div>
            <div id = 'buttonGroup'>
                <button onClick = {handleRegClick}>Register</button>
                <button onClick = {handleLogClick}>Login</button>
            </div>
        </div>
    );
}

export default Home;