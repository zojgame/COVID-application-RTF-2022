import React from "react";
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    btn: {
        width:'50vw',
        height:'12vw',
        textAlign:'center',
        alignSelf:'center',
        backgroundColor: '#8D74C8',
        borderRadius: '10vw',
        paddingVertical:'2vw',
    },
    btnTxt:{
        textAlign:'center',
        height: '100%',
        color:'white',
        fontSize:'5vw',
    },
    headerTxt:{
        color: '#8D74C8',
        fontSize:'8vw',
        textAlign: 'center'
    },
    headerBlock:{
        height: '15vw'
    },
    infoContainer:{
        backgroundColor: '#8D74C8',
        borderRadius: '5vw',
        marginLeft: '3vw',
        marginRight: '3vw',
        padding: '5vw',
        marginBottom: '3vw',
    },
    infoText:{
        color: 'white'        
    },
    items:{
        margin: '4vw',
        paddingLeft: '2vw',
        borderLeftColor: 'white',
        borderLeftWidth: '3vw',
        
    },
    textItem:{
        paddingTop: '2vw',
        textAlign: 'center',
        fontWeight:'bold'
    },
    firstLetter:{
        paddingLeft: '3vw'
    },
    quote:{
        padding: '2vw',
        marginTop: '4vw',
        marginBottom: '4vw',
        backgroundColor: 'white',
        color: "#8D74C8",
        fontWeight:'bold',
    }


})

export default function BrainEffects({navigation}) {
    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.headerBlock}>
                <Text style={styles.headerTxt}>Влияние на мозг</Text>
            </View>
            <View style={styles.infoContainer}>
            <Text style={styles.infoText}><Text style={styles.firstLetter}>COVID-19</Text> , как и любой другой вирус, 
            влияет на работу многих систем организма и поражает не только дыхательные пути и легкие, но и центральную нервную систему.{"\n"}{"\n"}
            
            <Text style={styles.firstLetter}>Поражённые</Text> 
            <Text>Результаты патологоанатомических вскрытий демонстрируют, что коронавирус 
                приводит к воспалению мозговой ткани. А методы нейровизуализации, показывающие структуру и 
                нарушения функций мозга, обнаруживают микроинсульты и лейкоэнцефалопатию — состояние, приводящее к
                 демиелинизации, когда разрушается покрытие отростков нервной клетки.{"\n"}{"\n"}

                 <Text style={styles.firstLetter}>Эти</Text> органические повреждения приводят к тому, что у
                  человека развиваются психические и неврологические нарушения, являющимися осложнениями.{"\n"}</Text>

                  <Text>В систематическом обзоре
                       исследователи сообщают, что у 20-40% больных коронавирусом наблюдаются психиатрические нарушения:{"\n"}
                       <View style={styles.items}>
                        <Text style={styles.textItem}>бессонница — у 42% больных</Text>{"\n"}
                            <Text style={styles.textItem}>нарушение внимания и концентрации — у 38%</Text>{"\n"}
                            <Text style={styles.textItem}>тревога — у 36%</Text>{"\n"}
                            <Text style={styles.textItem}>ухудшение памяти — у 34%</Text>{"\n"}
                            <Text style={styles.textItem}>депрессивное состояние — у 33%</Text>{"\n"}
                            <Text style={styles.textItem}>нарушение сознания — у 21%</Text>{"\n"}
                            <Text style={styles.textItem}>посттравматическое стрессовое расстройство — у 4-7%</Text>{"\n"}
                        </View>

            <Text style={styles.firstLetter}>У</Text>
            <Text>каждого четвертого больного возникает сильная головная боль и головокружение, 
                у 69% — психомоторное возбуждение, у 0.7% — судороги и двигательные расстройства. 
                У пожилых людей может появиться делирий — расстройство сознания, при котором нарушается мышление, внимание
                 и восприятие окружающего мира.
                 Однако чаще всего делирий возникает у пожилых пациентов с деменцией — синдромом снижения когнитивных функций. </Text>  
                 {"\n"}</Text>
            <View style={styles.quote}>
            <Text><Text style={styles.firstLetter}>«У</Text> заболевших коронавирусной инфекцией часто фиксируются негативные
                 психологические реакции:
             острая реакция на стресс, депрессия, эмоциональные нарушения, навязчивости и дисфория — сочетание
              мрачного настроения и раздражительности,
             — рассказывает кандидат психологических наук, консультант СберЗдоровья Ольга Маркина»</Text>
            
            </View>
            <Text><Text style={styles.firstLetter}>К</Text> ментальным нарушениям приводит не только непосредственное влияние
             инфекции на головной мозг, но социально-психологические и экономические факторы, связанные с коронавирусом. Пандемия
              ассоциируется у людей с нестабильностью и непредсказуемостью. Карантин, социальные ограничения, бесперебойный 
            новостной поток о заболеваемости и смертности от COVID — все это влияет на эмоциональное состояние и настроение людей.</Text>
            </Text>            
            </View>
            
            <TouchableOpacity style={styles.btn} onPress={() => {
                navigation.goBack()
            }}>
                <Text style={styles.btnTxt}>Назад</Text>
            </TouchableOpacity>
        </ScrollView>
)
}