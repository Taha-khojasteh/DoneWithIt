import React from 'react';
import {Text} from "react-native";
import * as Font from "expo-font";

function FullyText(props) {

    return (
        <Text
        style={{
            top: 100,
            right: 10,
            fontFamily: "Vazir",
             fontWeight: 'bold',
        }}>
Some random text
        </Text>
    );
}

export default FullyText;