import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

const exerciseStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        backgroundColor: '#8D74C8',
        marginTop: '10vw',
        paddingRight: '3vw',
        paddingLeft: '3vw'
    },
    title: {
        color: 'white',
        fontSize: '6vw',
        textAlign: 'center',
        marginBottom:'2vw',
    },
    description: {
        color: 'white',
        fontSize: '4vw',
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
        fontSize: '3.5vw'
    },
    recommendation: {
        backgroundColor: 'white',
        border:'1vw solid #8D74C8',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        paddingHorizontal: '2vw',
        paddingVertical:'3vw',
    },
    recommendationText: {
        color: '#8D74C8',
    }


})

export default function ExerciseCard(props) {
    return (
        <View>
            <View style={exerciseStyles.container}>
                <Text style={exerciseStyles.title}>{props.data.title}</Text>
                <Text style={exerciseStyles.description}>{props.data.description}</Text>
                <Image style={exerciseStyles.image} resizeMode={'stretch'} source={props.data.image}/>
                <View style={exerciseStyles.executionRules}>
                    {
                        props.data.executionRules.map((e, index) => {
                            return (
                                <Text style={exerciseStyles.executionRulesItem}>{index + 1 + '.  ' + e}</Text>
                            )
                        })
                    }
                </View>
            </View>
            <View style={exerciseStyles.recommendation}>
                <Text style={exerciseStyles.recommendationText}>{props.data.recommendation}</Text>
            </View>
        </View>
    )
}