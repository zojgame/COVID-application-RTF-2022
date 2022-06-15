import {addUserData} from "../userDataReducer";
import {useSelector} from "react-redux";
import {getUserData} from "./getUserData";


export const editUserData = (data, token) => {

    return function (dispatch) {
        fetch('http://127.0.0.1:8000/card/', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(data),
            }
        ).then(res => dispatch(getUserData(token)))
    }
}