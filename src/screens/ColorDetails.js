import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';

const ColorDetails = (props) => {
    console.log('Props:',props);
    const color = props.route.params.color;
    return (
        <View style={[styles.container,{backgroundColor:color}]}> 
            <Text>Color Details : {color}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    }
})

export default ColorDetails;
