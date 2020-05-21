import React from 'react';
import {Text,StyleSheet,View,Image} from 'react-native';
//import image
//create a component file in src that can be export to screen
const ImageDetail =(props)=>{
    console.log(props)
    return(
        <View>
        {/* this is how we show image in local project */}
        {/* as we created imagesource props in  imagescreen.js now its easy
         not to use<Image source={require('../../assets/beach.jpg')}/> just use props,image source*/}
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
            <Text>{props.randomNumber}</Text>
        </View>
    );
    };
const Styles=StyleSheet.create({
    StyleText:{
        fontSize:30
    }

});

export default ImageDetail;
