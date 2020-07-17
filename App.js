import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './src/components/screens/signupPa' ;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Skin Cancer Application Home Screen
      </Text>
      <StatusBar style="auto" />
      <Signup/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
