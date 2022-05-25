import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import AppButton from "../components/Button";

function AuthScreen({navigation}) {
    return (
        <>
            <StatusBar style={"light"}/>
            <ImageBackground source={{uri: "https://picsum.photos/id/1/200/300"}} style={styles.container} blurRadius={1}>
                <Image source={require('../assets/Tarana.jpg')} style={styles.logo} />
                <AppButton title="Login" style={{position:"absolute",bottom:5, alignSelf: "center"}} onPress={() => navigation.navigate("Login")}/>
                <AppButton title="Register" style={{position:"absolute",bottom:70, alignSelf: "center"}} color="secondary" onPress={() => navigation.navigate("Register")}/>
            </ImageBackground>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    logo:{
        width: 200,
        height: 200,
        alignSelf:"center",
        marginTop:75,
        borderRadius: 100,

    }
})
export default AuthScreen;