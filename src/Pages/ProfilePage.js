import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet, ImageBackground} from 'react-native';
import { deviceHeight } from "../const";
import {TouchableOpacity} from 'react-native-gesture-handler';

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
        height: height,
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