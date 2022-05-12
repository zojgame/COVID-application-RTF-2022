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
        border: '3px dashed white',
        borderRightWidth: 0,
        borderLeftWidth: 0,
        paddingBottom: '3vw',
    },
    textItem:{
        paddingTop: '2vw',
        textAlign: 'center',
        fontWeight:'bold'
    },
    firstLetter:{
        paddingLeft: '3vw'
    }


})

export default function BrainEffects({navigation}) {
    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.headerBlock}>
                <Text style={styles.headerTxt}>Влияние на лёгкие</Text>
            </View>
            <View style={styles.infoContainer}>
            <Text style={styles.infoText}><Text style={styles.firstLetter}>Попадая</Text> в организм человека через 
            слизистые оболочки дыхательных путей SARS-CoV-2 вызывает мощнейшую воспалительную реакцию. 
            Активируются иммунные клетки, вырабатывается колоссальное количество воспалительных веществ.
            Именно интенсивностью воспалительной реакции и определяется тяжесть поражения легочной ткани.
             В легочной ткани поражение при COVID-19 обусловлено как поражением самих альвеол 
             (в которых происходит газообмен и кровь насыщается кислородом из воздуха) нашими собственными
              иммунными клетками так и поражением легочных сосудов, оплетающих 
            альвеолы.Легкие после COVID-19 могут терять эластичность.{"\n"}{"\n"}
            
            <Text style={styles.firstLetter}>Поражённые</Text> участки легочной ткани замещаются соединительной (рубцовой) тканью, 
             возникает фиброз. Из-за фиброзных изменений в легких газообменная функция легочной ткани страдает. 
             Воспаления уже нет, но дыхательная недостаточность сохраняется. 
            Если не принять меры уже во время самого заболевания, патологические изменения в лёгких могут остаться на всю жизнь.
            Человека будут беспокоить:{"\n"}

            <View style={styles.items}>
                <Text style={styles.textItem}>Одышка, усиливающаяся при физической нагрузке</Text>{"\n"}
            <Text style={styles.textItem}>Частые головокружения</Text>{"\n"}
            <Text style={styles.textItem}>Сухой кашель</Text>{"\n"}
            <Text style={styles.textItem}>Боли в груди</Text>{"\n"}
            <Text style={styles.textItem}>Нарастающая слабость</Text>{"\n"}
            <Text style={styles.textItem}>Снижение работоспособности</Text>{"\n"}
            <Text></Text></View>



 

            <Text style={styles.firstLetter}>Иногда</Text> слабость настолько выражена, что теряется способность к самообслуживанию.
            Чтобы избежать этих серьёзных осложнений, нужно проводить восстановительные мероприятия – реабилитацию.</Text>            
            </View>
            
            <TouchableOpacity style={styles.btn} onPress={() => {
                navigation.goBack()
            }}>
                <Text style={styles.btnTxt}>Назад</Text>
            </TouchableOpacity>
        </ScrollView>
)
}