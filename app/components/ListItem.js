import React from 'react';
import {Image, View, StyleSheet, TouchableHighlight,} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function ListItem({title, subtitle, image, ImageComponent, onPress, renderRightActions}) {

    return (
        <Swipeable renderRightActions={renderRightActions} >

            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subtitle && <AppText style={styles.subTitle}>{subtitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" style={styles.chevron} size={20}/>
                </View>
            </TouchableHighlight>
        </Swipeable>

    );
}

const styles = StyleSheet.create({
    detailContainer: {
        marginLeft: 10,
        justifyContent: "center",

    },
    chevron: {
        position: "absolute",
        right: 10,
        alignSelf:'center',

    },
    container: {
        flexDirection: "row",
        padding: 13,
        backgroundColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        color: colors.black,

        fontSize: 14,
        fontWeight: "bold"
    },
    subTitle: {
        color: colors.medium,
        fontSize: 14,

    }
})
export default ListItem;