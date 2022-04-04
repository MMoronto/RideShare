import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView >
      <Text style={tw`text-red-600`}>I am the homescreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});