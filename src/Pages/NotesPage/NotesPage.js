import React, {Component, useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Modal,
    TextInput,
} from 'react-native';
import {BarChart} from "react-native-chart-kit";
import {useDispatch, useSelector} from "react-redux";
import {addNotesCard} from "../../redux/notesReducer";

const styles = StyleSheet.create({
    btnContainer: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    btn: {
        backgroundColor: 'rgba(145, 109, 199,0.9)',
        marginTop: '3vw',
        marginBottom: '3vw',
        padding: '1vw',
        width: '40vw',
        borderRadius: 5,
    },
    btnTxt: {
        color: 'white',
        fontSize: '4.5vw',
        textAlign: 'center',
    },
    addBtn: {
        backgroundColor: 'rgba(145, 109, 199,0.5)',
        width: '70vw',
        marginHorizontal: 'auto',
        marginTop: '5vw',
        height: '10vw'
    },
    diagramTitle: {
        textAlign: 'center',
        fontSize: '4.5vw',
        marginTop: '3vw',
    },
    addBtnText: {
        color: 'white',
        fontSize: '6vw',
        textAlign: 'center',
        marginVertical: 'auto',
    },
    cardContainer: {
        marginTop: '5vh',
        borderRadius: 15,
        backgroundColor: 'rgba(141, 116, 200, 0.3)',
        width: '90vw',
        height: '30vw',
        marginHorizontal: 'auto',
    },
    cardTitle: {
        textAlign: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        fontSize: '5vw',
        fontWeight: 'bold',
        backgroundColor: 'rgba(141, 116, 200, 0.5)',
        borderBottomWidth: 1,
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        ju: 'space-between',
    },
    cardText: {
        fontSize: '4.5vw',
        width: '40vw',
        marginHorizontal: 'auto',
        marginTop: '2.5vw',
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
        marginVertical: 'auto',
        marginHorizontal: 'auto'
    },
    modalText: {
        fontSize: '5vw',
        textAlign: 'center',
        color: 'black',

    },
    modalContent:{
      display:'flex',
      flexDirection:'column',
    },
    modalContentInputBlock:{
      width:'70vw',
        marginHorizontal:'auto',
        marginBottom:'3vw',
    },
    modalInput:{
        backgroundColor:'rgba(212, 204, 229,0.5)',
        fontSize:'5vw',
    },
    modalBtnBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    modalCloseBtn: {
        marginTop: '2vw',

    },
    closeBtnTxt: {
        fontSize: '4vw',
        color: 'blue',
        textAlign: 'center',
    }
})

