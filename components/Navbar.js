import React, { useState } from 'react'
import { StyleSheet, Dimensions, Pressable } from 'react-native'
import { MdMenu } from 'react-icons/md'
import { IoLogoIonic } from 'react-icons/io'
import { AiFillCloseCircle } from 'react-icons/ai'

const Navbar = () => {
    const [menu, setMenu] = useState('none')
    return (
        <div style={navStyle.container}>
            <IoLogoIonic style={navStyle.margin} />
            <Pressable style={navStyle.margin} onPress={() => { setMenu('flex') }} >
                <MdMenu />
                <div style={{ display: menu }}>
                    <div style={navStyle.background} >
                        <Pressable style={navStyle.margin} onPress={() => { setMenu('none') }} >
                            <AiFillCloseCircle style={{ position: 'relative', left: '0px' }} />
                        </Pressable>
                        <li style={{ marginLeft: 10, marginTop: 18 }}>Home</li>
                        <li style={{ marginLeft: 10, marginTop: 9 }}>About</li>
                    </div>
                </div >
            </Pressable >

        </div >
    )
}

const navStyle = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'pink',
        height: 88,

    },
    margin: {
        margin: '10px'
    },
    background: {
        backgroundColor: 'blue',
        color: 'white',
        position: 'fixed',
        top: '1.3rem',
        width: 141,
        height: Dimensions.get('window').height,
        right: 1,

    },
    none: {
        display: 'none'
    }



})

export default Navbar