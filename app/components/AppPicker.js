import React, {useState} from 'react';
import {FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons";
import styleFont from "../config/styleFont";
import AppText from "./AppText";
import Button from "./Button";
import colors from "../config/colors";
import PickerItem from "./PickerItem";
import Icon from "./Icon";

function AppPicker({icon , items,onSelectItem,selectedItem,children,...Props}) {
    const [modalBol, setModealBol] = useState(false)

    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModealBol(true)}>
            <View style={styles.container}>
                <MaterialIcons name={icon} size={25} color={styleFont.colors.medium} style={styles.icon}/>
                <AppText  {...Props} style={[styleFont.text, styles.text]} >
                    {selectedItem ? selectedItem.label : children}
                </AppText>
                <MaterialCommunityIcons name="chevron-down" size={30} color={styleFont.colors.medium} />
            </View>
        </TouchableWithoutFeedback>
            <Modal visible={modalBol} animationType="slide">
                        <FlatList data={items} keyExtractor={items=> items.val.toString()} renderItem={({item}) => (
                            <PickerItem label={item.label} onPress={() => {
                                setModealBol(false);
                                onSelectItem(item)
                            }
                            }/>
                        )}/>
                <Button title="exit" onPress={() => setModealBol(false)}  style={styles.butt}/>



            </Modal>

        </>

    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: styleFont.colors.light,
        width: "100%",
        borderRadius: 25,
        marginVertical: 10,
        flexDirection: "row",
        padding: 15,
    },

    icon:{
        marginVertical: 5,
        paddingRight: 8,
    },

    text:{
        flex: 1,
        marginVertical:5,
    },
    butt:{
        marginHorizontal:50,
        marginVertical: 20,
        flexDirection: "row",

    },
    background:{
        backgroundColor: colors.medium
    }
})

export default AppPicker;