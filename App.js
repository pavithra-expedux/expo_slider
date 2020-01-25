import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from './src/SliderComponent'

export default function App() {
  return (
    <View style={styles.container}>
        <Slider/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
