import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () =>{
    return(
        <div id = 'loadingScreen'>
            <div id = 'backDrop'>
            </div>
            <img src = '/assets/spinner.gif' alt = 'spinner'/>
            <h1 style = {{fontSize:'100px'}}>LOADING</h1>
        </div>
    );
}

export default LoadingScreen;