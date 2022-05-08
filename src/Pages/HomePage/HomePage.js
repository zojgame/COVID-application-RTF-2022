import React, {Component, useState} from "react";
import {View, Text, ScrollView, Image, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {BackgroundImage} from "react-native-elements/dist/config";
import {LinearGradient} from "expo-linear-gradient";
import  HomePageStyles from './HomePageStyles'

const styles=HomePageStyles();

function HomePage(props) {
  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
        <View style={styles.block1}>
            <BackgroundImage style={styles.backImage} resizeMode={'stretch'} source={require('../../Images/homePageBackg.png')}>
                <View style={styles.headerTxtBlock}>
                    <Text style={styles.headerTxt}>Последствия COVID</Text>
                </View>
            </BackgroundImage>
            <View style={styles.imagesBlock}>
                <BodiesCard src={require('../../Images/HomePageBrain.png')}/>
                <BodiesCard src={require('../../Images/homePageArm.png')}/>
                <BodiesCard src={require('../../Images/homePageLungs.png')}/>
                <BodiesCard src={require('../../Images/homePageHeart.png')}/>
            </View>
        </View>
        <View style={styles.linksBlock}>
            <Text style={styles.linksBlockTitle}>Полезные ссылки:</Text>
            <ScrollView style={styles.links} showsVerticalScrollIndicator={false} horizontal={true}>
                <LinearGradient start={{x:0,y:0}} end={{x:100,y:100}} colors={['#00bffe','#007dd3']} style={styles.linksItem}>
                    <Text style={styles.linksTxt}>Время на восстановление</Text>
                    <Image style={styles.linksImage} resizeMode={'contain'} source={require('../../Images/homePageTime.png')}/>
                </LinearGradient>
                <LinearGradient start={{x:0,y:0}} end={{x:100,y:100}} colors={['#a2cf9a','#5ba029']}  style={styles.linksItem}>
                    <Text style={styles.linksTxt}>Диета</Text>
                    <Image style={styles.linksImage} resizeMode={'contain'} source={require('../../Images/homePageFood.png')}/>
                </LinearGradient>
                <LinearGradient start={{x:0,y:0}} end={{x:100,y:100}} colors={['#de5285','#b33a7f']} style={styles.linksItem}>
                    <Text style={styles.linksTxt}>Воздействия на организм</Text>
                    <Image style={styles.linksImage} resizeMode={'contain'} source={require('../../Images/homePageTasks.png')}/>
                </LinearGradient>
            </ScrollView>
        </View>
        <View style={styles.containterStat}>
            <View style={styles.imgStatBlock}>
                <Image  style={styles.imgStat} resizeMode={'contain'} source={require('../../Images/homePageCovidStat.png')}/>
            </View>
            <View style={styles.contentStatBlock}>
                <Text style={styles.contentStatBlockHeader}>Заболеваемость в России</Text>
                <View style={styles.contentStat}>
                    <Text style={styles.contentStatText} >Выявлено: {props.newSick}</Text>
                    <Text style={styles.contentStatText}>Смертей: {props.newDeaths}</Text>
                </View>
            </View>
        </View>
    </ScrollView>
  );
}

function BodiesCard(props){
    return(
        <ImageBackground imageStyle={{borderRadius:'20%'}} style={styles.gradient} source={require('../../Images/homePageGrad.png')}>
            <Image style={styles.img} resizeMode={'contain'} source={props.src}/>
        </ImageBackground>
    )
}

export default HomePage;


