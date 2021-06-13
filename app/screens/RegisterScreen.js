import React from 'react';
import Screen from "../components/Screen";
import {StyleSheet} from "react-native";
import AppTextInput from "../components/AppTextInput";
import Button from "../components/Button";
import AppPasswordInput from "../components/AppPasswordInput";

function RegisterScreen() {

    return (
        <Screen style={styles.screen}>
            <AppTextInput icon={'person'} placeholder={"Name "}/>
            <AppTextInput icon={'email'} placeholder={"Email"}/>
            <AppPasswordInput/>

            <Button title={"Register"} color={"primary"} style={styles.button} />


        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10
    },
    button: {
        marginTop: 10,
        borderRadius: 50,
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 30,
    },
})


export default RegisterScreen;