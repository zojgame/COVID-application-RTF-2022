import {addUserToken} from "../tokenReducer";

export const getToken=(userdata)=>{

    return function(dispatch){
         fetch('http://127.0.0.1:8000/login/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(userdata),
            }
        ).then(res => res.json())
             .then(json=>{
                 console.log(json)
                 dispatch(addUserToken(json))
             })
    }
}