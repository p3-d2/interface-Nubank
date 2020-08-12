import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Main from './src/main.js'

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle='light-content' backgroundColor='#8B10AE' />
      <Main />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})
