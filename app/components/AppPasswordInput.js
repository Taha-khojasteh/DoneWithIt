import React, {useState} from 'react';
import {TouchableWithoutFeedback} from "react-native";
import {StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import AppTextInput from "./AppTextInput";

function AppPasswordInput(props) {
        const [eye, setEye] = useState(false);

    return (
        <AppTextInput
                icon={'lock'}
                placeholder={"Password"}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry={eye}
            >
            <TouchableWithoutFeedback onPress={() => {setEye(!eye)}}>
                <MaterialCommunityIcons style={styles.iconPassword} name={eye ? "eye-off-outline" : "eye-outline"} size={24} color="black"/>
            </TouchableWithoutFeedback>

            </AppTextInput>
    );

}


const styles = StyleSheet.create({
     iconPassword: {
        position: "absolute",
        left:325,
        top:17
    },
})

export default AppPasswordInput;