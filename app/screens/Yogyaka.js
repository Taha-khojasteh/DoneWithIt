import React from 'react';
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppSearchInput from "../components/AppSearchInput";
import {StyleSheet, TouchableWithoutFeedback, View} from "react-native";

function Yogyaka(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <AppSearchInput icon={"search"}
                    placeholder={"Search.."}
                >
                </AppSearchInput>

            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})

export default Yogyaka;