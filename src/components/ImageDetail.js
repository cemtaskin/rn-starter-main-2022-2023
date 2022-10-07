import React from 'react';
import { View,Text,StyleSheet, Image } from 'react-native';

const ImageDetail = ({title,imageSource})=>{
    return (
        <View>
            <Image 
                source={imageSource}
                style={styles.image}
            />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
    
    
};

const styles = StyleSheet.create({
    text: {
        fontSize:30
    },
    image : {
        width:100,
        height:100

    }
});

export default ImageDetail;
