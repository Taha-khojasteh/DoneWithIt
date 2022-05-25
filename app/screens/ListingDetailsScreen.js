import React from 'react';
import {Image, View, StyleSheet} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen({route}) {
    const listing = route.params
    return (
        <View>

            <Image style={styles.image} source={{ uri: listing.image}}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.subTitle}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem image={{ uri: listing.image}} title={listing.title} subtitle="5 listing item"/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer:{
         paddingVertical: 40,
    }
})
export default ListingDetailsScreen;