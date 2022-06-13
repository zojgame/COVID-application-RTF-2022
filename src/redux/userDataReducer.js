import * as actions from './actionsTypes';

const initialState={
    userData:{}
}
export function userDataReducer(state=initialState,action){
    switch (action.type) {
        case actions.ADD_USER_DATA:
            return {...state,userData:action.userData}
        case actions.REMOVE_USER_DATA:
            return {...state,token:''}
        default:
            return state;
    }
}
export function addUserData(userdata){
    return ({
        type:actions.ADD_USER_DATA,
        userData:userdata,
    })
}