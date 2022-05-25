import React from 'react';
import colors from "../config/colors";
import {View,StyleSheet} from "react-native";

function ListItemSeparator( ) {
    return (
        <View style={styles.container}/>
    );
}

const styles = StyleSheet.create({
    container: {height: 1, width: '100%', backgroundColor: colors.light}
})
export default ListItemSeparator;