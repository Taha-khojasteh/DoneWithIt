import React from 'react';
import {Animated,TouchableWithoutFeedback, View,StyleSheet} from "react-native";
import colors from "../config/colors";
import { MaterialIcons } from '@expo/vector-icons';

function ListItemDelete({onPress}) {
    return (

        <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View style={styles.container}>
                <MaterialIcons name="delete" size={34} color={colors.white}/>

            </Animated.View>
        </TouchableWithoutFeedback>

    );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDelete;