import { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const CustomColorButton = ({ backgroundColor, onPress }) => {
  const gotoDetails = () => {
    onPress(backgroundColor)
  }
  return (
    <TouchableHighlight onPress={gotoDetails} style={styles.button} underlayColor={'orange'}>
      <View style={styles.row} >
        <View style={[styles.sample, { backgroundColor }]}></View>
        <Text style={styles.text}>{backgroundColor}</Text>
      </View>
    </TouchableHighlight>
  )
}
const styles = StyleSheet.create({

  text: {
    textAlign: 'center',
    fontSize: width * 0.05,
    padding: width * 0.01,
  },
  button: {
    height: height * 0.07,
    borderRadius: width * 0.02,
    margin: width * 0.03,
    borderWidth: width * 0.002,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  sample: {
    height: height * 0.02,
    width: width * 0.04,
    borderRadius: width * 0.02,
    margin: width * 0.02
  }
})