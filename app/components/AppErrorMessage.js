import React from 'react';
import AppText from "./AppText";
import {StyleSheet} from "react-native";
import colors from "../config/colors";


function AppErrorMessage({error, visible}) {
    if (!visible || !error) return null;


    return (
        <AppText style={styles.error}>{error}</AppText>
    );
}


const styles = StyleSheet.create({
    error : {
        color: colors.primary,
    }

})
export default AppErrorMessage;