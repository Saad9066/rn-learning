import React,{useState} from 'react';
import {View ,Text,Button,StyleSheet,FlatList} from 'react-native';

const ColorCounter=({color,onIncrease,onDecrease})=>{   
    return (
    <View>    
        <Text>{color}</Text>
        {/* inside button the way you can use color props */}
        <Button onPress={()=>onIncrease() } title={`Increase ${color}`}/>
        <Button onPress={()=>onDecrease() } title={`Decrease ${color}`}/>
        
    </View>
    );
};

const style=StyleSheet.create (
{
});
export default ColorCounter;