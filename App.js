import React from 'react';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import {useFonts, Raleway_200ExtraLight} from "@expo-google-fonts/raleway";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListItemSeparator from "./app/components/ListItemSeparator";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {


    let [fontLoaded, error] = useFonts({
        Raleway_200ExtraLight,

        "Iran": require("./app/assets/fonts/Vazir.ttf"),
    })

    if (!fontLoaded) {
        <WelcomeScreen/>

    }

    return (
        <RegisterScreen/>
    )
}

