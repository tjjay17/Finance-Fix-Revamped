import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useInView} from 'react-intersection-observer';
import FeatureCard from '../../Components/FeatureCard/FeatureCard';
import './Home.css';

const Home = () =>{
    useEffect(() =>{
        document.title = 'Finance-Fix';
    });

    const {ref, inView, entry} = useInView({threshold:0.75, root:null});

    if(inView){
        let elem = document.getElementById('features');
        elem.style.opacity = 1;
        elem.style.transform = 'translateY(50px)';
    }
   
    let history = useHistory();
    
    const handleRegClick = () =>{
        history.push('/register');
    }

    const handleLogClick = () =>{
        history.push('/login');
    }
    
    return(
        <div id = 'homeContainer'>
            <h1 id = 'h'>Finance - Fix {inView.toString()}</h1>
            <img id = 'chartImg' src = '/assets/financedata.svg' alt = 'chart' />
            <div id = 'features' ref = {ref}>
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