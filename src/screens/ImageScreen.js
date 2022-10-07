import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () =>{
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpeg')} />
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpeg')}/>
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpeg')}/>
        </View>
    );
    
    
};

const styles = StyleSheet.create({});

export default ImageScreen;

