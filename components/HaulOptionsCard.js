import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

const HaulOptionsCard = () => {
  return (
    <SafeAreaView Style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity>

        </TouchableOpacity>
        <Text Style={tw`text-center py-5 text-xl`}>Hire a hauler</Text>
      </View>
    </SafeAreaView>
  )
}

export default HaulOptionsCard

const styles = StyleSheet.create({})