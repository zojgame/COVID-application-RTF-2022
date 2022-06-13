import React, {Component, useState} from "react";
import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {useSelector} from "react-redux";

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
    categoryText:{
        marginTop:'3vw',
        padding: '4vw',
        paddingBottom:0,
        fontSize:'6vw',
        fontWeight:'bold',
    },
    exerciseBtn: {
        marginRight: '3vw',
    },
    exreciseContent: {
        width: '40vw',
        height: '32vw',
        borderRadius: 15,
        overflow:'hidden',
    },
    exerciseTxt: {
        marginTop:'auto',
        marginBottom:'auto',
        marginLeft:'3vw',
        textAlign: 'left',
        color: 'white',
        fontSize: '7vw',
        fontWeight: 'bold',
        zIndex:100,
    },
    exerciseImg: {
        //marginRight: 'auto',
        //marginLeft: 'auto',
        width: '40vw',
        height: '40vw',
        position:'absolute',
        bottom:'-5vw',
        right:'-5vw',
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
                <Text style={styles.categoryText}>Категории упражнений</Text>
                <ScrollView style={styles.exerciseContainer} showsVerticalScrollIndicator={false} horizontal={true}>
                    <View style={styles.exerciseBtn}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('MusculesExercisesPage')
                        }}>
                            <LinearGradient style={styles.exreciseContent} colors={['#C8383B', '#D1585A']}>
                                <Image  style={styles.exerciseImg} source={require('../../Images/armExercise.png')}/>
                                <Text style={styles.exerciseTxt}>Мышцы</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.exerciseBtn}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('BrainExercisePage')
                        }}>
                            <LinearGradient style={styles.exreciseContent} colors={['#0796C9', '#09B1CD']}>
                                <Image style={styles.exerciseImg} source={require('../../Images/brainExercise.png')}/>
                                <Text style={styles.exerciseTxt}>Мозг</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.exerciseBtn}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('LungsExercisesPage')
                        }}>
                            <LinearGradient style={styles.exreciseContent} colors={['#5941BD', '#9483E9']}>
                                <Image style={styles.exerciseImg} source={require('../../Images/lungsExercise.png')}/>
                                <Text style={styles.exerciseTxt}>Легкие</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.exerciseBtn}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('HeartExercisesPage')
                        }}>
                            <LinearGradient style={styles.exreciseContent} colors={['#CB811F', '#E7AA47']}>
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



