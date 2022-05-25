import React, {Component} from 'react';
import Screen from "../components/Screen";
import {Button, Text} from "react-native";

class Increment extends Component {

    state = {
        count: 0
    }
    increment = () => {
        this.setState({count : this.state.count  +1   })
    }
    render() {
        return (
            <Screen>
                <Text>
                    {this.state.count}
                </Text>
                <Button title="Increment" onPress={() => this.increment()}>
                    Increment
                </Button>
            </Screen>

        );
    }
}

export default Increment;