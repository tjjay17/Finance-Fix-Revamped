import * as types from './actionTypes';
import Axios from '../../Axios';

export const addToken = (token,email,name,id) =>{
    return{
        type:types.STORE_USER,
        email:email,
        name:name,
        token:token,
        authenticated:null,
        id:id
    }
}

export const removeToken = () =>{
    return{
        type:types.REMOVE_USER,
        email:'',
        name:"",
        token:'',
        id:'',
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
                        dispatch(addToken(token, res.data.email, res.data.name, res.data.id ))
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