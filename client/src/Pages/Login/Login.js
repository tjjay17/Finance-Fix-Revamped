import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
//it makes more sense to migrate all actions to one file.
//I will do that as I realize there is a need for more reducers.
import * as actions from '../../redux/actions/auth';
import {useHistory} from 'react-router-dom';
import Axios from '../../Axios';
import './Login.css';

const Login = (props) =>{
    let history = useHistory();
    useEffect(() =>{
        document.title = 'Login';
    });

    const [isLoading,updateLoading] = useState(false);

    const [inputs, updateInputs] = useState({
        mail:'',
        pass:''
    });

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        updateInputs(prev =>({
            ...prev,
            [name] : value
        }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateLoading(true);

        Axios.post('/login',{
            email:inputs.mail,
            password:inputs.pass
        })
            .then(res => {
                localStorage.setItem('token',res.data.token);
                props.addUser(res.data.token,res.data.email,res.data.name,res.data.id);
                console.log(res.data);
                history.push('/');
            })
            .catch(e => {
                updateLoading(false);
                alert(e);
            });

        updateInputs(prev =>({
            mail:'',
            pass:''
        }));
    }

    return(
        <div id = 'loginContainer'>
            <div className = 'header'>
                <h1>Login</h1>
                <img src = '/assets/unlock.png' alt = 'unlock' width = '40' height = '40' />
                <p>Don't have an account? <a href = '/register'>Register</a></p>
            </div>

            <form onSubmit = {handleSubmit}>
                <input required value = {inputs.mail} onChange = {handleChange} name = 'mail' type = 'email' placeholder = 'Email'/>
                <input required value = {inputs.pass} onChange = {handleChange} name = 'pass' type = 'password' placeholder = 'Password' />
                <button>{isLoading ? <img width = '35' height = '35' src = '/assets/spinner.gif' alt = 'spinner'/> : 'Login'}</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch =>{
    return{
        addUser:(token,email,name,id) => dispatch(actions.addToken(token,email,name,id))
    }
}

export default connect(null, mapDispatchToProps)(Login);