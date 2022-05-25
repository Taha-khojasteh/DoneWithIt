import * as React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Screen from "../components/Screen";

export default function App() {
    return (
        <Screen>
            <Text>Hello world</Text>
        </Screen>
    );
}

const styles = StyleSheet.create({

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});