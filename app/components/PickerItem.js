import React from 'react';
import AppText from "./AppText";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "./Icon";
import Screen from "./Screen";

function PickerItem({item, label, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.iconStyle}>

                <Icon backgroundColor={item.backgroundColor} name={item.name} size={80} s/>

                <AppText style={styles.text}>
                    {label}
                </AppText>
            </View>

        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    iconStyle: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        width:"99%"
    },
    text: {
        padding: 10,
        alignSelf:"center"
    },
    container: {
        padding: 10,
    }
})

export default PickerItem;