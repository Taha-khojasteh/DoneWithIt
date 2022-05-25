import React, {useEffect, useState} from 'react';
import Screen from "../components/Screen";
import {Text} from "react-native";
import axios from 'axios';

function JustCallIt(props) {
    const [listing, setListing] = useState([])


    const url = 'http://192.168.1.103:8000/courses/'

    const GetListing = async () => {
        axios.get(`${url}1`).then((response) => {
            const myData = response.data
            setListing(myData)

        })
    }


    useEffect(() => {
        GetListing();
    }, [])

    return (
        <Screen>
            <Text>{listing.name}</Text>
        </Screen>
    );
}

export default JustCallIt;