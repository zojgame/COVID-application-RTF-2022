import {StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {TextArea} from "native-base";

const styles = StyleSheet.create({
    container:{
        display: "flex",
        width: '80vw',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:'5vw',
    },
    input:{
        marginTop:'5vw',
        backgroundColor:'rgba(181, 183, 221,0.3)',
    },
    sexContainer:{
        display:'flex',
        flexDirection:'row',
        marginVertical:'2vw',
    }
})

export default function ModalContent() {
    let [firstName,changeFirstName]=useState('');
    let [secondName,changeSecondName]=useState('');
    let [lastName,changeLastName]=useState('');
    let [sex,changeSex]=useState('');
    let [age,changeAge]=useState('');
    let [form,changeForm]=useState('');
    let [comment,changeComment]=useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Редактирование данных</Text>
            <TextInput style={styles.input}  type={'text'} name={'firstName'} onChange={e=>changeFirstName(e.target.value)} value={firstName} placeholder={'Фамилия'}/>
            <TextInput style={styles.input} type={'text'} name={'secondName'} onChange={e=>changeSecondName(e.target.value)} value={secondName} placeholder={'Имя'}/>
            <TextInput style={styles.input} type={'text'} name={'lastName'} onChange={e=>changeLastName(e.target.value)} value={lastName} placeholder={'Отчество'}/>
            <View style={styles.sexContainer}>
                <Text>Пол</Text>
                <input  type={'radio'} id={'male'} name={'sex'} value={'Мужской'} onChange={(e)=>changeSex(e.target.value)}/>
                <label htmlFor={'male'}>Мужской</label>
                <input type={'radio'} id={'female'} name={'sex'} value={'Женский'} onChange={(e)=>changeSex(e.target.value)}/>
                <label htmlFor={'female'}>Женский</label>
            </View>
            <TextInput  style={styles.input} type={'number'} name={'age'} onChange={e=>changeAge(e.target.value)} value={age} placeholder={'Возраст'}/>
            <View style={styles.sexContainer}>
                <Text>Форма болезни</Text>
                <input type={'radio'} id={'light'} name={'form'} value={'Легкая'} onChange={(e)=>changeForm(e.target.value)}/>
                <label htmlFor={'light'}>Легкая</label>
                <input type={'radio'} id={'medium'} name={'form'} value={'Средняя'} onChange={(e)=>changeForm(e.target.value)}/>
                <label htmlFor={'medium'}>Средняя</label>
                <input type={'radio'} id={'hard'} name={'form'} value={'Тяжелая'} onChange={(e)=>changeForm(e.target.value)}/>
                <label htmlFor={'hard'}>Тяжелая</label>
            </View>
            <View>
                <Text>Коментарий</Text>
                <TextInput style={styles.input} value={comment} type={'text'} name={'comment'} onChange={(e)=>changeComment(e.target.value)}/>
            </View>

        </View>
    )
}