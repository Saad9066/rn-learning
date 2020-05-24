import React, {useReducer} from 'react';
//useState is a hook add funtionality in functional component
import {View ,Text,StyleSheet,Button} from 'react-native';

const reducer =(state,action)=>{
return {...state,counter:state.counter+action.amount};
};
CounterScreen=()=>{
 
    const[state,dispatch]=useReducer(reducer,{counter:0});
    const{counter}=state
    return(
        <View>
        <Button 
            title='Increase'
            onPress={()=>{
                //don't do this
                //counter++;
                dispatch({amount:1});
            }}
        />
        <Button
            title='Decrease'
            onPress={()=>{
                dispatch({amount:-1});
            }}
        />
            <Text> Counter Count</Text>
            <Text>{counter}</Text>
        </View>
    );
};

const styles= StyleSheet.create({
 
});

export default CounterScreen;