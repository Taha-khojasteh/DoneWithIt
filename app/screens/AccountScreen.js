import React from 'react';
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import {FlatList, StyleSheet, View} from "react-native";
import Colors from "../config/colors"
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";


const menuItems = [
    {
        title: "MY heading",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: Colors.primary,
        }

    },
    {
        title: "MY messages",
        icon: {
            name: "email",
            backgroundColor: Colors.secondary,
        }
    }
]

function AccountScreen(props) {
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
                                                              ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}  />}/>
            </View>
            <View>
                <ListItem
                title="logout"
                ImageComponent={
                    <Icon name="logout"  backgroundColor="#f4a261"/>
                }
                />
                <ListItem

                    title="Download" ImageComponent={
                    <Icon name="file-download" backgroundColor={colors.secondary}/>
                } />
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
    }
})
export default AccountScreen;