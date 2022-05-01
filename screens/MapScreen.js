import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import tw from "tailwind-react-native-classnames";
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActions } from '@react-navigation/native-stack';
import HaulOptionsCard from '../components/HaulOptionsCard';

const MapScreen = () => {
  const NativeStack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        < Map/>
      </View>

      <View style={tw`h-1/2`}>
        <NativeStack.Navigator>
          <NativeStack.Screen 
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <NativeStack.Screen 
            name="HaulOptionsCard"
            component={HaulOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </NativeStack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({})