import React, {useEffect, useState} from 'react';
import Screen from "./Screen";
import {Alert, Image, TouchableWithoutFeedback, View} from "react-native";
import {StyleSheet} from "react-native";
import Icon from "./Icon";
import * as Permission from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import {MaterialIcons} from "@expo/vector-icons";

function AppCamearaAddPhoto(props) {
    const [ImageUri, setImageUri] = useState();

    const CameraPermission = async () => {

        const {status} = await Permission.askAsync(Permission.MEDIA_LIBRARY)
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');

        }



    }
    const CameraLibrary = async () => {
        try {
             const result = await ImagePicker.launchImageLibraryAsync({
                 mediaTypes : ImagePicker.MediaTypeOptions.Images,
                 quality: 0.5,

             })

            setImageUri(result.uri)

        } catch (error) {
            alert("Something went wrong during Selecting an Image")
        }
    }

    const DeleteImages = () => {
        Alert.alert("Delete Image", "Are you sure you want do that ? ", [ { text: "no"},{text: "Yes", onPress: () => {setImageUri(null)}}])
    }

    useEffect(() => {

        CameraPermission()

    }, [])


    return (

        <Screen style={styles.container}>
            <TouchableWithoutFeedback onPress={CameraLibrary}>
                <View style={styles.boxApp}>
                    <Icon name="add" backgroundColor="gray"/>
                </View>
            </TouchableWithoutFeedback>
            <View>
             { !ImageUri ? null :
                 <>

                     <Image source={{uri: ImageUri}} style={{width: 100, height: 100,marginHorizontal: 10, borderRadius:3 , overflow:"hidden",}} key={ImageUri} />

                     <TouchableWithoutFeedback onPress={DeleteImages}>
                     <View style={styles.boxDelete}>
                     <MaterialIcons name="close" color="#fff" size={20} style={styles.deleteIcon}/>

                     </View>

                     </TouchableWithoutFeedback>


                 </>

             }

            </View>


        </Screen>
    );
}


const styles = StyleSheet.create({
    boxDelete:{
        width: 30,
        height: 30,
        backgroundColor: "black",
        position:"absolute",
        top: -10,
        right: 0,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",

    },
    container: {
        flexDirection: "row",
        margin: 5,
        marginBottom: 120,


    },
    boxApp: {
        backgroundColor: "#dedede",
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
    },
    deleteIcon:{

    }

})
export default AppCamearaAddPhoto;