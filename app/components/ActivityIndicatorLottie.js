import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet} from "react-native";

function ActivityIndicatorLottie({ visible = false}) {
    if (!visible) return null
    return <LottieView source={require('../assets/animations/stickball.json')} autoPlay loop style={styles.sizeLoading}/>
}

const styles = StyleSheet.create({
    sizeLoading: {
        width: 200,
        alignSelf:"center",
        height: 200,
        marginTop: 100,
    }
})
export default ActivityIndicatorLottie;