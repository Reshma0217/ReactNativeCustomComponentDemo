import React, { useRef, useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { SCREEN_WIDTH } from '../utils/helpers/dimen';
const ColorForm = ({ onNewColor }) => {

    const [inputValue, setInputValue] = useState("");
    const input = useRef();
    return (
        <>
            <View style={styles.container}>
                <TextInput
                    ref={input}
                    style={styles.textInput}
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                    autoCapitalize='none'
                    placeholder='Enter color here..'
                />

                <Text style={styles.text} onPress={() => {
                    input.current.blur(); //deselect the text input bcoz keybord disappear
                    console.log(inputValue)

                    onNewColor(inputValue);
                    setInputValue("");
                }}>Add</Text>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingLeft: SCREEN_WIDTH * 0.02,

    },
    textInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: SCREEN_WIDTH * 0.05,
        borderRadius: SCREEN_WIDTH * 0.02,
        margin: SCREEN_WIDTH * 0.02,
        paddingLeft: SCREEN_WIDTH * 0.05,
    },
    text: {
        margin: SCREEN_WIDTH * 0.02,
        alignSelf: 'center',
        fontSize: SCREEN_WIDTH * 0.05,
        fontWeight: 'bold'
    }

})

export default ColorForm;
