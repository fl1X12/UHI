import React from 'react'

import {StyleSheet,View,Text} from 'react-native'

export default function App(){
    return (
        <View style={styles.container}>
            <Text>Open in landing route</Text>
        </View>
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