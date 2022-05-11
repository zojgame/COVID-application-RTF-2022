import React, {Component, useState} from "react";
import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {createStackNavigator} from "@react-navigation/stack";
import HomePage from "../HomePage/HomePage";


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    pageHeaderBlock:{
        height:'35vw',
        backgroundColor:'#8D74C8'
    },
    pageHeaderTxt:{
        fontSize:'8vw',
        fontWeight:'700',
        textAlign:'center',
        color:'white',
    },
    bntBlock:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'white',
        paddingTop:'5vw',
        paddingBottom:'5vw',
        borderTopLeftRadius: '5%  10%',
        borderTopRightRadius: '5% 10%',
    },
    btnItem:{
        padding:'3vw',
        borderRadius:'100%',
        border:'1px solid black'
    },
    btnImage:{
        width:'12vw',
        height:'12vw',
    },
    descriptionBlock:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
    },
    descriptionHeader:{
        fontSize:'7vw',
        fontWeight:'400',
        letterSpacing:'1vw',
        marginBottom:'2vw',
        paddingBottom:'2vw',
        textAlign:'center',
        color:'white',
        backgroundColor:'#8D74C8'
    },
    descriptionTxt:{
        padding:'2vw',
        textAlign:'center',
        color:'white',
        backgroundColor:'#8D74C8',
        fontSize:'5vw',
        borderBottomLeftRadius: '5%  10%',
        borderBottomRightRadius: '5% 10%',
    },
    proceedBtnBlock:{
        display:"flex",
        alignItems:'center',
        backgroundColor:'white',
        marginTop:'3vw',
    },
    proceedBtn:{
        borderRadius:50,
        paddingVertical:'2vw',
       paddingHorizontal:'5vw',
    },
    proceedBtnTxt:{
        color:'white',
        fontSize:'12vw',
    }
})

const InfoTxt='На данной странице предоставлены различные комплексы упражнений, способствующих восстановлению ' +
    'работы различных органов. Для того, чтобы приступить к упражнениям, выберите на что будете делать упражнения.w';

const BrainTxt= 'Инфекция нарушает функции центральной нервной системы и пострадать от этого может даже' +
    ' человек, не имевший раньше подобных заболеваний. Это могут быть' +
    ' и тревожные расстройства, и депрессивные состояния, и подавленность.';
const MusculesTxt='Боли в мышцах и суставах после ковида возникают у немалого процента перенесших это тяжелое заболевание.' +
    ' Особенно высок риск развития таких осложнений у пожилых пациентов, которые болели в средней, либо тяжелой форме. ' +
    'Нередко это осложнение сочетается с поражением мышц, связок, сухожилий, суставов и других органов.';
const LungsTxt ='Пневмония, осложненная Covid-19, редко проходит совсем без последствий. ' +
    'Даже при получении отрицательного теста после лечения, нередко сопутствует одышка. ' +
    'Причиной является фиброз – пораженные участки легкого не могут функционировать в полную силу, поэтому приходится дышать чаще. ' +
    'Восстановление легочной функции можно начать уже во время пневмонии.';
const HeartTxt='По последним данным короновирус может оказывать различное влияние на сердечно- сосудистую систему: ' +
    'острое поражение сердечной мышцы; развитие хронического заболевания сердца; ' +
    'приводить к декомпенсации, имеющихся хронических сердечно- сосудистых заболеваний; ' +
    'вызывать токсическое влияние препаратов, применяемых для лечения короновирусной инфекции.';



export default function ExercisesPage({navigation}) {
    const [text,changeText]=useState(InfoTxt);
    const [headerTxt,changeHeader]=useState('Влияние на организм');
    const [exercisesPage,changeExercisePage]=useState('BrainExercisePage')
    return (
        <ScrollView style={styles.container}>
            <View style={styles.pageHeaderBlock}>
                <Text style={styles.pageHeaderTxt}>На что будете делать упражнения?</Text>
            </View>
            <View style={ {backgroundColor:'#8D74C8'}}>
            <View style={styles.bntBlock}>
                <BtnItem changeHeaderTxt={changeHeader}
                         changeText={changeText}
                         changeExercisePage={changeExercisePage}
                         headerTxt={'Влияние на мышцы'}
                         txt={MusculesTxt}
                         exercisesPage={'MusculesExercisesPage'}
                         src = {require('../../Images/ExercisesPageArm.png')}
                />
                <BtnItem changeHeaderTxt={changeHeader}
                         changeText={changeText}
                         changeExercisePage={changeExercisePage}
                         headerTxt={'Влияние на мозг'}
                         txt={BrainTxt}
                         exercisesPage={'BrainExercisePage'}
                         src = {require('../../Images/ExercisesPageBrain.png')}
                />
                <BtnItem changeHeaderTxt={changeHeader}
                         changeText={changeText}
                         changeExercisePage={changeExercisePage}
                         headerTxt={'Влияние на легкие'}
                         txt={LungsTxt}
                         exercisesPage={'LungsExercisesPage'}
                         src = {require('../../Images/ExercisesPageLungs.png')}
                />
                <BtnItem changeHeaderTxt={changeHeader}
                         changeText={changeText}
                         changeExercisePage={changeExercisePage}
                         headerTxt={'Влияние на сердце'}
                         txt={HeartTxt}
                         exercisesPage={'HeartExercisesPage'}
                         src={require('../../Images/ExercisesPageHeart.png')}
                />
            </View>
            </View>
            <View style={styles.descriptionBlock}>
                <Text style={styles.descriptionHeader}>{headerTxt}</Text>
                <Text style={styles.descriptionTxt}>
                    {text}
                </Text>
            </View>
            <View style={styles.proceedBtnBlock}>
                <TouchableOpacity onPress={() => {navigation.navigate(exercisesPage)}}>
                    <LinearGradient style={styles.proceedBtn} start={{x:0,y:1}} end={{x:1,y:0}} colors={['#8d74c8','#be24bb']} >
                        <Text style={styles.proceedBtnTxt}>Приступить</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

function BtnItem(props){
    return(
            <TouchableOpacity style={styles.btnItem}
                              onPress={()=>{
                                  props.changeHeaderTxt(props.headerTxt)
                                  props.changeText(props.txt)
                                  props.changeExercisePage(props.exercisesPage)
                              }
            }>
                <Image style={styles.btnImage} source ={props.src}/>
            </TouchableOpacity>
    )
}


