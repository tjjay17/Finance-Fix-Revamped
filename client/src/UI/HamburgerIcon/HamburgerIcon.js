import React from 'react';
import './HamburgerIcon.css';

const HamburgerIcon = (props) =>{
    return(
        <div className = {props.open} id = 'hamburgerContainer'>
            <div className = 'bar1'></div>
            <div className = 'bar2'></div>
            <div className = 'bar3'></div>
        </div>
    );
}

export default HamburgerIcon;