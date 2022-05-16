import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-gray-100 h-full`}>
      <View style={tw`p-5`}>
        <Image 
          style={{
            width: 100, height: 100, resizeMode: 'contain',
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBzj_U2xUXkBirJ8Q9TCWWmJA_oBWn7wbuQ&usqp=CAU",
          }}
        />

        <GooglePlacesAutocomplete
          dispatch={dispatch}
          placeholder='Where From?'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          styles={{
            container: {
              flex: 5,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          // onPress={(data, details = null) => {
          //   dispatch(
          //     setOrigin({
          //       location: details.geometry.location,
          //       description: data.description
          //     })
          //   );

          //   dispatch(setDestination(null));
          // }}
          // fetchDetails={true}
          // returnKeyType={"search"}
          // enablePoweredByContainer={false}
          // minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          // requestUrl={{
          //   useOnPlatform: 'web', // or "all"
          //   url:
          //     'https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters',
          // }}
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