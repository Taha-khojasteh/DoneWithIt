import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";


const Stack = createStackNavigator()

const SettingNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name="Setting"  component={AccountScreen}/>
        <Stack.Screen name="Messages"  component={MessagesScreen}/>
    </Stack.Navigator>
)

export default SettingNavigator;