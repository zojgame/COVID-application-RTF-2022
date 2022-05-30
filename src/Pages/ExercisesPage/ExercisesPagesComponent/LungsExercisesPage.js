import React from "react";
import {Text, View, ScrollView, TouchableOpacity, StyleSheet, Image} from 'react-native';
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

export default function LungsExercisesPage({navigation}) {
    return (
        <ScrollView>
            <Text style={styles.title}> Комлпекс упражнений на лёгкие</Text>
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
        title: 'Вращения плечами',
        description: 'Вращение плечами — хорошее упражнение для разминки, так как при его выполнении происходит легкая растяжка грудных и плечевых мышц.',
        image: 'https://www.mskcc.org/sites/default/files/patient_ed/exercises_after_breast_surgery-20310/exercise_1.png',
        executionRules: ['Удобно сядьте или лягте на спину на кровати, руки расслаблены и находятся вдоль туловища.',
            'Круговым движением переместите плечи вперед, вверх, назад и вниз.',
            'Повторите 5 раз.'],
        recomendation: 'Постарайтесь сделать как можно больший круг и двигать обоими плечами одновременно. ' +
            'Если вы ощущаете некоторую сдавленность в груди, начните с меньших кругов и увеличивайте их по мере расслабления мышц.',
    },
    {
        title: 'Диафрагмальное дыхание',
        description: 'Это упражнение может помочь расслабить стенку грудной клетки и мышцы живота.',
        image: 'https://www.mskcc.org/sites/default/files/patient_ed/breathing_exercises-195319/breathing_exercises-fig_3.png',
        executionRules: ['Лягте на спину или сядьте на стул со спинкой.',
            'Положите одну или обе руки себе на живот',
            'Медленно и глубоко вдохните через нос. Живот должен подняться, но верхняя часть груди должна ' +
            'оставаться неподвижной и расслабленной.',
            'Медленно выдохните через сложенные в трубочку губы (будто задуваете свечи). ' +
            'Вместе с выдохом медленно и аккуратно подтягивайте живот к позвоночнику.',
            'Повторите 5 раз.'],
        recomendation: '',
    },
    {
        title: 'Сжатие лопаток',
        description: 'Сжатие лопаток — хороший способ расширить стенку грудной клетки и расправить ребра, чтобы сделать более глубокий вдох.',
        image: 'https://www.mskcc.org/sites/default/files/patient_ed/breathing_exercises-195319/breathing_exercises-fig_4.png',
        executionRules: ['Сядьте на стул со спинкой или лягте на спину на кровать.',
            'Исходное положение — руки вдоль туловища, расслаблены, ладони направлены вверх. ' +
            'Осторожно сведите лопатки и опустите их вниз (см. рисунок 4). ' +
            'При этом ваша грудь должна выпятиться колесом.',
            'Вдохните носом и выдохните через сложенные в трубочку губы (будто задуваете свечи).',
            'Отдохните 1–2 секунды и повторите упражнение 5 раз.'],
        recomendation: '',
    },
    {
        title: 'Растяжка грудных мышц с руками над головой.',
        description: 'Упражнение для растяжки грудных мышц с руками над головой отлично расслабляет мышцы ' +
            'грудной клетки и позволяет воздуху свободно входить и выходить из легких. ' +
            'Это помогает увеличить уровень кислорода во всем организме.',
        image: 'https://www.mskcc.org/sites/default/files/patient_ed/breathing_exercises-195319/breathing_exercises-fig_5.png',
        executionRules: ['Сядьте на стул со спинкой или лягте на спину на кровать.',
            'Осторожно сведите лопатки и опустите их вниз.',
            'Сцепите руки в замок и медленно поднимите руки над головой, так высоко, как сможете, делая при этом глубокий вдох ',
            'Выдыхайте, медленно опуская руки.',
            'Отдохните 1–2 секунды и повторите упражнение 5 раз.\n'],
        recomendation: '',
    },
    {
        title: 'Глубокое дыхание 4-8-8',
        description: 'Это упражнение повышает уровень кислорода во всем организме.',
        image: 'https://www.mskcc.org/sites/default/files/patient_ed/breathing_exercises-195319/breathing_exercises-fig_7.png',
        executionRules: ['Сядьте на стул со спинкой или лягте на спину на кровать.',
            'Вдыхайте через нос в течение 4 секунд.',
            'Постарайтесь задержать дыхание на 8 секунд',
            'Медленно выдыхайте через сложенные в трубочку губы (будто задуваете свечи) в течение 8 секунд.',
            'Отдохните 1–2 секунды и повторите упражнение 3 раза.'],
        recomendation: '',
    }

]