import React, { Component } from "react";
import {View, Text, ScrollView, Image, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import { deviceHeight, deviceWidth } from "../const";
import {BackgroundImage} from "react-native-elements/dist/config";

const styles=StyleSheet.create({
    image1:{
        maxWidth:'100%',
        minHeight:deviceHeight*35/100,
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
        textAlign:'center',
        border:'3px solid rgba(2, 82, 166,0.3)',
        borderRadius:20,
        backgroundColor:'rgba(89, 134, 247,0.6);'
    },
    description:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        margin:deviceHeight*3/100,
        justifyContent:'space-around',
    },
    descriptionContainer:{
      display:"flex",

    },
    descriptionHeader:{
        fontSize:12,
        textAlign:'center',
        color:'white',
        border:'3px solid rgba(2, 82, 166,0.3)',
        borderRadius:10,
        backgroundColor:'rgb(150, 177, 210)'

    },
    descriptionText:{
        fontSize:10,
        textAlign:'center',
        marginBottom:deviceHeight * 1 / 100,
        borderBottomWidth:1,
        color:'#00253a',
    },
    image2:{
        width:'30%',
        height:'100%',

    },
    immunityContainer:{
        display:'flex',
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
    },
    immunityHeader:{
        color:'white',
        fontSize:15,
        border:'2px solid rgba(2, 82, 166,0.3)',
        borderRadius:10,
        backgroundColor:'rgb(150, 177, 220)',
        marginBottom:deviceHeight * 2 / 100,
    },
    immunityTextC:{
        display:'grid',
        gridTemplateColumns: '40% 40%',
        justifyContent:'space-between',
    },
    immunityText:{
        textAlign:'center',
        fontSize:15,
        marginBottom:4,
        border:'none',
        backgroundColor:' rgba(2, 82, 166,0.1)',
        borderRadius:10,

    },
})

function HomePage(props) {
  return (
    <ScrollView style={styles.container}>
        <Image  style={styles.image1}  source={require('../Images/homepage3.webp')}/>
        <Text style={styles.text}>{"Данное приложение поможет вам реабилитироваться после перенесенной болезни Covid-19."}</Text>
        <View style={styles.description}>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionHeader}>На данной странице вы узнаете:</Text>
                <Text style={styles.descriptionText}>Как covid-19 влияет на организм</Text>
                <Text style={styles.descriptionText}>Воможные осложнения после болезни</Text>
                <Text style={styles.descriptionText}>Время восстановления после болезни</Text>
                <Text style={styles.descriptionText}>Рекомендации по восстановлению</Text>
            </View>
            <Image style={styles.image2} resizeMode={'contain'} source={require('../Images/homepage4.png')}/>
        </View>
        <View style={styles.immunityContainer}>
            <Text style={styles.immunityHeader}>Укрепление иммунитета после Covid-19: </Text>
            <BackgroundImage resizeMode={'center'} source={require('../Images/homePage5.png')}>
                <View style={styles.immunityTextC}>
                    <Text style={styles.immunityText}>Вести активный отдых</Text>
                    <Text style={styles.immunityText}>Избегать стресса</Text>
                    <Text style={styles.immunityText}>Соблюдать правила личной гигиены</Text>
                    <Text style={styles.immunityText}>Отказаться от алкогольных напитков</Text>
                    <Text style={styles.immunityText}>Следить за своим питанием</Text>
                    <Text style={styles.immunityText}>Спать достаточно времени</Text>
                </View>
            </BackgroundImage>
        </View>
    </ScrollView>
  );
}

export default HomePage;


