import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import {BarChart} from "react-native-chart-kit";

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
    }
})

function NotesPage(props) {
    let cards=cardData.reverse();
    let [diagramTitle, changeDiagramTitle] = useState('пульса');
    let [diagramData,changeDataDiagram]=useState(getDiagramData('Pulse',cards))
    const data = {
        datasets: [
            {
                data: diagramData
            }
        ]
    };
    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {
        color: (opacity = 1) => `rgba(141, 120, 230, 1)`,
        backgroundGradientFrom: 'rgb(242, 242, 242)',
        backgroundGradientTo: 'rgb(242, 242, 242)',
    };

    return (
        <ScrollView>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}
                                  onPress={() => {
                                      changeDiagramTitle('пульса');
                                      changeDataDiagram(getDiagramData('Pulse',cards))
                                  }}
                >
                    <Text style={styles.btnTxt}>Пульс</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}
                                  onPress={() => {
                                      changeDiagramTitle('времени сна')
                                      changeDataDiagram(getDiagramData('SleepTime',cards))
                                  }}
                >
                    <Text style={styles.btnTxt}>Время сна</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}
                                  onPress={() => {
                                      changeDiagramTitle('температуры')
                                      changeDataDiagram(getDiagramData('Temperature',cards))
                                  }}
                >
                    <Text style={styles.btnTxt}>Температура</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}
                                  onPress={() => {
                                      changeDiagramTitle('выполнения упражнений')
                                      changeDataDiagram(getDiagramData('Exercises',cards))
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

            <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addBtnText}>Добавить</Text>
            </TouchableOpacity>
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

function getDiagramData(type,data){
    let result=[]
    if(type==='Pulse'){
        return data.map((element)=>element.Pulse).slice(0, 7);
    }
    else if(type==='Temperature'){
        return data.map((element)=>element.Temperature).slice(0, 7);
    }
    else if(type==='Exercises'){
        return data.map((element)=>element.Exercises).slice(0, 7);
    }
    else{
        return data.map((element)=>element.SleepTime).slice(0, 7);
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