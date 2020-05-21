import React from 'react';
import { Text , StyleSheet, View } from 'react-native';
// our funtion
//some amount of jsx
const ComponentsScreen = ()=>{
    const saad ='saad';
    //can't use object const saad ={color:red}there will be error
    //we can asemble different jsx like html
    //jsx element in variable
    const greeting =<Text style={styles.textContent}>My name is Saad</Text>;
    return (
    <View>
    {/*props in jsx style={styles.textStyle}  */}
    <Text style={styles.textStyle}>Getting Started With React Native! </Text>
    {/* <Text>Hello</Text> */}
    {/* <Text>{saad}</Text> */}
    {greeting}
    </View>
    );
    // return <Text style={{ fontSize :30 }}> This is component Screen</Text>;
};
//
const styles=StyleSheet.create({
    textStyle:{
        fontSize:45
    },
    textContent:{
        fontSize:30
    }

});
export default ComponentsScreen;