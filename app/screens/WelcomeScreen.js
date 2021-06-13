import React, {useEffect} from 'react';
import {Image, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View, ActivityIndicator,} from "react-native";
import {AntDesign} from '@expo/vector-icons';
import colors from "../config/colors";
import dimensions from "react-native-web/dist/exports/Dimensions";
import AppButton from "../components/Button";



function WelcomeScreen(props) {


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                resizeMode= "contain"
                style={styles.background}
                source={require('../assets/4.png')}
            >
                <Text
                    style={styles.icon}
                >
                    Lorem ipsum
                </Text>
                <Text style={styles.textUnderIcon}
                      onPress={() => alert("ok")}
                >
                    Lorem ipsum dollar sit
                </Text>
               <AppButton title="Login" color="black">
                   <AntDesign name="login" size={24} color={colors.primary} style={{
                        left: 70,
                        position: "absolute",
                    }}/>
               </AppButton>
                <AppButton title="Register" color="primary">
                    <AntDesign name="login" size={24} color={colors.white} style={{
                        left: 70,
                        position: "absolute",
                    }}/>
                </AppButton>
            </ImageBackground>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 24 : 0

    },
    textLogin: {
        fontFamily: "Iran",
        fontWeight: "bold",
        color: "white",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Raleway_200ExtraLight",
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto",
            }
        })
    },
    icon: {

        bottom: 450,
        fontSize:  40,
    },
    textUnderIcon: {
        color: "gray",
        bottom: 440,
    },
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: 300,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 5,
        top: -35,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,

    },
    registerButton: {
        width: 300,
        height: 50,
        borderRadius: 5,
        backgroundColor: colors.secondary,
        top: -20,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
    }

})
export default WelcomeScreen;

