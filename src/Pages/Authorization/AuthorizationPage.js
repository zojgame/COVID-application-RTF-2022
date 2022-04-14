import React, { useState } from 'react';
import {
  Text, StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 'wrap',
  },
  image: {
    width: 270,
    height: 270,
  },
  text: {
    fontFamily: 'Anton',
    fontSize: 25,
    color: '#76599c',
    fontWeight: 'bold',
  },
  input: {
    height: 60,
    border: '3px solid #9e86bd',
    borderRadius: 50,
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'Anton',
  },
  btn: {
    backgroundColor: '#76599c',
    borderRadius: 50,
    marginTop: 20,
    width: 200,
    height: 40,
    textAlign: 'center',
  },
  btntxt: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'Anton',
    margin: 'auto',
  },
  register: {
    marginTop: 15,
    color: '#917dab',
  },
});

function AuthorizationPage(props) {
  const [loginValue, setLogin] = useState('');
  const [passwordValue, setPassword] = useState('');

  function handleTaskSubmit() {
    alert(`${loginValue} + ${passwordValue}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('../../Images/LoginPage.png')} />
      <Text style={styles.text}>Войдите в аккаунт</Text>
      <TextInput
        style={styles.input}
        placeholder="Логин"
        value={loginValue}
        onChange={(e) => setLogin(e.target.value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        value={passwordValue}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TouchableOpacity style={styles.btn} onPress={handleTaskSubmit}>
        <Text style={styles.btntxt}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { }}>
        <Text style={styles.register}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default AuthorizationPage;
