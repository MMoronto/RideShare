import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: "Flatbed-X-123",
    title: "XtypeHauler",
    multiplier: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBzj_U2xUXkBirJ8Q9TCWWmJA_oBWn7wbuQ&usqp=CAU"
  },
  {
    id: "Flatbed-X-123",
    title: "XtypeHauler",
    multiplier: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBzj_U2xUXkBirJ8Q9TCWWmJA_oBWn7wbuQ&usqp=CAU"
  },
  {
    id: "Flatbed-X-123",
    title: "XtypeHauler",
    multiplier: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBzj_U2xUXkBirJ8Q9TCWWmJA_oBWn7wbuQ&usqp=CAU"
  },
];

const HaulOptionsCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView Style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate("NavigateCard")} 
          style={tw`absolute top-3 left-5 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" /> 
        </TouchableOpacity>
        <Text Style={tw`text-center py-5 text-xl`}>Hire a hauler</Text>
      </View>
      <FlatList 

      />
    </SafeAreaView>
  )
}

export default HaulOptionsCard

const styles = StyleSheet.create({})