import * as types from './actionTypes';
import axios from 'axios';

export const addToken = (token, email,name) =>{
    return{
        type:types.STORE_USER,
        email:email,
        token:token,
        name:name,
        authenticated:null
    }
}

export const removeToken = () =>{
    return{
        type:types.REMOVE_USER,
        email:'',
        token:'',
        name:'',
        authenticated:false
    }
}

export const authSuccess = () =>{
    return{
        type:types.AUTH_SUCCESS,
        authenticated:true
    }
}

export const verifyToken = () =>{
    return dispatch =>{
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(removeToken());
        }else{
            axios.post('/verifytoken',{token:token})
                .then(res =>{
                    if(res.data.status){
                        dispatch(authSuccess());
                    }else{
                        dispatch(removeToken());
                    }
                })
                .catch(e =>{
                    //using alerts: bad Practice! but will come back to fix.
                    alert(e);
                    dispatch(removeToken());
                });
        }
    }
}