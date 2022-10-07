import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

const ColorCounter = ({color})=>{
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`}></Button>
            <Button title={`Decrease ${color}`}></Button>
        </View>
    );

};

const styles=StyleSheet.create({});

export default ColorCounter;