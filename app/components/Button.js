import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";

import colors from "../config/colors";

function AppButton({title, color = "primary",children, style,...other}) {
    return (
        <TouchableOpacity style={[styles.button,style, {backgroundColor: colors[color]}]} {...other} >
            {children}
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 350,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 5,
        marginBottom:15,

        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})
export default AppButton;