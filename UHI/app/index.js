import React from 'react'

import {StyleSheet,View,TouchableWithoutFeedback,Text,SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App(){
    return (
        <Stack.Navigator>
            {/* screens */}
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent: 'center',
    },
});