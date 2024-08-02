
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import { CustomColorButton } from '../components/CustomColorButton';
import { colorsData } from '../data/colorsData';
import ColorForm from '../components/colorForm';
import generate from 'shortid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

let NextId = 0;

//custom hooks are great bcoz they separate the functionality from presentation and give us a way to reuse an functinality
// const useColors=()=>{
//     const [colorsArr,setColors]=useState([]);

//     const addColor = (color) => {
//         setColors( // Replace the state
//           [ // with a new array
//             { id: NextId++, name: color }, // and one new item at the end
//             ...colorsArr // that contains all the old items
//           ])
//       //  console.log('color array', colorsArr)
      
//     };
//     return({colorsArr,addColor});
// };

//load colorArr


const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const [colorsArr,setColors]=useState([]);
  const navigation = useNavigation();

 // const [colorsArr, addColor] = useColors();

 useEffect(()=>{
  if(colorsArr.length) return;
  loadColors();
},[]);

//save color array
useEffect(()=>{
AsyncStorage.setItem('colorsArr',JSON.stringify(colorsArr));
},[colorsArr]
);
 const loadColors=async()=>{
  const colorData = await AsyncStorage.getItem('colorsArr');
  if(colorData){
    const colorsArr = JSON.parse(colorData);
    setColors(colorsArr);

  }
 };

  const addColor = (color) => {
    if (color) {
      setColors( // Replace the state
        [ // with a new array
          { id: generate(), name: color }, // and one new item at the end
          ...colorsArr // that contains all the old items
        ])
      console.log('color array', colorsArr)
    } else {
      alert('Please First Enter color');
    }
  }
  const gotoDetails = (color) => {
    setBackgroundColor(color);
    navigation.navigate('ColorDetails',{color:color
    
    })
      };
  return (
    <View style={styles.mainContainer}>
      <ColorForm onNewColor={addColor} />
      <FlatList
        data={colorsArr}
        style={[styles.container, { backgroundColor }]}
        renderItem={({ item }) => {
          return (
            <CustomColorButton backgroundColor={item.name} onPress={gotoDetails} />
          )
        }}
      />
    </View>
    // <View style={[styles.container,{backgroundColor}]}> 
    //  <CustomColorButton  backgroundColor='cyan' onPress={setBackgroundColor}/>
    //   <CustomColorButton  backgroundColor='red' onPress={setBackgroundColor}/>
    //  <CustomColorButton  backgroundColor='green' onPress={setBackgroundColor}/>
    //  <CustomColorButton  backgroundColor='turquoise' onPress={setBackgroundColor}/>
    //  <CustomColorButton  backgroundColor='khaki'onPress={setBackgroundColor}/> 
    //       </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'pink'
  },

})

export default Home;
