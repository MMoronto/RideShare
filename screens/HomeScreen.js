import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import 

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white-100 h-full`}>
      <View style={tw`p-5`}>
          <Image
            style={{
                width: 100, 
                height: 100, 
                resizeMode: 'contain',
            }}
            source={require{'.assets/logo-1.png'}}
          />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
})