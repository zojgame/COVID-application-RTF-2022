import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet, ImageBackground} from 'react-native';
import { deviceHeight } from "../const";
import {TouchableOpacity} from 'react-native-gesture-handler';
import AuthorizationPage from "./Authorization/AuthorizationPage";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const height = deviceHeight*20/100;
const styles = StyleSheet.create({
    imageContainer : {
        backgroundColor: 'white',
        margin: 10,
        width: height,
        borderRadius: 5,
    },
    profileBlock : {
        widht: '80%',
        height : 300,
        backgroundColor: 'rgba(89, 134, 247,0.4)',
        margin: 10,
        borderRadius: 5,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    profileImage : {
        height: {height},
        margin: 10
    },

    profileText : {

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
})
const Stack = createStackNavigator();

export const ProfileBtn = function (props) {

        return(



        )
    }

function ProfilePage(props){
    return (        
        <ScrollView >
            <View style={styles.profileBlock}>
                <View style={styles.imageContainer}>
                    <Image style={styles.profileImage} source={require('../Images/profilePage.png')}/>
                </View>
                <Text style={styles.profileText}>ProfiledsaPage</Text>
            </View>            
        </ScrollView>
    );
}


export default ProfilePage;