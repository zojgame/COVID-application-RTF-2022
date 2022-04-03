import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'oldlace',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  fontText: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    textAlign: 'center',
    fontSize: 25,
  },
});
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fontText}>ПРИЛОЖЕНИЕ</Text>
    </View>
  );
}
