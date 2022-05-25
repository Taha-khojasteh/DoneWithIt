import React, {useEffect} from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome} from "@expo/vector-icons";
import colors from "../config/colors";
import Icon from "../components/Icon";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import SettingNavigator from "./SettingNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        tabBarOptions={
            {
                keyboardHidesTabBar: true,
                activeTintColor: "red",
                inactiveTintColor: "#3d3d3d",
                inactiveBackgroundColor: "white",


            }}>


        <Tab.Screen name="Feeds" component={FeedNavigator} options={{
            tabBarIcon: ({size, color}) => <FontAwesome name="home" size={size} color={color}/>,
            tabBarBadge: "2",
            tabBarBadgeStyle: {backgroundColor: colors.darkRed},

        }}/>
        <Tab.Screen name="Tweets" component={ListingEditScreen} options={{

            tabBarIcon: ({size, color}) =>
                <Icon name={"add-circle"} size={60} backgroundColor={colors.darkRed}
                      style={{bottom: 5, borderWidth: 5, borderColor: "white"}}/>, tabBarLabel: "",
        }}/>

        <Tab.Screen name="Options" component={SettingNavigator} options={{
            tabBarIcon: ({size, color}) => <FontAwesome name="user" size={size} color={color}/>,
            tabBarLabel: "Setting"
        }}/>
    </Tab.Navigator>

)
export default AppNavigator;