import React from "react";
import { Text, StyleSheet,View, Button,TouchableOpacity } from "react-native";
//function declarios put props value
//if you don't want full props just navigation property instead of this>>>>>>>const HomeScreen = (props) => {}
// we de structure const HomeScreen = ({navigation}) => and  instead of<Button title="Component Screen"onPress={()=>props.navigation.navigate('Components')} />
//we use <Button title="Component Screen"onPress={()=>navigation.navigate('Components')} />
const HomeScreen = ({navigation}) => {
  //console.log(props);
  //console.log(props.navigation);
  return (
    
  <View>
  <Text style={styles.text}>Saad</Text>
  {/* button props like title */}
  <Button
   title="Component Screen"
   onPress={()=>navigation.navigate('Components')} />
  <Button
   title="List Screen"
   onPress={()=>navigation.navigate('List')} />
   <Button
   title="Image Screen"
   onPress={()=>navigation.navigate('Image')} />
    <Button
   title="Counter Demo"
   onPress={()=>navigation.navigate('Counter')} />
   <Button
   title="Color Demo"
   onPress={()=>navigation.navigate('Color')} />
    <Button
   title="Color Square"
   onPress={()=>navigation.navigate('Square')} />
   <Button
   title="Text screen "
   onPress={()=>navigation.navigate('Text')} />
   {/* touch able opacity require both openening closing tab
   <TouchableOpacity onPress={()=>props.navigation.navigate('List')}>
     <Text>Go To List</Text>
   </TouchableOpacity> */}
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
