import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text , View, StyleSheet} from 'react-native';
import HomePage from '../Pages/HomePage';
import ProfilePage from '../Pages/ProfilePage';

import AuthorizationPage from '../Pages/Authorization/AuthorizationPage';
import CustomDrawer from './CustomDrawer';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native-web';

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
          screenOptions = {{headerShown:false}}
          name="ProfilePage"
          
          component={ProfilePage}
          options={( { navigation }) => ({
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
