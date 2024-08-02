// CustomHeader.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');
const CustomHeader = (props) => {
  const title = props.title;
  const onPress = props.onPress;
  const navigation=useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButton}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: height* 0.07,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width* 0.05,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backButton: {
    padding: width*0.01,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007AFF',
  },
  title: {
    fontSize: width*0.05,
    fontWeight: 'bold',
  },
  rightSpace: {
    width: width* 0.05, // Width of the back button to align the title in the center
  },
});

export default CustomHeader;
