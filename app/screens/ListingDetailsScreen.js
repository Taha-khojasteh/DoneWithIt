import React from 'react';
import {Image, View, StyleSheet} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
    return (
        <View>

            <Image style={styles.image} source={require('../assets/shutterstock-1846094434_53sc.960.jpg')}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.subTitle}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem image={require("../assets/2.png")} title="Taha khojasteh" subtitle="5 listing item"/>
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