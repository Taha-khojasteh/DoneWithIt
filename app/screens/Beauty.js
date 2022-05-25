import React, {Component} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from "react-native";
import Screen from "../components/Screen";
import styleFont from "../config/styleFont";

class Beauty extends Component {
    render() {
        return (
            <Screen style={styles.cotainer}>
                <StatusBar style={"light"} translucent={false} backgroundColor={"#914c39"}/>
                <Text style={{color: "#f0a790", fontSize: 24, fontFamily: "Roboto", paddingLeft: 20}}> Portfolio</Text>
                <Image source={require("../assets/avatar.jpg")} style={styles.image}/>

                <Text style={{
                    color: "#f0a790",
                    fontSize: 24,
                    fontFamily: "Roboto",
                    position:"absolute",
                    bottom:-250,
                    textAlign: 'left',
                    padding: 30,
                    alignContent:'center',
                    alignItems:"center",
                }}> Discover intresting
                    places to create photo shoots for your portfolio</Text>

            </Screen>
        );
    }
}

const styles = StyleSheet.create({
    cotainer: {
        backgroundColor: "#914c39"

    },
    image: {
        width: 250,
        height: 300,
        position: "relative",
        top: 50,
        left: 70,
        transform: [
            {rotateZ: "-10deg"},
        ]
    }
})

export default Beauty;