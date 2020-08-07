import {LOGIN} from "./actionTypes";

export function logUser(email){
    const action = {
        type:LOGIN,
        email
    }
    return action
}