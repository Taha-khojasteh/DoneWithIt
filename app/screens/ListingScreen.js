import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from "react-native";
import getPhotos from "../api/getPhotoListing";
import ActivityIndicatorLottie from "../components/ActivityIndicatorLottie";
import Screen from "../components/Screen";
import Card from "../components/Card";
import AppSearchInput from "../components/AppSearchInput";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";


function ListingScreen({navigation}) {




    const [listing, setListing] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        GetListing();

    }, [])

    const GetListing = async () => {
        setLoading(true)


        await getPhotos().then(r => {
            setListing(r.data)
            setLoading(false)
        })


    }


    if (loading) return <ActivityIndicatorLottie visible={loading}/>


    return (

        <Screen style={styles.backLight}>


            <AppSearchInput
                icon={"search"}
                placeholder={"Search.."}/>

            <FlatList
                data={listing}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => <Card title={item.title}
                                              image={item.image}
                                              subtitle={item.subtitle}
                                              onPress={() => navigation.navigate('DetailFeed', item)}

                />}/>


        </Screen>
    );
}


const styles = StyleSheet.create({
    backLight: {
        paddingRight: 5,
        paddingLeft: 5,
        backgroundColor: Colors.light,
        paddingBottom: 40,
    }
})


export default ListingScreen;