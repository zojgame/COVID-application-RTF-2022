import React, {Component, useState} from "react";
import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";


const InfoTxt = 'На данной странице предоставлены различные комплексы упражнений, способствующих восстановлению ' +
    'работы различных органов. Для того, чтобы приступить к упражнениям, выберите на что будете делать упражнения.w';

const BrainTxt = 'Инфекция нарушает функции центральной нервной системы и пострадать от этого может даже' +
    ' человек, не имевший раньше подобных заболеваний. Это могут быть' +
    ' и тревожные расстройства, и депрессивные состояния, и подавленность.';
const MusculesTxt = 'Боли в мышцах и суставах после ковида возникают у немалого процента перенесших это тяжелое заболевание.' +
    ' Особенно высок риск развития таких осложнений у пожилых пациентов, которые болели в средней, либо тяжелой форме. ' +
    'Нередко это осложнение сочетается с поражением мышц, связок, сухожилий, суставов и других органов.';
const LungsTxt = 'Пневмония, осложненная Covid-19, редко проходит совсем без последствий. ' +
    'Даже при получении отрицательного теста после лечения, нередко сопутствует одышка. ' +
    'Причиной является фиброз – пораженные участки легкого не могут функционировать в полную силу, поэтому приходится дышать чаще. ' +
    'Восстановление легочной функции можно начать уже во время пневмонии.';
const HeartTxt = 'По последним данным короновирус может оказывать различное влияние на сердечно- сосудистую систему: ' +
    'острое поражение сердечной мышцы; развитие хронического заболевания сердца; ' +
    'приводить к декомпенсации, имеющихся хронических сердечно- сосудистых заболеваний; ' +
    'вызывать токсическое влияние препаратов, применяемых для лечения короновирусной инфекции.';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        //alignItems: 'center',

    },
    preview: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: "90vw",
        height: '40vw',
        marginTop: '2vh',
        borderRadius: 15,
        padding: '4vw',
    },
    previewImage: {
        width: '35vw',
        height: '35vw',
    },
    previewTxt: {
        color: 'white',
        fontSize: '7vw',
        textAlign: 'left',
        fontWeight: 'bold'
    },
    exerciseContainer: {
        padding: '4vw',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
    },
    exerciseBtn: {
        marginRight: '3vw',

    },
    exreciseContent: {
        width: '40vw',
        height: '50vw',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },
    exerciseTxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: '7vw',
        fontWeight: 'bold'
    },
    exerciseImg: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '38vw',
        height: '38vw',
    },
    conclusionContainer:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#e8e8e8',
    },
    conclusionImage:{
        width:'50vw',
        height:'50vw',

    },
    conclusionTxt:{
        textAlign:'left',
        fontSize:'5vw',
        fontWeight:'bold',
        color:'#8d74c8',
        marginTop:'auto',
        marginBottom:'auto',

    },
})


export default function ExercisesPage({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <View>
                <LinearGradient style={styles.preview} start={{x: 0, y: 0}} end={{x: 50, y: 50}}
                                colors={['#58CCF4', '#4F2DC1']}>
                    <Text style={styles.previewTxt}>Выберите упражнения</Text>
                    <Image resizeMode={'contain'} style={styles.previewImage}
                           source={require('../../Images/ExercisePagePreview.png')}/>
                </LinearGradient>
            </View>
            <View>
                <ScrollView style={styles.exerciseContainer} showsVerticalScrollIndicator={false} horizontal={true}>
                    <View style={styles.exerciseBtn}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('MusculesExercisesPage')
                        }}>
                            <LinearGradient style={styles.exreciseContent} colors={['#D42A2E', '#F09F76']}>
                                <Image style={styles.exerciseImg} source={require('../../Images/armExercise.png')}/>
                                <Text style={styles.exerciseTxt}>Мышцы</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.exerciseBtn}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('BrainExercisePage')
                        }}>
                            <LinearGradient style={styles.exreciseContent} colors={['#21BFF7', '#68E3F8']}>
                                <Image style={styles.exerciseImg} source={require('../../Images/brainExercise.png')}/>
                                <Text style={styles.exerciseTxt}>Мозг</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.exerciseBtn}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('LungsExercisesPage')
                        }}>
                            <LinearGradient style={styles.exreciseContent} colors={['#7A67CB', '#9483E9']}>
                                <Image style={styles.exerciseImg} source={require('../../Images/lungsExercise.png')}/>
                                <Text style={styles.exerciseTxt}>Легкие</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.exerciseBtn}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('HeartExercisesPage')
                        }}>
                            <LinearGradient style={styles.exreciseContent} colors={['#EDC078', '#DF912A']}>
                                <Image style={styles.exerciseImg} source={require('../../Images/heartExercise.png')}/>
                                <Text style={styles.exerciseTxt}>Сердце</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.conclusionContainer}>
                <Image style={styles.conclusionImage} resizeMode={'contain'} source={require('../../Images/finalExercise.png')}/>
                <Text style={styles.conclusionTxt}>Данные упражнения позволят вам быстрее оправиться после заболевания</Text>
            </View>
        </ScrollView>
    )
}



