import React, {useEffect, useState} from 'react';
import {
    Text, StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity, Modal, View,
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modal: {
        display: "flex",
        height: '30vw',
        width: '80vw',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalText: {
        fontSize: '5vw',
        textAlign: 'center',
        color: 'black',

    },
    modalCloseBtn: {
        marginTop: '2vw',

    },
    closeBtnTxt: {
        fontSize: '4vw',
        color: 'blue',
        textAlign: 'center',
    }
});

function AuthorizationPage(props) {
    let [loginValue, setLogin] = useState(props.login);
    let [passwordValue, setPassword] = useState(props.password);
    let [isModalVisible, changeIsModalVisible] = useState(false)

    function handleTaskSubmit() {
        getUserToken({username: loginValue, password: passwordValue})
            .then(res => {
                console.log(res)
                checkUserToken(res)
            })
    }

    function checkUserToken(res) {
        if (res === 'Данной учетной записи не существует' || res === undefined) {
            changeIsModalVisible(true);
        }
        else {
            setUserToken(res).then(res=>{
                props.navigation.navigate('HomePage')
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <Modal transparent={true}
                   animationType={"fade"}
                   visible={isModalVisible}
                   onRequestClose={() => changeIsModalVisible(false)}
            >
                <TouchableOpacity disabled={true} style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={styles.modalText}>Неправильно введен логин или пароль</Text>
                        <TouchableOpacity style={styles.modalCloseBtn} onPress={() => changeIsModalVisible(false)}>
                            <Text style={styles.closeBtnTxt}>Закрыть</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>

            <Image style={styles.image} source={require('../../Images/LoginPage.png')}/>
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
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('RegistrationPage')
            }}>
                <Text style={styles.register}>Зарегистрироваться</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
async function setUserToken(token){
    try {
        await AsyncStorage.setItem('@userToken', JSON.stringify(token))
    } catch (error){
        console.log(error)
    }
}

async function getUserToken(userdata) {

    return fetch('http://127.0.0.1:8000/login/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(userdata),
        }
    ).then(res => res.json())
        .catch(function (error) {
            console.log('error')
        });
}


export default AuthorizationPage;
