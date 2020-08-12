import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Main from './src/main.js'

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <Main />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})
