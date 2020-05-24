import React,{useState} from 'react';
import {Text,TextInput,View,StyleSheet} from 'react-native';
//parent telling the child what the value is
const TextScreen =()=>{
    const [name,setName] =useState('');
    const[password,setPassword]=useState('');
   // const password={pass};
    return(
        <View>
            <Text>Text Screen</Text>
            {/* text input props two most important */}
            <TextInput style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(myValue)=>setName(myValue)}

            />
            <Text>My name is  {name}</Text>

            <Text>Enter PassWord</Text>
            <TextInput style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue)=>setPassword(newValue)}
            />
            { password.length < 5 ? <Text>password must be longer than 5 character</Text> : null }
        </View>
    );
};
const styles =StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }

});

export default TextScreen;