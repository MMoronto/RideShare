import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white-100 h-full`}>
      <View style={tw`p-5`}>
          <Image
            style={{
                width: 250, 
                height: 250, 
                resizeMode: 'contain',
            }}
            // source={{ uri: '.assets/logo-1.png'}}
            source={{ uri: 'https://images.unsplash.com/photos/ki19VJAGh6w' }}
          />

          <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
})