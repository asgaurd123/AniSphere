import React, { useState } from 'react'
import { StyleSheet, Dimensions, Pressable, View, Text, Image } from 'react-native'

const Navbar = () => {
    const [menu, setMenu] = useState('none')
    return (
        <View style={navStyle.container}>
            <Image source={require('../assets/icon1.png')} style={navStyle.logo} />
            <View style={navStyle.search}></View>
            <Text>Hi</Text>

        </View >
    )
}

const navStyle = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        color: 'white',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#2b2e4afa',
        height: 88,
        marginBottom: 40,

    },
    margin: {
        margin: '10px'
    },

    search: {
        backgroundColor: "#151623",
        width: '55%',
        height: '45%'


    },
    logo: {
        width: 30,
        height: 30,
    }




})

export default Navbar