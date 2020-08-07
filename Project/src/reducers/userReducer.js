import {LOGIN} from "../actions/actionTypes";

let user = {
    email:null
}

export default (state = user, action) =>{
    switch(action.type){
        case LOGIN:
            const {email} =action;
            user = {email}
            return user;
            default:return state
    }
}