import React, {useState} from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    Modal, TextInput
} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import ModalContent from "./ModalContent";
import {editUserData} from "../../redux/asyncActions/editUserData";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',

    },
    imageBlock: {
        backgroundColor: '#b5b7dd',

    },
    headImage: {
        width: '100vw',
        height: '30vh',
    },
    dataContainer: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: 'white',
        position: 'relative',
        top: '-10vw',
    },
    usernameBlock: {
        margin: '5vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    userIcon: {
        width: '15vw',
        height: '15vw'
    },
    userName: {
        marginLeft: '2vw',
        marginVertical: 'auto',
        fontSize: '5vw',
        fontWeight: 'bold',
    },
    userdata: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    userDataTitle: {
        fontSize: '5vw',
        textAlign: 'center'
    },
    userDataContent: {
        marginTop: '2vw',
        fontWeight: 'bold',
        fontSize: '5vw',
    },
    commentBlock: {
        backgroundColor: '#d5cdf4',
        borderRadius: 20,
        marginVertical: '5vw',
        marginHorizontal: '5vw',
    },
    commentTitle: {
        fontSize: '5vw',
        fontWeight: 'bold',
        marginLeft: '5vw',
        marginTop: '3vw',
    },
    comment: {
        fontSize: '5vw',
        marginHorizontal: '6.5vw',
        marginVertical: '2vw',
    },
    btn: {
        backgroundColor: '#8d74c8',
        marginHorizontal: 'auto',
        paddingVertical: '3vw',
        paddingHorizontal: '10vw',
        borderRadius: 10,
    },
    btnTxt: {
        fontSize: '4vw',
        fontWeight: 'bold',
        color: 'white',
    },

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modal: {
        display: "flex",
        width: '80vw',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalCloseBtn: {
        marginTop: '2vw',
    },
    closeBtnTxt: {
        fontSize: '4vw',
        color: 'blue',
        textAlign: 'center',
    },
    containerModal: {
        display: "flex",
        width: '80vw',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '5vw',
    },
    input: {
        marginTop: '5vw',
        backgroundColor: 'rgba(181, 183, 221,0.3)',
    },
    sexContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: '2vw',
    }
})


export default function ProfilePage(props) {
    const userData = useSelector(store => store.userData.userData)
    let token = useSelector(store=>store.token.token)
    let dispatch = useDispatch()
    let [isModalVisible, changeIsModalVisible] = useState(false);
    let [firstName,changeFirstName]=useState('');
    let [secondName,changeSecondName]=useState('');
    let [lastName,changeLastName]=useState('');
    let [sex,changeSex]=useState('');
    let [age,changeAge]=useState('');
    let [diagnosis,changeDiagnosis]=useState('');
    let [comment,changeComment]=useState('');

    const editBtnOnClick=()=>{
        if(firstName&&secondName&&lastName&&sex&&age&&diagnosis) {
            let method = userData.first_name ? 'POST' : 'PUT'
            changeIsModalVisible(false)
            dispatch(editUserData({
                first_name: firstName,
                second_name: secondName,
                last_name: lastName,
                sex: sex,
                age: age,
                diagnosis: diagnosis,
                comment: comment
            }, token, method))
        }
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageBlock}>
                <Image style={styles.headImage} resizeMode={'contain'} source={require('../../Images/3777968.jpg')}/>
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.usernameBlock}>
                    <Image style={styles.userIcon} source={require('../../Images/user-male-circle.png')}/>
                    <Text
                        style={styles.userName}>{userData.first_name ?? 'не указано'} {userData.second_name} {userData.last_name}</Text>
                </View>
                <View style={styles.userdata}>
                    <View>
                        <Text style={styles.userDataTitle}>Пол</Text>
                        <Text style={styles.userDataContent}>{userData.sex ?? 'не указано'}</Text>
                    </View>
                    <View>
                        <Text style={styles.userDataTitle}>Возраст</Text>
                        <Text style={styles.userDataContent}>{userData.age ?? 'не указано'}</Text>
                    </View>
                    <View>
                        <Text style={styles.userDataTitle}>Форма болезни</Text>
                        <Text style={styles.userDataContent}>{userData.diagnosis ?? 'не указано'}</Text>
                    </View>
                </View>
                <View style={styles.commentBlock}>
                    <Text style={styles.commentTitle}>Комментарий</Text>
                    <Text style={styles.comment}>{userData.comment ?? 'не указано'}</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        changeIsModalVisible(true)
                    }}>
                        <Text style={styles.btnTxt}>Редактировать</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal transparent={true}
                   animationType={"fade"}
                   visible={isModalVisible}
                   onRequestClose={() => changeIsModalVisible(false)}
            >
                <TouchableOpacity disabled={true} style={styles.modalContainer}>
                    <View style={styles.modal}>

                        <View style={styles.container}>
                            <Text style={styles.title}>Редактирование данных</Text>
                            <TextInput style={styles.input} type={'text'} name={'firstName'}
                                       onChange={e => changeFirstName(e.target.value)} value={firstName}
                                       placeholder={'Фамилия'}/>
                            <TextInput style={styles.input} type={'text'} name={'secondName'}
                                       onChange={e => changeSecondName(e.target.value)} value={secondName}
                                       placeholder={'Имя'}/>
                            <TextInput style={styles.input} type={'text'} name={'lastName'}
                                       onChange={e => changeLastName(e.target.value)} value={lastName}
                                       placeholder={'Отчество'}/>
                            <View style={styles.sexContainer}>
                                <Text>Пол</Text>
                                <input type={'radio'} id={'male'} name={'sex'} value={'Мужской'}
                                       onChange={(e) => changeSex(e.target.value)}/>
                                <label htmlFor={'male'}>Мужской</label>
                                <input type={'radio'} id={'female'} name={'sex'} value={'Женский'}
                                       onChange={(e) => changeSex(e.target.value)}/>
                                <label htmlFor={'female'}>Женский</label>
                            </View>
                            <TextInput style={styles.input} type={'number'} name={'age'}
                                       onChange={e => changeAge(e.target.value)} value={age} placeholder={'Возраст'}/>
                            <View style={styles.sexContainer}>
                                <Text>Форма болезни</Text>
                                <input type={'radio'} id={'light'} name={'form'} value={'Легкая'}
                                       onChange={(e) => changeDiagnosis(e.target.value)}/>
                                <label htmlFor={'light'}>Легкая</label>
                                <input type={'radio'} id={'medium'} name={'form'} value={'Средняя'}
                                       onChange={(e) => changeDiagnosis(e.target.value)}/>
                                <label htmlFor={'medium'}>Средняя</label>
                                <input type={'radio'} id={'hard'} name={'form'} value={'Тяжелая'}
                                       onChange={(e) => changeDiagnosis(e.target.value)}/>
                                <label htmlFor={'hard'}>Тяжелая</label>
                            </View>
                            <View>
                                <Text>Коментарий</Text>
                                <TextInput style={styles.input} value={comment} type={'text'} name={'comment'}
                                           onChange={(e) => changeComment(e.target.value)}/>
                            </View>
                            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => editBtnOnClick()}>
                                <Text style={styles.closeBtnTxt}>Отправить</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </ScrollView>
    );
}
