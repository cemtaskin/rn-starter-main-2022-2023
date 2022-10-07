import React from 'react';
import { View,Text,Button, TouchableOpacity,StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
  console.log(navigation);

  return (
    <View>
        <Text style={styles.text}>Hi There!</Text>
        <Button 
          title='Go to Components Demo'
          onPress={()=>navigation.navigate('Components')}
        />
        <TouchableOpacity
          onPress={()=>navigation.navigate('List')}
        >
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        </TouchableOpacity>
        <Button 
          title='Go to Image Screen'
          onPress={()=>navigation.navigate('Image')}
        ></Button>
        <Button 
          title='Go to Counter Screen'
          onPress={()=>navigation.navigate('Counter')}
        ></Button>

      <Button 
          title='Go to Colors Screen'
          onPress={()=>navigation.navigate('Colors')}
        ></Button>

<Button 
          title='Go to Square Screen'
          onPress={()=>navigation.navigate('Square')}
        ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
