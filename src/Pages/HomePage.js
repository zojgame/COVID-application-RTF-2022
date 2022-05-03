import React, { Component } from "react";
import {View, Text, ScrollView, Image, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import { deviceHeight, deviceWidth } from "../const";

const styles=StyleSheet.create({
    image1:{
        height: deviceHeight*35/100,
        width:'100%',
    },
    container:{
        display:'flex',
    },
    text:{
        color:'white',
        marginTop:deviceHeight*2/100,
        fontSize:20,
        marginLeft:deviceHeight*3/100,
        marginRight:deviceHeight*3/100,
        textAlign:"center",
        // border:'3px solid rgb(121, 206, 231)',
        borderRadius:20,
        backgroundColor:'rgba(89, 134, 247,0.6);'
    },
    description:{
        marginTop:deviceHeight*5/100,
        display:'flex',
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center',
        marginLeft:15,
        marginRight:15,
    },
    descriptionText1:{
        color:'white',
        fontSize:25,
        width:deviceWidth*70/100,
        // borderBottom:'2px solid rgb(121, 206, 231)',
        borderRadius:15,
        alignSelf:'center',
        textAlign:'center',
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'rgba(89, 134, 247,0.6)',
        marginBottom: 10,
        marginTop: 10

    },
    descriptionText:{
        marginBottom: 10,
        fontSize:20,
        width:deviceWidth*90/100,
        alignSelf:'center',
        textAlign:'center',
        marginTop:deviceHeight*1/100,
        color:'rgba(95, 145, 240,1);',
        borderRadius:5,
        borderLeftWidth: 10,
        borderLeftColor:'rgb(150, 177, 245)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.00,
        elevation: 10,

    },
    image2:{
        width:deviceWidth*50/100,
            height: deviceHeight*25/100,
    }

})

function HomePage(props) {
  return (
    <ScrollView style={styles.container}
    showsVerticalScrollIndicator={false}>
        <Image style={styles.image1} source={require('../Images/homepage3.webp')}/>
        <Text style={styles.text}>{"Данное приложение поможет вам реабилитироваться после перенесенной болезни Covid-19."}</Text>
        <View style={styles.description}>
            <Image style={styles.image2} source={require('../Images/homepage4.png')}/>
            <View>
                <Text style={styles.descriptionText1}> Здесь вы узнаете:</Text>
                <Text style={styles.descriptionText}>Как Covid-19 влияет на организм</Text>
                <Text style={styles.descriptionText}>Время на восстановление</Text>
                <Text style={styles.descriptionText}>Восстановление дыхательных органов</Text>
                <Text style={styles.descriptionText}>Восстановление глотания и голоса</Text>
                <Text style={styles.descriptionText}>Восстановление работы сердца</Text>
            </View>
        </View>
    </ScrollView>
  );
}

export default HomePage;


