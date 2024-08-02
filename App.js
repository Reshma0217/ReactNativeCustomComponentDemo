
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import CustomHeader from './src/components/CustomHeader';
import ColorForm from './src/components/colorForm';
import ColorDetails from './src/screens/ColorDetails';
const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer   initialRouteName='Home'        >
            <Stack.Navigator 
screenOptions={({ route }) => ({  
                  headerShown: true ,
header: () => ( <CustomHeader title={route.name} /> ),            
})}  >
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{headerShown : false}}/>
                <Stack.Screen
                    name="Home"
                    component={Home} 
                    />
                     <Stack.Screen
                    name="ColorDetails"
                    component={ColorDetails} 
                    />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default App;
