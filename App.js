import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import {Text} from "react-native";
import Screen from "./app/components/Screen";
import {osBuildId,productName} from "expo-device";
import AuthNavigator from "./app/navigation/AuthNavigator";
import JustCallIt from "./app/screens/JustCallIt";


export default function App() {
    return (
         <NavigationContainer theme={NavigationTheme}>
             <AppNavigator/>
         </NavigationContainer>
    )
}

