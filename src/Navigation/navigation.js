import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Text,View, StyleSheet} from 'react-native';
import HomePage from '../Pages/HomePage';
import ProfilePage from '../Pages/ProfilePage';
import SettingPage from '../Pages/SettingPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExercisesPage from '../Pages/ExercisesPage';
import AuthorizationPage from '../Pages/Authorization/AuthorizationPage';
import CustomDrawer from './CustomDrawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ImageBackground} from 'react-native-web';

const Drawer = createDrawerNavigator();

const ProfileBtn = function (props) {
    return(
        <View>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {props.navigation.navigate('AuthorizationPage')}}>
                <ImageBackground source={require("../Images/profile.png")} style={styles.img}>
                    <Text style={styles.title}></Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    btn : {
        marginRight: 10,
    },
    img : {
    },
    title: {
        color: "white",
        padding: 25,
    }
});

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
                    component={HomePage}
                    options={({navigation}) => ({
                        drawerIcon: ({color}) => (
                            <Ionicons name='home-outline' size={22} color={color}/>
                        ),
                        title: 'Главная',
                        headerRight: () => <ProfileBtn navigation={navigation}/>,
                    })}
                />
                <Drawer.Screen
                    screenOptions={{headerShown: false}}
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
                    name='AuthorizationPage'
                    component={AuthorizationPage}
                    options={{
                        title: 'Авторизация',
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

