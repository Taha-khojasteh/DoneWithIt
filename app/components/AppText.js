import React from 'react';
import {Text, StyleSheet, Platform} from "react-native";
import styleFont from "../config/styleFont";

function AppText({children, style}) {
    return <Text style={[styleFont.text, style]}>{children}</Text>

}


export default AppText;