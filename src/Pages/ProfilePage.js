import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet, ImageBackground} from 'react-native';
import { deviceHeight } from "../const";
import {TouchableOpacity} from 'react-native-gesture-handler';
import Profile from '../data/profile-mock';
const height = deviceHeight*20/80;
const styles = StyleSheet.create({
    imageContainer : {
        backgroundColor: 'white',
        margin: 10,
        width: height,
        borderRadius: '50%',
    },
    profileBlock : {
        alignItems: 'center',
        justifyContent: 'center',
        widht: '80%',
        height : 300,
        margin: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    },
    profileImage : {
        borderRadius: '50%',
        height: height,
        margin: 10
    },

    profileText : {
        fontFamily: 'Roboto',
        fontWeight:'bold',
        fontSize: 25
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

export const ProfileBtn = function (props) {
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
const testProfile = new Profile();
function ProfilePage(props){
    return (
        <ScrollView >
            <View style={styles.profileBlock}>
                <View style={styles.imageContainer}>
                    <Image style={styles.profileImage} source={require('../Images/profilePage.png')}/>
                </View>
                <Text style={styles.profileText}>{testProfile.name} {testProfile.secondName}</Text>
            </View>
        </ScrollView>
    );
}

export default ProfilePage;