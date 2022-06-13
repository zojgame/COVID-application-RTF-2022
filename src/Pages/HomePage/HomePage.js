import React, {Component, useState} from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback, Linking
} from 'react-native';
import {BackgroundImage} from "react-native-elements/dist/config";
import {LinearGradient} from "expo-linear-gradient";
import HomePageStyles from './HomePageStyles'
import {useSelector} from "react-redux";

const styles = HomePageStyles();

const RecoveryUrl='https://zdravnica.center/kompleks_mer_posle_covid19#:~:text=%D0%92%20%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%BC%20%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D1%82%20%D0%BE%D1%82%202%20%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8C%20%D0%B4%D0%BE%202%20%D0%BC%D0%B5%D1%81%D1%8F%D1%86%D0%B5%D0%B2.&text=%D0%9F%D1%80%D0%B8%D0%B7%D0%BD%D0%B0%D0%BA%D0%B8%20%D0%BB%D0%B5%D0%B3%D0%BA%D0%BE%D0%B9%20%D1%84%D0%BE%D1%80%D0%BC%D1%8B%20COVID%2D19,(%D0%B4%D0%BE%2037%2C5%C2%BA%D0%A1).';
const NutritionUrl='https://77.rospotrebnadzor.ru/index.php/press-centr/186-press-centr/9981-chto-est-chtoby-bystree-vosstanovitsya-posle-covid-19';
const EffectUrl='http://cgon.rospotrebnadzor.ru/content/63/4223';
function HomePage(props) {
    return (
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
            <View style={styles.block1}>
                <BackgroundImage style={styles.backImage} resizeMode={'stretch'}
                                 source={require('../../Images/homePageBackg.png')}>
                    <View style={styles.headerTxtBlock}>
                        <Text style={styles.headerTxt}>Последствия COVID</Text>
                    </View>
                </BackgroundImage>
                <View style={styles.imagesBlock}>
                    <BodiesCard navigation={props.navigation} effectPage={'BrainEffects'}
                                src={require('../../Images/HomePageBrain.png')}/>
                    <BodiesCard navigation={props.navigation} effectPage={'MusculesEffects'}
                                src={require('../../Images/homePageArm.png')}/>
                    <BodiesCard navigation={props.navigation} effectPage={'LungsEffects'}
                                src={require('../../Images/homePageLungs.png')}/>
                    <BodiesCard navigation={props.navigation} effectPage={'HeartEffects'}
                                src={require('../../Images/homePageHeart.png')}/>
                </View>
            </View>
            <View style={styles.linksBlock}>
                <Text style={styles.linksBlockTitle}>Полезные ссылки:</Text>
                <ScrollView style={styles.links} showsVerticalScrollIndicator={false} horizontal={true}>
                    <TouchableWithoutFeedback onPress={()=>Linking.openURL(RecoveryUrl)}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 50, y: 50}} colors={['#00bffe', '#007dd3']}
                                        style={styles.linksItem}>
                            <Text style={styles.linksTxt}>Время на восстановление</Text>
                            <Image style={styles.linksImage} resizeMode={'contain'}
                                   source={require('../../Images/homePageTime.png')}/>
                        </LinearGradient>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>Linking.openURL(NutritionUrl)}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 100, y: 100}} colors={['#a2cf9a', '#5ba029']}
                                        style={styles.linksItem}>
                            <Text style={styles.linksTxt}>Диета</Text>
                            <Image style={styles.linksImage} resizeMode={'contain'}
                                   source={require('../../Images/homePageFood.png')}/>
                        </LinearGradient>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>Linking.openURL(EffectUrl)}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 100, y: 100}} colors={['#de5285', '#b33a7f']}
                                        style={styles.linksItem}>
                            <Text style={styles.linksTxt}>Воздействия на организм</Text>
                            <Image style={styles.linksImage} resizeMode={'contain'}
                                   source={require('../../Images/homePageTasks.png')}/>
                        </LinearGradient>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
            <View style={styles.containterStat}>
                <View style={styles.imgStatBlock}>
                    <Image style={styles.imgStat} resizeMode={'contain'}
                           source={require('../../Images/homePageCovidStat.png')}/>
                </View>
                <View style={styles.contentStatBlock}>
                    <Text style={styles.contentStatBlockHeader}>Заболеваемость в России</Text>
                    <View style={styles.contentStat}>
                        <Text style={styles.contentStatText}>Выявлено: {props.newSick}</Text>
                        <Text style={styles.contentStatText}>Смертей: {props.newDeaths}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

function BodiesCard(props) {
    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate(props.effectPage)
            }
            }>
            <ImageBackground imageStyle={{borderRadius: '20%'}} style={styles.gradient}
                             source={require('../../Images/homePageGrad.png')}>
                <Image style={styles.img} resizeMode={'contain'} source={props.src}/>
            </ImageBackground>
        </TouchableOpacity>
    )
}


export default HomePage;


