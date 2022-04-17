import React from 'react';
import {
    Image, ImageBackground, StyleSheet, Text, View,
} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center'
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
        fontFamily: 'Anton',
        fontSize:23,
        width:150,
        height:50,
        fontWeight:'bold',
        color:'rgb(141,116,200)'
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
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
