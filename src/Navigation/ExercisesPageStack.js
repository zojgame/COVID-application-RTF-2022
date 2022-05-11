import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExercisesPage from "../Pages/ExercisesPage/ExercisesPage";
import BrainExercisesPage from "../Pages/ExercisesPage/ExercisesPagesComponent/BrainExercisesPage";
import LungsExercisesPage from "../Pages/ExercisesPage/ExercisesPagesComponent/LungsExercisesPage";
import HeartExercisesPage from "../Pages/ExercisesPage/ExercisesPagesComponent/HeartExercisesPage";
import MusculesExercisesPage from "../Pages/ExercisesPage/ExercisesPagesComponent/MusculesExercisesPage";

const Stack = createStackNavigator();

export default function ExercisesPageStack(props){
    return(
        <Stack.Navigator>
            <Stack.Screen name={'ExercisesPage'} component={ExercisesPage}
                          options={{headerShown: false}}
            />
            <Stack.Screen name={'BrainExercisePage'}
                          component={BrainExercisesPage}
                          options={{headerShown: false}}
            />
            <Stack.Screen name={'LungsExercisesPage'}
                          component={LungsExercisesPage}
                          options={{headerShown: false}}
            />
            <Stack.Screen name={'HeartExercisesPage'}
                          component={HeartExercisesPage}
                          options={{headerShown: false}}
            />
            <Stack.Screen name={'MusculesExercisesPage'}
                          component={MusculesExercisesPage}
                          options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}