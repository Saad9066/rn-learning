import React from 'react';
import {View ,Text ,StyleSheet,FlatList} from 'react-native';
import { render } from 'react-dom';
const ListScreenTry=()=>{

    const friends=[ 
       
    {Name:'Friend #1',age:'20'},
    {Name:'Friend #2',age:'29'},
    {Name:'Friend #3',age:'30'},
    {Name:'Friend #4',age:'50'},
    {Name:'Friend #5',age:'40'},
    {Name:'Friend #6',age:'10'},
    {Name:'Friend #7',age:'24'},
    {Name:'Friend #8',age:'23'},
    {Name:'Friend #9',age:'29'},
];
return ( 
        <FlatList 
    keyExtractor={(friend) => {return friend.Name}}
    data={friends} 
    renderItem={({item})=>{
        return(
            <Text style={styles.StyleText}>{item.Name}-{item.age}</Text>
        );
    }}/>
);
};
 const styles=StyleSheet.create({
     StyleText:{
         marginVertical:50
     }

 });

 export default ListScreenTry;