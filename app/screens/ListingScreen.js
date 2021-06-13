import React from 'react';
import {FlatList, StyleSheet} from "react-native";


import Screen from "../components/Screen";
import Card from "../components/Card";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";
import AppSearchInput from "../components/AppSearchInput";


const itemList = [
    {
        id: 1,
        title: "New Phone selling ",
        subtitle: "need to sell soon",
        price: "250",
        image: require("../assets/Phone.jpg")
    },
    {
        id: 5,
        title: "New Phone selling ",
        subtitle: "need to sell soon",
        price: "250",
        image: require("../assets/Phone.jpg")
    },
    {
        id: 2,
        title: "New Home selling ",
        subtitle: "need to sell soon",
        price: "250000",
        image: require("../assets/Home.jpg")
    },
    {
        id: 10,
        title: "New Phone selling ",
        subtitle: "need to sell soon",
        price: "250",
        image: require("../assets/Phone.jpg")
    },



]

function ListingScreen(props) {
    return (
        <Screen style={styles.backLight}>
            <AppSearchInput
                icon={"search"}
                placeholder={"Search.."}/>


            <FlatList
                data={itemList}
                keyExtractor={itemList => itemList.id.toString()}
                renderItem={({item}) => <Card title={item.title} image={item.image} subtitle={"$" + item.price}/>}/>
        </Screen>
    );
}


const styles = StyleSheet.create({
    backLight: {
        paddingRight: 5,
        paddingLeft: 5,
        backgroundColor: Colors.white,
    }
})


export default ListingScreen;