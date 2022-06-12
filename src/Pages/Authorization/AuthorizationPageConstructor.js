import React, {useEffect, useLayoutEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthorizationPage from "./AuthorizationPage";
import {View,Text} from "react-native";

function AuthorizationPageConstructor(props) {
    let [loginValue, setUserLogin] = useState();
    let [passwordValue, setUserPassword] = useState();
    useLayoutEffect(() => {
        getUserData().then(res => {
            setUserLogin(res.username)
            setUserPassword(res.password)
        })
    }, [])

    async function getUserData() {
        try {
            const value = await AsyncStorage.getItem('@userData');
            if (value !== null) {
                return JSON.parse(value);
            } else
                return {username: '', password: ''}
        } catch (error) {
            console.log('error');
        }
    }

    return loginValue && passwordValue
        ? <AuthorizationPage navigation={props.navigation} login={loginValue} password={passwordValue}/>
        : <View><Text>Загрузка...</Text></View>

}


export default AuthorizationPageConstructor;