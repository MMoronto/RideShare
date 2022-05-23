import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const HaulOptionsCard = () => {
  return (
    <SafeAreaView Style={tw`bg-white flex-grow`}>
      <Text Style={tw`text-center py-5 text-xl`}>Hire a hauler</Text>
    </SafeAreaView>
  )
}

export default HaulOptionsCard

const styles = StyleSheet.create({})