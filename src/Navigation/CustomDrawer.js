import React from 'react';
import {  Image, TouchableOpacity, StyleSheet, Text, View,} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigation from './navigation';

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        
    },
    box:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    boxImage:{
        width:110,
        height:110,
    },
    boxText:{
        fontFamily: 'Roboto',
        fontSize:23,
        width:150,
        height:50,
        fontWeight:'bold',
        color:'rgb(141,116,200)'
    },
    bottomContainer:{
      padding: 20, 
      borderTopWidth: 1, 
      borderTopColor: '#ccc',
      marginTop: 200
    }
});

export default function CustomDrawer(props) {
  return (
    <View >
      <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
          <View style={styles.box}>
              <Image style={styles.boxImage} source={require("../Images/stopCovid.png")}/>
              <Text style={styles.boxText}>Имя<br/>Фамилия</Text>
          </View>
          <View style={{backgroundColor: 'white'}}>
            <DrawerItemList {...props} />
          </View>               
      </DrawerContentScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={{marginVertical: 15}} onPress={() =>{
        }}>
          <View style={{flexDirection:'row', alignItems: 'center' }}>
            <Ionicons name='exit-outline' size={22} />
            <Text style={{paddingLeft: 15, fontFamily: 'Roboto-Medium', fontSize: 15, fontWeight: 'bold'}}>Выйти</Text>
          </View>
          
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
