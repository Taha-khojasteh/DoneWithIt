import React from 'react';
import styleFont from "../config/styleFont";
import {Feather, Ionicons} from '@expo/vector-icons';
import {StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";

function AppSearchInput({icon, ...Props}) {
    return (
        <View style={styles.container}>
            <Feather name={icon} size={24} color={styleFont.colors.medium} style={styles.icon}/>
            <TextInput  {...Props} style={styleFont.text}/>
            {/*for that you touch option Icon */}
            <TouchableWithoutFeedback>
                <Ionicons name="options" size={24} color={styleFont.colors.black}
                          style={styles.iconToggle}/>
            </TouchableWithoutFeedback>
            <View style={styles.line}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f7fd",
        width: "100%",
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: "row",
        padding: 15,
        borderColor: '#e2e2e2',
        borderWidth: 1,

    },
    icon: {
        marginVertical: 5,
        paddingRight: 8,
    },
    iconToggle: {

        position: "absolute",
        right: 20,
        top: 20,

    },
    line: {
        width: 1,
        height: 30,

        position: "absolute",
        right: 50,
        top: 18,

        backgroundColor: "#d4d4d4",
    }
})

export default AppSearchInput;