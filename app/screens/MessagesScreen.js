import React, {useEffect, useState} from 'react';
import {FlatList, StatusBar, StyleSheet} from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDelete from "../components/ListItemDelete";
import * as Permission from "expo-permissions";
import * as Notifications from "expo-notifications";




const initialMessages = [
    {
        id: 1,
        title: "Steven Hamburgers",
        description: "I just want let you know that you ...",
        image: require("../assets/4.png")
    },
    {
        id: 2,
        title: "Steven Hamburgers",
        description: "I just want let you know that you ...",
        image: require("../assets/2.png")
    },
    {
        id: 3,
        title: "Steven Hamburgers",
        description: "I just want let you know that you ...",
        image: require("../assets/Tarana.jpg")
    }
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: false,
        }),
    });


    const PermissionAndNotificationSetup = async () => {
        try {
            const NotificationPermission = await Permission.askAsync(Permission.NOTIFICATIONS)
            if (!NotificationPermission.granted) return


            const notificationToken = await Notifications.getExpoPushTokenAsync()
            console.log(notificationToken)
        } catch (e) {
            console.log(e)
        }

    }



    useEffect(() => {
        PermissionAndNotificationSetup()
    }, [])



    const handleDelete = message => {
        //Delete from massages
        setMessages(messages.filter(m => m.id !== message.id))

    }

    return (
        <Screen>
            <StatusBar/>
            <FlatList data={messages}
                      renderItem={({item}) => <ListItem
                          title={item.title} subtitle={item.description}
                          image={item.image}
                          onPress={() => console.log("Message selected", item)}
                          renderRightActions={() => <ListItemDelete onPress={() => handleDelete(item)}/>}
                      />}
                      keyExtractor={message => message.id.toString()}
                      ItemSeparatorComponent={ListItemSeparator}
                      refreshing={refreshing}
                      onRefresh={() => setMessages([
                          {
                              id: 3,
                              title: "t5",
                              description: "Description is about all",
                              image: require("../assets/avatar.jpg")
                          },
                      ])}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({}
)
export default MessagesScreen;