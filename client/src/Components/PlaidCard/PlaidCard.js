import React from 'react';
import './PlaidCard.css';

const PlaidCard = (props) =>{
    return(
        <div className = 'pCardContainer'>
            <div className = 'names'>
                <p>{props.name}</p>
                <p>{props.merchant}</p>
            </div>
            <div className = 'amt_date'>
                <p>{props.date}</p>
                <p>${props.amt.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default PlaidCard;