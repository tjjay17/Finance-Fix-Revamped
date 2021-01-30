import React from 'react';
import './FeatureCard.css';

const FeatureCard = (props) =>{
    return(
        <div id = 'featureContainer'>
            <img src = {props.src} alt = 'feature' />
            <p>{props.feature}</p>
        </div>
    );  
}

export default FeatureCard;