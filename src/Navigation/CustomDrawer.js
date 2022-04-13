import React from 'react';
import {
  Image, ImageBackground, Text, View,
} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#9BA5CA' }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
