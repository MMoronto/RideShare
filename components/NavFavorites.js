import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Allen Avenue, Lagos, Nigeria",
    },
    {
        id: "456",
        icon: "portmanteau",
        location: "Home",
        destination: "Opebi Rd, Lagos, Nigeria",
    },
];

const NavFavorites = () => {
  return (
    <View>
      <Text>NavFavorites</Text>
    </View>
  )
}

export default NavFavorites

const styles = StyleSheet.create({})
