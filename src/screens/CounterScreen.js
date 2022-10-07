import React , {useState} from "react";
import {View,Text,Button,StyleSheet} from 'react-native';

const CounterScreen = ()=>{
    const [counter,setCounter] = useState(0); 

    return (
        <View>
            <Button title="Increase" onPress={()=>{
                setCounter(counter+1);
            }}></Button>
            <Button title="Decrase" onPress={()=>{
                setCounter(counter-1);
            }}></Button>
            <Text>Current Count :  </Text>
            <Text>{counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});
export default CounterScreen;