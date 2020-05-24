import React,{useReducer} from 'react';
import {View ,Text,Button,StyleSheet,FlatList} from 'react-native';
import ColorCounter from '../components/ColorCounter';
//for constant value to increament
const COLOR_INCREAMENT=15;
//we have to pass state object in reducer function
const reducer=(state,action)=>{
    //state==={red:number,green:number,blue:number}
    //action {color to change || red||green ||blue ,amount property +15-15}
    switch(action.colorToChange)
    {
    case 'red':
        //we never gonna change argument directle like state.red=state.red+1
        //first we made a new object {} <<< then all the state property in to new one...>{    
        //overright the red property 
        //we always need to return
        return state.red+action.amount>255||state.red+action.amount<0? state:{...state, red:state.red +action.amount};
    case 'green':
        return state.green+action.amount>255||state.green+action.amount<0? state:{...state, green:state.green +action.amount};
    case 'blue':
        return state.blue+action.amount>255||state.blue+action.amount<0? state:{...state, blue:state.blue +action.amount};
    default:
        return state;
    }
};
const SquareScreen=()=>{  
    // to apply Reducer
    const[state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0});
    //if we console log state we will get {red:0,green:0,blue:0}
    // a dipacher is that run reducer


    //for giving the color in view sqaure we haven't define red green blue like in state
    const{red,green,blue}=state;
     console.log(red);
     console.log(green);
     console.log(blue);
   
    
 //console.log(red);
    return <View>
    {/* use call back guntion to send to componenet color counter */}
        <ColorCounter 
        onIncrease={()=>dispatch({colorToChange:'red',amount:COLOR_INCREAMENT})} 
        onDecrease={()=>dispatch({colorToChange:'red',amount:-1*COLOR_INCREAMENT})} 
        color="RED"/>
        <ColorCounter color="Green" 
        onIncrease={()=>dispatch({colorToChange:'green',amount:COLOR_INCREAMENT})} 
        onDecrease={()=>dispatch({colorToChange:'green',amount:-1*COLOR_INCREAMENT})}/>
        <ColorCounter color="Blue" 
        onIncrease={()=>dispatch({colorToChange:'blue',amount:COLOR_INCREAMENT})} 
        onDecrease={()=>dispatch({colorToChange:'blue',amount:-1*COLOR_INCREAMENT})}/>

        <View style={{height:150,width:150, backgroundColor:`rgb(${red},${green},${blue})`}}/>
        
    </View>
};

const style=StyleSheet.create (
{
});
export default SquareScreen;