import React,{useState,useEffect} from 'react';
import Axios from '../../Axios';
import './Register.css';

const Register = () =>{
    useEffect(() =>{
        document.title = 'Register';
        window.scrollTo(0,0);
    });

    const [inputs, updateInputs] = useState({
        first:'',
        last:'',
        email:'',
        password:'',
        confirm:''
    });

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        
        updateInputs(prev =>({
            ...prev,
            [name] : value
        }));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(inputs.password === inputs.confirm){
            Axios.post('/register',{
                first:inputs.first,
                last:inputs.last,
                email:inputs.email,
                password:inputs.password
            })
                .then(res => console.log(res))
                .catch(e => console.log(e));
        }else{
            alert('Passwords Do Not Match. Try Again');
        }

        updateInputs(prev =>({
            first:'',
            last:'',
            email:'',
            password:'',
            confirm:''
        }));
    }
    
    return(
        <div id = 'regContainer'>
            <div className = 'header'>
                <h1>Register</h1>
                <img src = '/assets/lock.png' alt = 'new' width = '40' height = '40'/>
                <p style = {{textAlign:'center'}}>Already have an account? <a href = '/login'>Login</a></p>
            </div>
            <form onSubmit = {handleSubmit}>
                <input onChange = {handleChange} type = 'text' value = {inputs.first} name = 'first' placeholder = 'First Name' />
                <input onChange = {handleChange} type = 'text' value = {inputs.last} name = 'last' placeholder = 'Last Name'/>
                <input onChange = {handleChange} type = 'email' value = {inputs.email} name = 'email' placeholder = 'Email'/>
                <input onChange = {handleChange} type = 'password' value = {inputs.password} name = 'password' placeholder = 'Password'/>
                <input onChange = {handleChange} type = 'password' value = {inputs.confirm} name = 'confirm' placeholder = 'Confirm Password'/>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;