function NotesPage(props) {
    let dispatch = useDispatch()
    let cards = useSelector(store=>store.notes.notes);
    let [isModalVisible, changeIsModalVisible] = useState(false)
    let [diagramTitle, changeDiagramTitle] = useState('пульса');
    let [diagramData, changeDataDiagram] = useState(getDiagramData('Pulse', cards))
    let [date,changeDate]=useState()
    let [pulse,changePulse]=useState();
    let [temperature,changeTemperature]=useState();
    let [sleepTime,changeSleepTime]=useState();
    let [exercises, changeExercises]=useState();
    useEffect(()=>{
        changeDataDiagram(getDiagramData('Pulse', cards))
    },[])
    const data = {
        datasets: [
            {
                data: diagramData.reverse()
            }
        ]
    };
    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        color: (opacity = 1) => `rgba(141, 120, 230, 1)`,
        backgroundGradientFrom: 'rgb(242, 242, 242)',
        backgroundGradientTo: 'rgb(242, 242, 242)',
    };

    function addBtnOnCLick(){
        if(date&&pulse&&temperature&&sleepTime&&exercises){
            dispatch(addNotesCard(
                {
                    Date:date,
                    Pulse:Number(pulse),
                    Temperature:Number(temperature),
                    SleepTime:Number(sleepTime),
                    Exercises:Number(exercises)
                }
            ))
            changeIsModalVisible(false)
        }
    }

    function changeInput(e,callback){
        callback(e.target.value)
    }

    return (
        <ScrollView>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}
                                  onPress={() => {
                                      changeDiagramTitle('пульса');
                                      changeDataDiagram(getDiagramData('Pulse', cards))
                                  }}
                >
                    <Text style={styles.btnTxt}>Пульс</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}
                                  onPress={() => {
                                      changeDiagramTitle('времени сна')
                                      changeDataDiagram(getDiagramData('SleepTime', cards))
                                  }}
                >
                    <Text style={styles.btnTxt}>Время сна</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}
                                  onPress={() => {
                                      changeDiagramTitle('температуры')
                                      changeDataDiagram(getDiagramData('Temperature', cards))
                                  }}
                >
                    <Text style={styles.btnTxt}>Температура</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}
                                  onPress={() => {
                                      changeDiagramTitle('выполнения упражнений')
                                      changeDataDiagram(getDiagramData('Exercises', cards))
                                  }}
                >
                    <Text style={styles.btnTxt}>Упражнения</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.diagramTitle}>Диаграмма показателей {diagramTitle}</Text>
            <BarChart
                style={{}}
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />

            <TouchableOpacity style={styles.addBtn} onPress={() => changeIsModalVisible(true)}>
                <Text style={styles.addBtnText}>Добавить</Text>
            </TouchableOpacity>

            <Modal transparent={true}
                   animationType={"fade"}
                   visible={isModalVisible}
                   onRequestClose={() => changeIsModalVisible(false)}
            >
                <TouchableOpacity disabled={true} style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Text style={styles.modalText}>Карточка самонаблюдения</Text>
                    <View style={styles.modalContent}>
                        <View style={styles.modalContentInputBlock}>
                            <label htmlFor={'Date'}>Дата</label>
                            <TextInput
                                style={styles.modalInput}
                                name={'Date'}
                                type={'date'}
                                value={date}
                                onChange={(e)=>changeInput(e,changeDate)}
                            />
                        </View>
                        <View style={styles.modalContentInputBlock}>
                            <label htmlFor={'Pulse'}>Средний пульс за день</label>
                            <TextInput
                                style={styles.modalInput}
                                name={'Pulse'}
                                keyboardType='numeric'
                                vlaue={pulse}
                                onChange={(e)=>changeInput(e,changePulse)}
                            />
                        </View>
                        <View style={styles.modalContentInputBlock}>
                            <label htmlFor={'Temperature'}>Средняя температура за день</label>
                            <TextInput
                                style={styles.modalInput}
                                name={'Temperature'}
                                keyboardType='numeric'
                                type={'number'}
                                vlaue={temperature}
                                onChange={(e)=>changeInput(e,changeTemperature)}
                            />
                        </View>
                        <View style={styles.modalContentInputBlock}>
                            <label htmlFor={'SleepTime'}>Время сна</label>
                            <TextInput
                                style={styles.modalInput}
                                name={'SleepTime'}
                                keyboardType='numeric'
                                type={'number'}
                                vlaue={sleepTime}
                                onChange={(e)=>changeInput(e,changeSleepTime)}
                            />
                        </View>
                        <View style={styles.modalContentInputBlock}>
                            <label htmlFor={'Exercises'}>Выполненные упражнения</label>
                            <TextInput
                                style={styles.modalInput}
                                name={'Exercises'}
                                keyboardType='numeric'
                                type={'number'}
                                vlaue={exercises}
                                onChange={(e)=>changeInput(e,changeExercises)}
                            />
                        </View>
                    </View>
                    <View style={styles.modalBtnBlock}>
                        <TouchableOpacity style={styles.modalCloseBtn} onPress={() => changeIsModalVisible(false)}>
                            <Text style={styles.closeBtnTxt}>Отмена</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalCloseBtn} onPress={addBtnOnCLick}>
                            <Text style={styles.closeBtnTxt}>Добавить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </TouchableOpacity>
            </Modal>

            <View>
                {
                    cards.map(elem => {
                        return (
                            <View style={styles.cardContainer}>
                                <Text style={styles.cardTitle}>Состояние за {elem.Date}</Text>
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardText}>Пульс: {elem.Pulse}</Text>
                                    <Text style={styles.cardText}>Температура: {elem.Temperature}</Text>
                                    <Text style={styles.cardText}>Упражнения: {elem.Exercises}</Text>
                                    <Text style={styles.cardText}>Время сна: {elem.SleepTime}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    );
}

function getDiagramData(type, data=[]) {
    console.log(data)
    if (type === 'Pulse') {
        return data.map((element) => element.Pulse).slice(0, 7);
    } else if (type === 'Temperature') {
        return data.map((element) => element.Temperature).slice(0, 7);
    } else if (type === 'Exercises') {
        return data.map((element) => element.Exercises).slice(0, 7);
    } else {
        return data.map((element) => element.SleepTime).slice(0, 7);
    }
}

const cardData = [
    {
        Date: '23.03.22',
        Pulse: 111,
        Temperature: 35.6,
        Exercises: 9,
        SleepTime: 14

    },
    {
        Date: '24.03.22',
        Pulse: 95,
        Temperature: 37.6,
        Exercises: 5,
        SleepTime: 9
    },
    {
        Date: '25.03.22',
        Pulse: 88,
        Temperature: 36.6,
        Exercises: 12,
        SleepTime: 8
    },
    {
        Date: '26.03.22',
        Pulse: 88,
        Temperature: 37.6,
        Exercises: 15,
        SleepTime: 11

    },
    {
        Date: '27.03.22',
        Pulse: 77,
        Temperature: 37.0,
        Exercises: 17,
        SleepTime: 6
    },
    {
        Date: '28.03.22',
        Pulse: 76,
        Temperature: 38.6,
        Exercises: 14,
        SleepTime: 9
    },
    {
        Date: '29.03.22',
        Pulse: 131,
        Temperature: 36.9,
        Exercises: 13,
        SleepTime: 13

    },
    {
        Date: '30.03.22',
        Pulse: 92,
        Temperature: 38.6,
        Exercises: 7,
        SleepTime: 1
    },
    {
        Date: '31.03.22',
        Pulse: 84,
        Temperature: 36.0,
        Exercises: 14,
        SleepTime: 7
    },

]

export default NotesPage;