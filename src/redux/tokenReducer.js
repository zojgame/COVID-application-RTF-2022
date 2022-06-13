import * as actions from './actionsTypes';
import {REMOVE_USER_TOKEN} from "./actionsTypes";

const initialState={
    token:''
}
export function tokenReducer(state=initialState,action){
    switch (action.type) {
        case actions.ADD_USER_TOKEN:
            return {...state,token:action.token}
        case actions.REMOVE_USER_TOKEN:
            return {...state,token:''}
        default:
            return state;
    }
}

export function addUserToken(token){
    return ({
        type:actions.ADD_USER_TOKEN,
        token:token,
    })
}