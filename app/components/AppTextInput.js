import React from 'react';
import {Platform, StyleSheet, TextInput, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import styleFont from "../config/styleFont";

function AppTextInput({icon , children,...Props}) {
    return (
        <View style={styles.container}>
            <MaterialIcons name={icon} size={20} color={styleFont.colors.medium} style={styles.icon}/>
            <TextInput  {...Props} style={styleFont.text} />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: styleFont.colors.light,
        width: "100%",
        borderRadius: 25,
        marginVertical: 10,
        flexDirection: "row",
        padding: 15,
    },

    icon:{
        marginVertical: 5,
        paddingRight: 8,
    }
})

export default AppTextInput;