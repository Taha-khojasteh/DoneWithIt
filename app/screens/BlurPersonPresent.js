import React from 'react';
import {Image, ImageBackground, StatusBar, Text, View} from "react-native";
import Screen from "../components/Screen";
import {BlurView} from "expo-blur";
import styleFont from "../config/styleFont";
import AppButton from "../components/Button";
import Icon from "../components/Icon";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

const BlurPersonPresent = () => {
    return (
        /**/
        <>
            <StatusBar hidden={true}/>
            <ImageBackground
                source={{uri: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"}}
                style={{width: '100%', height: '100%'}}>

                {/*TOP AND RIGHT   */}


                <Ionicons name="md-chatbox-outline" color={"white"} size={30} style={{
                    position: "absolute",
                    left: 20,
                    top: 160,
                }}/>
                <Text style={{
                    position: "absolute",
                    left: 25,
                    top: 195,
                    color: "white",
                }}>15</Text>


                <AntDesign name="hearto" size={30} color="white" style={{
                    position: "absolute",
                    left: 20,
                    top: 235,

                }}/>
                <Text style={{
                    position: "absolute",
                    left: 25,
                    top: 270,
                    color: "white",
                }}>700</Text>

                <AntDesign name="clockcircleo" color={"white"} size={30} style={{
                    position: "absolute",
                    left: 20,
                    top: 310,
                }}/>
                <Text style={{
                    position: "absolute",
                    left: 25,
                    top: 345,
                    color: "white",
                }}>15</Text>


                <Screen>
                    <BlurView
                        tint="dark"
                        intensity={100} style={{
                        width: 350,
                        height: 200,
                        position: "absolute",
                        right: 20,
                        top: 450,
                        borderRadius: 20
                    }}>

                        <Text style={[styleFont.text, {fontSize: 25, padding: 10, color: "white", fontWeight: "bold"}]}>
                            Jemmy Wellen
                        </Text>
                        <Text style={[styleFont.text, {fontSize: 14, padding: 10, color: "white"}]}>dolor sit lorem ipsum
                            dolor sit lorem ipsum dolor sitdolor sit lorem ipsum
                            dolor sit lorem ipsum
                            dolor sit lorem ipsum dolor sit
                        </Text>

                        <AppButton color="darkRed" title="Follow"
                                   style={{
                                       width: 100,
                                       position: "absolute",
                                       right: 15,
                                       bottom: 2,
                                       borderRadius: 10,
                                       borderBottomStartRadius: 0
                                   }}/>
                    </BlurView>


                </Screen>

            </ImageBackground>
            {/*to separate icons from status bar*/}

        </>
    );
};

export default BlurPersonPresent;