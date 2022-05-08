import React, {Component, useState} from "react";
import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";


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

function ExercisesPage(props) {
    let [text,changeText]=useState('абоба');
    return (
        <ScrollView style={styles.container}>
            <View style={styles.pageHeaderBlock}>
                <Text style={styles.pageHeaderTxt}>На что будете делать упражнения?</Text>
            </View>
            <View style={ {backgroundColor:'#8D74C8'}}>
            <View style={styles.bntBlock}>
                <TouchableOpacity style={styles.btnItem} onPress={()=>changeText('ты нефор')}>
                    <Image style={styles.btnImage} source ={require('../../Images/ExercisesPageArm.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnItem}>
                    <Image style={styles.btnImage} source ={require('../../Images/ExercisesPageBrain.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnItem}>
                    <Image style={styles.btnImage} source ={require('../../Images/ExercisesPageLungs.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnItem}>
                    <Image style={styles.btnImage} source ={require('../../Images/ExercisesPageHeart.png')}/>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.descriptionBlock}>
                <Text style={styles.descriptionHeader}>Влияние на мозг</Text>
                <Text style={styles.descriptionTxt}>
                    {text}
                </Text>
            </View>
            <View style={styles.proceedBtnBlock}>
                <TouchableOpacity onPress={() => { }}>
                    <LinearGradient style={styles.proceedBtn} start={{x:0,y:1}} end={{x:1,y:0}} colors={['#8d74c8','#be24bb']} >
                        <Text style={styles.proceedBtnTxt}>Приступить</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ExercisesPage;


