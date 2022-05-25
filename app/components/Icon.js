import React from 'react';
import {View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

function Icon({name, size = 40, backgroundColor = "#000", iconColor = "#fff",style}) {
    return (
        <View style={[{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: backgroundColor,
            justifyContent: "center",
            alignItems: "center",
        },style]}>
            <MaterialIcons name={name} color={iconColor} size={size * 0.5}/>
        </View>
    );
}

export default Icon;