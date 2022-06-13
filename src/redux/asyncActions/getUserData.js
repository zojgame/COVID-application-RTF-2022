import {addUserData} from "../userDataReducer";


export const getUserData=(token)=>{
    return function(dispatch){
        fetch('http://127.0.0.1:8000/card/', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization':`Token ${token}`
                },
            }
        ).then(res => res.json())
            .then(json=>{
                console.log(json)
                dispatch(addUserData(json))
            })
    }
}