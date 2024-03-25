import { View, Text } from 'react-native'
import React from 'react'

export default function ToDoList({tasks}) {
  return (
    <View>
      <Text>ToDoList</Text>
      {tasks.map((item, index) => <Text key={index}>{item}</Text>)}
    </View>
  )
}