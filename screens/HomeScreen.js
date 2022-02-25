import { StyleSheet, Text, View, safeAreaView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <safeAreaView>
      <Text style={styles.text}>I am the homescreen</Text>
    </safeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
})