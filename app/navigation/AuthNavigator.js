import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AuthScreen from "../screens/AuthScreen";


const Stack = createStackNavigator()

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={AuthScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
    </Stack.Navigator>
)

export default AuthNavigator;