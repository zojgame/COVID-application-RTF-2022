import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BrainEffects from "../Pages/HomePage/HomePageEffectsComponent/BrainEffects";
import MusculesEffects from "../Pages/HomePage/HomePageEffectsComponent/MusculesEffects";
import LungsEffects from "../Pages/HomePage/HomePageEffectsComponent/LungsEffects";
import HomePageConstructor from "../Pages/HomePage/HomePageConstructor";
import HeartEffects from "../Pages/HomePage/HomePageEffectsComponent/HeartEffects";
import LungsExercisesPage from "../Pages/ExercisesPage/ExercisesPagesComponent/LungsExercisesPage";

const Stack = createStackNavigator();

export default function HomePageStack(props){

    return(
        <Stack.Navigator>
            <Stack.Screen name={'HomePage'}
                          component={HomePageConstructor}//HomePageConstructor
                          options={{headerShown: false}}
            />
            <Stack.Screen name={'BrainEffects'}
                          component={BrainEffects}
                          options={{headerShown: false}}
            />
            <Stack.Screen name={'MusculesEffects'}
                          component={MusculesEffects}
                          options={{headerShown: false}}
            />
            <Stack.Screen name={'LungsEffects'}
                          component={LungsEffects}
                          options={{headerShown: false}}
            />
            <Stack.Screen name={'HeartEffects'}
                          component={HeartEffects}
                          options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}