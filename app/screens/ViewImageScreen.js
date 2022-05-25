import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import colors from "../config/colors";
import {AntDesign} from '@expo/vector-icons';


function ViewImageScreen(props) {
    return (
        <View style={styles.container}>

            <View style={styles.closeButton}><AntDesign name="close" size={25} color="white" /></View>
            <View style={styles.deleteButton}><AntDesign name="delete" size={25} color="white" /></View>

            <Image
                resizeMode="contain"
                style={styles.backgroundImage}
                source={require("../assets/avatar.jpg")}/>

        </View>
    );

}

const styles = StyleSheet.create({
    backgroundImage: {
        marginTop: 40,
        width: "100%",
        height: "100%",
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    closeButton: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        position: "absolute",
        top: 40,
        left: 20,
        borderRadius: 5,


    },
    deleteButton: {
         alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        position: "absolute",
        top: 40,
        right: 20,
        borderRadius: 5,
    },
})
export default ViewImageScreen;