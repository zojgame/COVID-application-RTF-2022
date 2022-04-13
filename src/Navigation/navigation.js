import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
<<<<<<< HEAD
=======
import { createStackNavigator } from '@react-navigation/stack';
>>>>>>> f31d7bb5e6bca009e65d85ba3886c4822a30a2ad
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import HomePage from '../Pages/HomePage';
import ProfilePage from '../Pages/ProfilePage';
<<<<<<< HEAD
=======
import AuthorizationPage from '../Pages/Authorization/AuthorizationPage';
import CustomDrawer from './CustomDrawer';
>>>>>>> f31d7bb5e6bca009e65d85ba3886c4822a30a2ad

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
<<<<<<< HEAD
      <Drawer.Navigator>
        <Drawer.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: 'Главная' }}
=======
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="HomePage"
          component={HomePage}
          options={({ navigation }) => ({
            title: 'Главная',
            headerRight: () => <ProfileBtn navigation={navigation} />,
          })}
>>>>>>> f31d7bb5e6bca009e65d85ba3886c4822a30a2ad
        />
        <Drawer.Screen
          name="ProfilePage"
          component={ProfilePage}
<<<<<<< HEAD
          options={{ title: 'Профиль' }}
=======
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
>>>>>>> f31d7bb5e6bca009e65d85ba3886c4822a30a2ad
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
