import React from 'react';
import {View ,Text ,StyleSheet,FlatList} from 'react-native';
import { render } from 'react-dom';
//Import Flat List
//create list screen Componenet
const ListScreen=()=>{
    //create a list
    const friends=[ 
        //2 ways To solve key issue and it should be string
        //one way
    // {Name:'friend #1',key:'1'},
    // {Name:'friend #2',key:'2'},
    // {Name:'friend #3',key:'3'},
    // {Name:'friend #4',key:'4'},
    // {Name:'friend #5',key:'5'},
    {Name:'Friend #1'},
    {Name:'Friend #2'},
    {Name:'Friend #3'},
    {Name:'Friend #4'},
    {Name:'Friend #5'},
    {Name:'Friend #6'},
    {Name:'Friend #7'},
    {Name:'Friend #8'},
    {Name:'Friend #9'},
];
//first require data prop
//then require render prop
//2nd way require new key prop key Extractor in flalist component
//2 additional props in flat list horizontal 
return ( 
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        //require unique keyname
    keyExtractor={(friend) => {return friend.Name}}
    data={friends} 
    //if we put element instead of item and console log
    //element==={item : name:'Friend#1'}, index:0 large information
    //we use element property es6 distructuring
    renderItem={({item})=>{
        //inside reder we show item that is list
        return(
            <Text style={styles.StyleText}>{item.Name}</Text>
        );

    }}/>
);

};
 const styles=StyleSheet.create({
     StyleText:{
         marginVertical:50
     }

 });

 export default ListScreen;