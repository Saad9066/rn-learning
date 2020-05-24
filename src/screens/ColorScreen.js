import React,{useState} from 'react';
import {View ,Button,StyleSheet,FlatList} from 'react-native';

const ColorScreen=()=>{
    const [colors,setColors]=useState([]);
    //console.log(colors);
    return(
    <View>
        <Button title="change color"
            onPress={()=>{
                setColors([...colors,randomRgb()]);
            }}
        />
        {/* within view style code */}
        
        {/* in flat list we need to provide data then render */}
        <FlatList 
            keyExtractor={(item)=>item}
            data={colors}
            renderItem={({ item })=>{
                //item will be >>rgb(0,0,0)
                //now the item has the function
               
                return (<View style={{height:100,width:100, backgroundColor:item}}/>);
                
            }}               
        />
    </View>
    );
};
// create an rgb function
const randomRgb=()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    //now return a template string  and i formed with back ticks
    return `rgb(${red},${green},${blue})`;

};
const style=StyleSheet.create (
{

}
);
export default ColorScreen;