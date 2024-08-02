import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000);
    })


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'pink'

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Splash;
