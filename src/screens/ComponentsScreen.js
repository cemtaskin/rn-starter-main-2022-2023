import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ComponentsScreen = () =>{

    const greeting = 'Hi Ali Duru !';

    return <View>
        <Text style={{fontSize:20}}>This is components {greeting}</Text>
        <Text style={{fontSize:30}}>{greeting}</Text>
    </View>;
};



const styles = StyleSheet.create(
    {
        textStyle : {
            fontSize:30
        }
    }
);

export default ComponentsScreen;


