import React from 'react';
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import {FlatList, StyleSheet, Text, View} from "react-native";
import Colors from "../config/colors"
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import {productName} from "expo-device";

const menuItems = [
    {
        title: "MY heading",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: Colors.primary,
        },
        target:"Heading"

    },
    {
        title: "MY messages",
        icon: {
            name: "email",
            backgroundColor: Colors.secondary,
        },
        target:"Messages"
    }
]

function AccountScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title="Taha khojasteh" subtitle="Lorem ipsum dollar sit" image={require("../assets/4.png")}/>
            </View>
            <View style={styles.container}>
                <FlatList data={menuItems}
                          keyExtractor={menuItems => menuItems.title}
                          ItemSeparatorComponent={ListItemSeparator}
                          renderItem={({ item }) => <ListItem title={item.title}
                                                              ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
                                                              onPress={()=> navigation.navigate("Messages")}  />}

                />
            </View>
            <View>
                <ListItem
                title="logout"
                ImageComponent={
                    <Icon name="logout"  backgroundColor="#f4a261"/>
                }
                />


                <Text style={styles.brand}>{productName}</Text>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20,
    },
    brand:{
        alignSelf:"center",
        marginTop:30,
        color:colors.medium,

    }
})
export default AccountScreen;