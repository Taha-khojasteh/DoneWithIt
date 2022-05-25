import React from 'react';
import Screen from "../components/Screen";
import {StyleSheet} from "react-native";

import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import AppCamearaAddPhoto from "../components/AppCamearaAddPhoto";

function ListingEditScreen(props) {
     const items=[
        {label:"Lock",backgroundColor:"red",name:"lock",val:2},
        {label:"Apps",backgroundColor:"green",name:"apps",val:3},
        {label:"Person",backgroundColor:"purple",name:"person",val:5},
        {label:"Lock",backgroundColor:"red",name:"lock",val:8},
        {label:"Apps",backgroundColor:"green",name:"apps",val:10},
        {label:"Person & Family",backgroundColor:"purple",name:"apps",val:50},
        {label:"Lock",backgroundColor:"red",name:"lock",val:230},
        {label:"Apps",backgroundColor:"green",name:"apps",val:5215},
        {label:"Person",backgroundColor:"purple",name:"person",val:521},


    ]
    return (

        <Screen style={styles.screen}>
            <AppCamearaAddPhoto/>
            <AppTextInput placeholder={"Title "}/>
            <AppTextInput placeholder={"Price "}/>
            <AppTextInput placeholder={"Subtitle"}/>
            <AppPicker items={items}>Category</AppPicker>
            <AppTextInput placeholder={"Description"}/>

        </Screen>


    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 5
    },

})

export default ListingEditScreen;