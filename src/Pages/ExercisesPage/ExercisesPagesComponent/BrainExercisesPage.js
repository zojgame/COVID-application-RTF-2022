import React from "react";
import {Text, ScrollView, TouchableOpacity, Image, StyleSheet} from 'react-native';
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

export default function BrainExercisesPage({navigation}) {
    return (
        <ScrollView>
            <Text style={styles.title}> Комлпекс упражнений на мозг</Text>
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
        title: 'Сборка пазлов',
        description: 'В это время задействуется система визуальной обработки — сканирование мелких ' +
            'частей, тонкие различия' +
            ' в форме и цветах, мелкая моторика, переключение с маленького пазла ' +
            'на общую картину, конструирование целостной картины.',
        image: 'data:image/jpeg;base64,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',
        executionRules: ['Соберите пазл так, как вы его обычно собираете',
            'Соберите пазл не смотря на картинку',
            'Cобирайте пазл от одного ее угла к другому'],
        recommendation: 'Старайтесь с каждым разом собирать более сложные пазлы, содержащие больше деталей или пазлы без картинки '
    },
    {
        title: '. Тренируйте периферическое зрение',
        description: 'Это упражнение хорошо сочетается с релаксацией за пределами дома (в парке, в лесу, в любом новом месте',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCW8e-Upku2ULioBAs_7AsgR26iModm4i43CmKx0NKDLcHfPqTXKx-T_8utKr3DHwMCcI&usqp=CAU',
        executionRules: ['Смотрите прямо, не двигая глазами и сосредоточьтесь на всем, что попадает в поле зрения без движения глаз, особенно в периферийные участки.',
            'Закрыв глаза мысленно воссоздайте зафиксированную визуальную картину в деталях',
            'Потом откройте и сравните с тем, что сохранилось в мозге. ',
            'Повторите попытку, добавляя список увиденного',
        ],
        recommendation: 'Каждое последующее повторение данного упржнения проводите в местах где больше деталей'
    },
    {
        title: 'Переключение ведущей руки',
        description: 'Миллионы нейронов приспосабливаются, образуются новые связи, чтобы установить лучший контроль при использовании «другой» руки',
        image: 'https://www.englishdom.com/dynamicus/blog-post/000/000/758/1591346930_content_700x455.jpg?1591346931662',
        executionRules: ['Пробуйте использовать другую руку в обычных повседневных действиях.',
            'Чистите зубы противоположной рукой',
            'Используйте при еде другую руку',
            'Пробуйте писать противоположной рукой'],
        recommendation: ''
    },
    {
        title: 'Играйте с мячом',
        description: 'Даже самые простые игры с маленьким мячом улучшают мозг и взаимодействие между разными отделами мозга.',
        image: 'https://st3.depositphotos.com/1037987/14045/i/600/depositphotos_140452518-stock-photo-dad-and-son-throwing-ball.jpg',
        executionRules: ['Поперекидывайте мяч между руками, стараясь не смотреть на мяч',
        'Бройсате мяч в стену и ловите после отскока',
        'Бросайте мяч в какую-нибудь ёмкость'],
        recommendation: 'Кстати, катание суджок (колючего мячика) в ладонях, упражнения с ним тоже тренируют мозг.'
    }
]
