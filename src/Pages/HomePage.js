import React, { Component } from "react";
import {View, Text, ScrollView, Image, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import { deviceHeight, deviceWidth } from "../const";
import {BackgroundImage} from "react-native-elements/dist/config";
import {Svg, SvgUri} from "react-native-svg";

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#8D74C8',
    },
    block1:{
        width:'100%',
        display:'flex',
    },
    backImage:{
        width:'100%',
        height:'55vw',
    },
    headerTxtBlock:{
    },
    headerTxt:{
        textAlign:'center',
        color:'white',
        backgroundColor:'rgba(141, 116, 200,0.3);',
        fontSize:'10vw',
    },
    imagesBlock:{
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingTop:'5vw',
        paddingBottom:'7vw',
        marginBottom:'1vw',
        position:'relative',
        display:'grid',
        top:'-10%',
        gridTemplateColumns: '20% 20% 20% 20%',
        justifyContent:'space-around',
    },
    img:{
        width:'80%',
        height:'20vw',
        margin:'auto',
    }
})


function HomePage(props) {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.block1}>
            <BackgroundImage style={styles.backImage} resizeMode={'stretch'} source={require('../Images/homePageBackg.png')}>
                <View style={styles.headerTxtBlock}>
                    <Text style={styles.headerTxt}>Последствия COVID</Text>
                </View>
            </BackgroundImage>
            <View style={styles.imagesBlock}>
                <BodiesCard src={require('../Images/HomePageBrain.png')}/>
                <BodiesCard src={require('../Images/homePageArm.png')}/>
                <BodiesCard src={require('../Images/homePageLungs.png')}/>
                <BodiesCard src={require('../Images/homePageHeart.png')}/>
            </View>
        </View>
    </ScrollView>
  );
}

function BodiesCard(props){
    return(
        <ImageBackground imageStyle={{borderRadius:'20%'}} style={styles.gradient} source={require('../Images/homePageGrad.png')}>
            <Image style={styles.img} resizeMode={'contain'} source={props.src}/>
        </ImageBackground>
    )
}

export default HomePage;


