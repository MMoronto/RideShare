import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import tw from "tailwind-react-native-classnames";

const Map = () => {
  return (
    <MapView
    style={tw`flex-1`}
    mapType="mutedStandard"
        initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
    />
  )
}

export default Map

const styles = StyleSheet.create({})