import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDelete from "../components/ListItemDelete";


const initialMessages = [
    {
        id: 1,
        title: "t1",
        description: " D1",
        image: require("../assets/4.png")
    },
    {
        id: 2,
        title: "t2  ",
        description: "D2",
        image: require("../assets/2.png")
    },
    {
        id: 3,
        title: "t5",
        description: "Description is about all",
        image: require("../assets/Tarana.jpg")
    }
]

function MessagesScreen(props) {
    const [messages , setMessages] = useState(initialMessages);
    const [refreshing , setRefreshing] = useState(false)

    const handleDelete = message => {
        //Delete from massages
        setMessages(messages.filter(m => m.id !== message.id))

    }

    return (
        <Screen>
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
                              image: require("../assets/fatemeh.jpg")
                          },
                      ])}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
}
)
export default MessagesScreen;