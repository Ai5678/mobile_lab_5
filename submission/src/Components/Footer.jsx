import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text>This is The Incredible To Do App!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})