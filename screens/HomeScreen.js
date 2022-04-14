import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-gray-100 h-full`}>
      <View style={tw`p-5`}>
        <Image 
          style={{
            width: 80, height: 80, resizeMode: 'contain'
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBzj_U2xUXkBirJ8Q9TCWWmJA_oBWn7wbuQ&usqp=CAU"
          }}
        />

        <GooglePlacesAutocomplete
          placeholder='Where From?'
          styles={{
            container: {
              flex: 5,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          // minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          requestUrl={{
            useOnPlatform: 'web', // or "all"
            url:
              'https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
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
});