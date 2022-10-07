import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
 

const ListScreen  = () => {
    
    const friends = [
        {name : 'Friend #1'},
        {name : 'Friend #2'},
        {name : 'Friend #3'},
        {name : 'Friend #4'},
        {name : 'Friend #5'},
        {name : 'Friend #6'},
        {name : 'Friend #7'},
    ];

    return <FlatList  
        keyExtractor={friend => friend.name}
        horizontal
        showsHorizontalScrollIndicator
        data={friends}
        renderItem={({item,index})=>{
            return <Text style={styles.textStyle}>{index} - {item.name}</Text>;
        }}
    />
};

const styles = StyleSheet.create({
    textStyle : {
        marginVertical : 50
    }
});

export default ListScreen;

