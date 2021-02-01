import React,{useState,useEffect} from 'react';
import Axios from '../../Axios';
import './Login.css';

const Login = () =>{
    useEffect(() =>{
        document.title = 'Login';
    });

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

        Axios.post('/login',{
            email:inputs.mail,
            password:inputs.pass
        })
            .then(res => console.log(res))
            .catch(e => console.log(e));

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
                <input value = {inputs.mail} onChange = {handleChange} name = 'mail' type = 'email' placeholder = 'Email'/>
                <input value = {inputs.pass} onChange = {handleChange} name = 'pass' type = 'password' placeholder = 'Password' />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;