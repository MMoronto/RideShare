import { StyleSheet, Text, View, safeAreaView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <safeAreaView style={tw`bg-white-100 h-full`}>
      <View>
          <image
            style={{
                width: 100, 
                height: 100, 
                resizeMode: 'contain',
            }}
            source={{
                uri: "https://www.istockphoto.com/vector/truck-gm1213948971-353010272",
            }}
          />
      </View>
    </safeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
})