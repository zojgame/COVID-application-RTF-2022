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
    importantWord:{
        color:'#8D74C8',
         backgroundColor:'white',
          fontWeight:'bold'
    }


})

export default function HeartEffects({navigation}) {
    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.headerBlock}>
                <Text style={styles.headerTxt}>Влияние на сердце</Text>
            </View>
            <View style={styles.infoContainer}>
            <Text style={styles.infoText}><Text style={styles.firstLetter}>По</Text> мере изучения механизмов влияния 
            SARS-CoV-2 на организм было доказано, что вирус проникает в клетки и прикрепляется к белку АСЕ2. Данный белок имеется
             в эндотелии (клетки, выстилающие кровеносные сосуды), а также в легких, сердце и в других органах. Вирус, проникая в
              эти клетки, частично разрушает их и вызывает повреждение сердечной ткани, уменьшая кровоснабжение сердца, что 
              увеличивает риск его воспаления.{"\n"}{"\n"}
            
            <Text style={styles.firstLetter}>Так,</Text> одно из самых опасных осложнений на сердце после коронавируса
             — <Text style={styles.importantWord}>миокардит.</Text><Text>Воспалительный процесс,
              затрагивающий мышечные ткани сердца, может долго не давать о себе знать, но
              в результате становится причиной серьезных проблем. Степень выраженности клинических проявлений зависит от степени
               поражения сердечной мышцы.
             Причиной воспаления сердечной мышцы также может стать повышение температуры, интоксикация организма.{"\n"}</Text>

             <Text style={styles.firstLetter}>Наибольшую</Text> <Text>опасность представляет воспаление миокарда, которое осталось без внимания врачей.
              Нелеченный миокардит приводит к серьезным осложнениям:</Text>

            <View style={styles.items}>
                <Text style={styles.textItem}><Text style={styles.importantWord}>аритмия</Text> — нарушение проводимости электрических импульсов,
                 которые проявляются тахикардией, экстрасистолией, фибрилляцией предсердий;</Text>{"\n"}
            <Text style={styles.textItem}><Text style={styles.importantWord}>кардиомиопатия</Text> — сердечная недостаточность,
             которая сопровождается изменением объема желудочков, увеличением предсердий,
             нарушением выброса крови из сердца в сосудистое русло;</Text>{"\n"}
            <Text style={styles.textItem}>формирование внутрисердечного <Text style={styles.importantWord}>тромба</Text> ;</Text>{"\n"}
            </View>
 

            <Text style={styles.firstLetter}>Воспалительные</Text> <Text>изменения в миокарде нарушают электрическую стабильность
             сердца. Это приводит к возникновению тахиаритмии, которая усиливается при физических нагрузках. Поэтому часто пациенты,
             у которых ранее не было проблем с сердцем, после коронавируса жалуются на плохую переносимость физической нагрузки.{"\n"}</Text>

             <Text style={styles.firstLetter}>Миокардит</Text><Text> сердца как осложнение после коронавируса встречается
              у пациентов всех возрастных групп, но в связи с тем, что начало заболевания часто протекает
              бессимптомно или с минимальными проявлениями, пациенты не обследуются и не обращаются за помощью вовремя.{"\n"}</Text>          
              </Text> </View>
            
            
            <TouchableOpacity style={styles.btn} onPress={() => {
                navigation.goBack()
            }}>
                <Text style={styles.btnTxt}>Назад</Text>
            </TouchableOpacity>
        </ScrollView>
        )
}