import React,{useState,useEffect} from 'react';
import './Plaid.css';
import Axios from '../../Axios';
import {connect} from 'react-redux';
import {PlaidLink} from 'react-plaid-link';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

//note to self: need to add the verify status to useeffect which will confirm whether user has accesstoken or not
//if they do, we can go straight to pulling transactions
//if not, then we will have to give them a link token, access token and so forth.
//useeffect must check if they have an access token or not.
//will probably use redux to maintain if they are "plaid authenticated" or not.

const Plaid = (props) =>{
    let history = useHistory();
    const [link_token,loadToken] = useState(null);
    const [hasAccess,updateAccess] = useState(false);
    const [transactions,updateTransactions] = useState(null);

    useEffect(() =>{
        document.title = 'Plaid';
        Axios.post('/verifystatus',{email:props.email})
            .then(res =>{
                if(res.data.hasAccess){
                    updateAccess(true);
                }else{
                    updateAccess(false);
                    Axios.post('/createlinktoken',{email:props.email})
                    .then(res =>{
                        loadToken(res.data.link_token);
                    })
                    .catch(e => console.log(e));
                }
            })
            .catch(e => console.log(e));
    },[props.email]);

    const onSuccess = (token,metadata) =>{
        Axios.post('/getaccesstoken',{link_token:token, email:props.email})
            .then(res => {
                console.log('hi',res.data);
                history.push('/plaid');
            })
            .catch(e => console.log(e));
    }

    const pullTransactions = () =>{
        Axios.post('/fetchtransactions',{email:props.email})
            .then(res =>{
                console.log(res.data);
            })
            .catch(e => console.log(e));
    }

    let newPlaidUser = link_token ? 
                    (<PlaidLink onSuccess = {onSuccess} token = {link_token}>
                        Connect Your Bank Account
                    </PlaidLink>) : <img src = '/assets/blueSpinner.svg' alt = 'spinner' />;
                    
    let existingPlaidUser = <button onClick = {pullTransactions} id = 'getTransactions'>Pull {new Date().toLocaleDateString('default',{month:'long'})} Transactions</button>

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
                {hasAccess ? existingPlaidUser : newPlaidUser}
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