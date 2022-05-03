import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../Pages/HomePage/HomePage';
import ProfilePage from '../Pages/ProfilePage';
import SettingPage from '../Pages/SettingPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExercisesPage from '../Pages/ExercisesPage';
import AuthorizationPage from '../Pages/Authorization/AuthorizationPage';
import NotesPage from '../Pages/NotesPage';
import CustomDrawer from './CustomDrawer';
import { ProfileBtn } from '../Pages/ProfilePage';
import HomePageConstructor from "../Pages/HomePage/HomePageConstructor";

const Drawer = createDrawerNavigator();
export default function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}
                              screenOptions={
                                  {
                                      drawerLabelStyle: {
                                          marginLeft: -20,
                                          fontSize: 15
                                      },
                                      drawerActiveBackgroundColor: 'rgb(141, 116, 200)',
                                      drawerActiveTintColor: '#fff'
                                  }}>
                <Drawer.Screen
                    name="HomePage"
                    component={HomePageConstructor}
                    options={({navigation}) => ({
                        drawerIcon: ({color}) => (
                            <Ionicons name='home-outline' size={22} color={color}/>
                        ),
                        title: 'Главная',
                        headerRight: () =><ProfileBtn navigation={navigation}/>,
                    })}
                />
                <Drawer.Screen
                    name="ProfilePage"
                    component={ProfilePage}
                    options={({navigation}) => ({
                        drawerIcon: ({color}) => (
                            <Ionicons name='person-outline' size={22} color={color}/>
                        ),
                        title: 'Профиль',
                        headerRight: () => <ProfileBtn navigation={navigation}/>,

                    })}
                />
                <Drawer.Screen
                    name="SettingPage"
                    component={SettingPage}
                    options={({navigation})=>({
                        drawerIcon: ({color}) => (
                            <Ionicons name='settings-outline' size={22} color={color}/>
                        ),
                        title: 'Настройки',
                        headerRight: () => <ProfileBtn navigation={navigation}/>
                    })}/>
                <Drawer.Screen
                    name='ExercisesPage'
                    component={ExercisesPage}
                    options={({navigation})=>({
                        title: 'Упражнения',
                        headerRight: () => <ProfileBtn navigation={navigation}/>,
                        drawerIcon: ({color}) => (
                            <Ionicons name="barbell-outline" size={22} color={color}/>
                        )
                    })}
                />
                <Drawer.Screen
                    name='NotesPage'
                    component={NotesPage}
                    options={({navigation}) => ({
                        title: 'Заметки',
                    headerRight: () => <ProfileBtn navigation={navigation}/>,
                    drawerIcon: ({color}) => (
                        <Ionicons name="bookmarks-outline" size={22} color={color}/>
                    )
                    })}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


