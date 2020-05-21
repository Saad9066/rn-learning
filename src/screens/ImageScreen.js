import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen =()=>{
    const randomValue=Math.floor(Math.random()*10);
    const randomV=Math.floor(Math.random()*10);
    const randomVal=Math.floor(Math.random()*10);
    return(
        <View>
        
            <ImageDetail title='Forest' imageSource={require('../../assets/forest.jpg')} randomNumber={randomValue}/>
            <ImageDetail title='Beach' imageSource={require('../../assets/beach.jpg')} randomNumber={randomV}/>
            <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')} randomNumber={randomVal}/>
            
        </View>
    );
    };
const Styles=StyleSheet.create({
    StyleText:{
        fontSize:30
    }

});

export default ImageScreen;

