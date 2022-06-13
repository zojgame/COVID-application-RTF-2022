import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";

const exerciseStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        alignItems: 'center',
        marginTop: '8vw',
        marginBottom: '8vw',
        paddingRight: '3vw',
        paddingLeft: '3vw',
        marginLeft: '4vw',
        marginRight: '4vw',
    },
    title: {
        color: '#6656fd',
        fontWeight: 'bold',
        fontSize: '6.5vw',
        textAlign: 'center',
        marginBottom:'2vw',
    },
    description: {
        color: 'white',
        fontSize: '4.5vw',
        marginBottom: '5vw'
    },
    image: {
        width: '80vw',
        height: '60vw',
        backgroundColor:'white',
    },
    executionRules: {
        padding: '2vw',
    },
    executionRulesItem: {
        color: 'white',
        marginBottom: '2vw',
        fontSize: '4.5vw'
    },
})

export default function ExerciseCard(props) {
    return (
        <LinearGradient style={exerciseStyles.container} colors={['#bc98ff', '#43dfd8']} start={{x: 0, y: 0}} end={{x: 50, y: 50}}>
            <View>
                <View style={exerciseStyles.container}>
                    <Text style={exerciseStyles.title}>{props.data.title}</Text>
                    <Text style={exerciseStyles.description}>{props.data.description}</Text>
                    <Image style={exerciseStyles.image} resizeMode={'stretch'} source={props.data.image}/>
                    <View style={exerciseStyles.executionRules}>
                        {
                            props.data.executionRules.map((e, index) => {
                                return (
                                    <Text style={exerciseStyles.executionRulesItem}>{index + 1 + '. ' + e}</Text>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}