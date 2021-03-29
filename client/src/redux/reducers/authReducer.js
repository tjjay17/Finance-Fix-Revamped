import * as types from '../actions/actionTypes';

let initialState = {
    email:'',
    token:'',
    authenticated:false,
    name:''
}

const authReducer = (state = initialState,action) =>{
    switch(action.type){
        case types.STORE_USER:
            return{
                ...state,
                token:action.token,
                email:action.email,
                name:action.name,
                id:action.id,
                authenticated:true
            }
        case types.REMOVE_USER:
            return{
                ...state,
                token:'',
                email:'',
                authenticated:false,
                name:'',
                id:''
            }
        case types.VERIFY_TOKEN:
            return{
                ...state
            }
        case types.AUTH_SUCCESS:
            return{
                ...state,
                authenticated:true
            }
        default:
            return state;
    }
}

export default authReducer;