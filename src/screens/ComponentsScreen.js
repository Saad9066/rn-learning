import React from 'react';
import { Text , StyleSheet } from 'react-native';
// our funtion
//some amount of jsx
const ComponentsScreen = ()=>{
    return <Text style={styles.textStyle}> This is component Screen</Text>;
};
//
const styles=StyleSheet.create({
    textStyle:{
        fontSize:100
    }

});
export default ComponentsScreen;