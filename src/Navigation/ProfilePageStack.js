import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import AuthorizationPage from "../Pages/Authorization/AuthorizationPage";
import RegistrationPage from "../Pages/Authorization/RegistrationPage";
import AuthorizationPageConstructor from "../Pages/Authorization/AuthorizationPageConstructor";


const Stack = createStackNavigator();

export default function ProfilePageStack(props) {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'ProfilePage'}
                          component={ProfilePage}
                          options={{headerShown: false}}
            />
            <Stack.Screen name={'AuthorisationPage'}
                          component={AuthorizationPageConstructor}
                          options={{headerShown: false}}
            />
            <Stack.Screen name={'RegistrationPage'}
                          component={RegistrationPage}
                          options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}