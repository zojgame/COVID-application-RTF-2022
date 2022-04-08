import React from "react";
import ProfilePage from "../Pages/ProfilePage";
import HomePage from "../Pages/HomePage";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import {Button, Text} from "react-native";

const Drawer = createDrawerNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name={'HomePage'}
                    component={HomePage}
                    options={{title:"Главная",

                }}
                />
                <Drawer.Screen
                    name={'ProfilePage'}
                    component={ProfilePage}
                    options={{title:"Профиль"}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
