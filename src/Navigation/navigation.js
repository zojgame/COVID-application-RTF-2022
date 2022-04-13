import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import HomePage from '../Pages/HomePage';
import ProfilePage from '../Pages/ProfilePage';
import AuthorizationPage from '../Pages/Authorization/AuthorizationPage';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
const ProfileBtn = function (props) {
  return (
    <Button
      icon="sdsd"
      onPress={() => props.navigation.navigate('AuthorizationPage')}
      title="Info"
      color="#000"
    />
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="HomePage"
          component={HomePage}
          options={({ navigation }) => ({
            title: 'Главная',
            headerRight: () => <ProfileBtn navigation={navigation} />,
          })}
        />
        <Drawer.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={({ navigation }) => ({
            title: 'Профиль',
            headerRight: () => <ProfileBtn navigation={navigation} />,
          })}
        />
        <Drawer.Screen
          name="AuthorizationPage"
          component={AuthorizationPage}
          options={{
            title: 'Авторизация',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
