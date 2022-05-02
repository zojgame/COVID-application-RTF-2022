import React, {Component, useState} from "react";
import {View, Text, ScrollView, Image, StyleSheet, ImageBackground, Dimensions} from 'react-native';

import {BackgroundImage} from "react-native-elements/dist/config";
import {LinearGradient} from "expo-linear-gradient";
import axios from "axios";
import useStable from "react-native-web/dist/modules/useStable";


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
      marginTop:'33%',
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
    },
    linksBlock:{
        marginTop:0,
        height:200,
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly'

    },
    linksBlockTitle:{
        color:'black',
        fontSize: '7vw',
    },
    links: {
        display:'flex',
        flexDirection:'row',
        overflow: 'hidden',
        overflowX: 'scroll',
        whiteSpace:'nowrap',
    },
    linksItem:{
        margin:2,
        padding:'3vw',
        width:'37vw',
        height:'37vw',
        borderRadius:'10%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    linksTxt:{
        color:'white',
        fontSize:'4vw',
        fontFamily:'Roboto',
    },
    linksImage:{
        width:'15vw',
        height:'15vw',
    },
    containterStat:{
      display:'flex',
        flexDirection:'row'

    },
    imgStat:{
        width:'15vw',
        height:'15vw',
        backgroundColor:'white'
    },
    contentStat:{

    }
})


function HomePage(props) {
     covid().then(data=>console.log(data))

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
        <View style={styles.linksBlock}>
            <Text style={styles.linksBlockTitle}>Полезные ссылки:</Text>
            <View style={styles.links}>
                <LinearGradient start={{x:0,y:0}} end={{x:100,y:100}} colors={['#00bffe','#007dd3']} style={styles.linksItem}>
                    <Text style={styles.linksTxt}>Время на восстановление</Text>
                    <Image style={styles.linksImage} resizeMode={'contain'} source={require('../Images/homePageTime.png')}/>
                </LinearGradient>
                <LinearGradient start={{x:0,y:0}} end={{x:100,y:100}} colors={['#a2cf9a','#5ba029']}  style={styles.linksItem}>
                    <Text style={styles.linksTxt}>Диета</Text>
                    <Image style={styles.linksImage} resizeMode={'contain'} source={require('../Images/homePageFood.png')}/>
                </LinearGradient>
                <LinearGradient start={{x:0,y:0}} end={{x:100,y:100}} colors={['#de5285','#b33a7f']} style={styles.linksItem}>
                    <Text style={styles.linksTxt}>Воздействия на организм</Text>
                    <Image style={styles.linksImage} resizeMode={'contain'} source={require('../Images/homePageTasks.png')}/>
                </LinearGradient>
            </View>
        </View>
        <View style={styles.containterStat}>
            <View>
                <Image style={styles.imgStat} source={require('../Images/homePageCovidStat.png')}/>
            </View>
            <View style={styles.contentStat}>
                <Text>Заболеваемость в России</Text>
                <View>
                    <Text>Заболело:</Text>
                    <Text>Умерло:</Text>
                </View>
            </View>
        </View>
    </ScrollView>
  );
}
async function covid(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
            'X-RapidAPI-Key': 'b6dc7f20c1msh782f7e53afa0c87p1049b2jsna6fb61add859'
        }
    };
    const response=await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/europe', options)
        .then(data=>data.json())
        .then(data=>data[3])

    console.log(response)
    return response;

}
function BodiesCard(props){
    return(
        <ImageBackground imageStyle={{borderRadius:'20%'}} style={styles.gradient} source={require('../Images/homePageGrad.png')}>
            <Image style={styles.img} resizeMode={'contain'} source={props.src}/>
        </ImageBackground>
    )
}

export default HomePage;


