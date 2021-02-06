import * as types from './actionTypes';
import Axios from '../../Axios';

export const addToken = (token,email) =>{
    return{
        type:types.STORE_USER,
        email:email,
        token:token,
        authenticated:null
    }
}

export const removeToken = () =>{
    return{
        type:types.REMOVE_USER,
        email:'',
        token:'',
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
        if(token === null){
            dispatch(removeToken());
        }else{
            Axios.post('/verifytoken',{token:token})
                .then(res =>{
                    if(res.data.status){
                        dispatch(authSuccess());
                        dispatch(addToken(token,res.data.email))
                    }else{
                        dispatch(removeToken());
                        localStorage.removeItem('token');
                    }
                })
                .catch(e =>{
                    //using alerts: bad Practice! but will come back to fix.
                    alert(e);
                    dispatch(removeToken());
                    localStorage.removeItem('token');
                });
        }
    }
}