import React,{useState,useEffect} from 'react';
import './Plaid.css';
import Axios from '../../Axios';
import {connect} from 'react-redux';
import {PlaidLink} from 'react-plaid-link';

const Plaid = (props) =>{
    const [link_token,loadToken] = useState(null);
    useEffect(() =>{
        document.title = 'Plaid';
        Axios.post('/createlinktoken',{email:props.email})
            .then(res =>{
                loadToken(res.data.link_token);
            })
            .catch(e => console.log(e));
    },[props.email]);

    const onSuccess = (token,metadata) =>{
        Axios.post('/getaccesstoken',{link_token:link_token})
            .then()
            .catch(e => console.log(e));
    }

    let plaidPart = link_token ? 
                    (<PlaidLink onSuccess = {onSuccess} token = {link_token}>
                        Connect Your Bank Account
                    </PlaidLink>) : <img src = '/assets/blueSpinner.svg' alt = 'spinner' />;

    return(
        <div id = 'plaidContainer'>
            <div className = 'intro'>
                <h1>The Plaid API</h1>
                <p>
                    <strong>Please Note:</strong> Plaid can either be used to just pull up
                    the transactions, or you may directly integrate the amounts to expenses.
                </p>
            </div>
            <div id = 'plaidApplication'>
                {plaidPart}
            </div>
            
        </div>
    );
}

const mapStateToProps = state =>{
    return{
        email:state.auth.email
    }
}

export default connect(mapStateToProps,null)(Plaid);