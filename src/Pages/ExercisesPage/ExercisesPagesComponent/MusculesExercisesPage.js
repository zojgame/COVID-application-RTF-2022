import React from "react";
import {Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import ExerciseCard from "./ExerciseCard";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {
        color: '#8D74C8',
        fontSize: '7vw',
        textAlign: 'center'
    },
    btn: {
        marginTop:'5vw',
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


})

export default function MusculesExercisesPage({navigation}){
    return (
        <ScrollView>
            <Text style={styles.title}> Комлпекс упражнений на мышцы</Text>
            {data.map(e => <ExerciseCard data={e}/>)}
            <TouchableOpacity style={styles.btn} onPress={() => {
                navigation.goBack()
            }}>
                <Text style={styles.btnTxt}>Назад</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const data = [
    {
        title:'Поднятие плеч вверх-вниз',
        description:'',
        image:'https://mcvm.ru/pics/uploads/%D0%B1%D0%BB%D0%BE%D0%B3%20%D0%B2%D1%80%D0%B0%D1%87%D0%B0/1r.png',
        executionRules:['Сядьте на стул со спинкой',
            'Медленно поднимите плечи как можно вышеи задрежите на пару секунд',
            'Опустите плечи','Повторите упражнение 5-10 раз'],
        recomendation:''
    },
    {
        title:'Наклоны корпуса',
        description:'',
        image:'https://mcvm.ru/pics/uploads/%D0%B1%D0%BB%D0%BE%D0%B3%20%D0%B2%D1%80%D0%B0%D1%87%D0%B0/3r.png',
        executionRules:['Встаньте во весь рост',
        'Расставьте ноги на ширину плечи опустите руки вдоль тела',
        'Делайте небольшие наклоны из стороны в сторону, руки расслабленно скользят вниз вдоль тела'
            ,'Повторите упражнение 5-10 раз'],
        recomendation:''
    },
    {
        title:'Поднятие колен сидя',
        description:'',
        image:'https://mcvm.ru/pics/uploads/%D0%B1%D0%BB%D0%BE%D0%B3%20%D0%B2%D1%80%D0%B0%D1%87%D0%B0/4r.png',
        executionRules:['Поочередно медленно поднимайте и опускайте колени, как показано на рисунке' ,'Повторите упражнение 5-10 раз'],
        recomendation:''
    },
    {
        title:'Упражжнение на стопы',
        description:'',
        image:'https://mcvm.ru/pics/uploads/%D0%B1%D0%BB%D0%BE%D0%B3%20%D0%B2%D1%80%D0%B0%D1%87%D0%B0/5r.png',
        executionRules:['Постучите сперва пальцами ног, а затем пяткой одной ноги по поверхности пола перед вами',
        'Повторите то же самое действие другой ногой',
        'Повторите упражнение 5 раз'],
        recomendation:''
    },
    {
        title:'Вращение стопой',
        description:'',
        image:'https://mcvm.ru/pics/uploads/%D0%B1%D0%BB%D0%BE%D0%B3%20%D0%B2%D1%80%D0%B0%D1%87%D0%B0/6r.png',
        executionRules:['Сядте на стул','Выполняйте круговые движения стопой сначала левой, а затем правой ноги' ,'Повторите упражнение 5-10 раз'],
        recomendation:''
    },
    {
        title:'Ходьба на месте',
        description:'Выполняя это упражнение, вы можете опираться на спинку стула или любую устойчивую поверхность, а также поставить рядом с собой стул на случай потребности в отдыхе',
        image:'https://mcvm.ru/pics/uploads/%D0%B1%D0%BB%D0%BE%D0%B3%20%D0%B2%D1%80%D0%B0%D1%87%D0%B0/7r.png',
        executionRules:['Поднимайте колени поочередно',
        'Постепенно увеличивайте высоту поднятия ног, чтобы по возможности колени поднимались до уровня таза.' ,'Повторите упражнение 5-10 раз'],
        recomendation:''
    },
    {
        title:' Зашагивания на ступеньку ',
        description:' Для этого упражнения используйте нижнюю ступеньку вашего лестничного пролета. ' +
            'При необходимости держитесь за поручень лестницы для опоры, ' +
            'а также поставьте рядом стул,чтобы можно было присесть и отдохнуть',
        image:'https://mcvm.ru/pics/uploads/%D0%B1%D0%BB%D0%BE%D0%B3%20%D0%B2%D1%80%D0%B0%D1%87%D0%B0/8r.png',
        executionRules:[' Поднимайтесь на ступеньку и спускайтесь с нее, меняя ногу через каждые 10 шагов ',
            'Повторите упражнение 5-10 раз'],
        recomendation:''
    }
]