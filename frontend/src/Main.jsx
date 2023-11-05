import React, { useState, useEffect, useContext } from 'react'
import { Platform, View } from 'react-native'
import { Text } from "@gluestack-ui/themed"
import NativeNavigation from './NativeNavigation'
import WebNavigation from './WebNavigation'
import Login from './screens/auth/Login'
import { GlobalContext } from './context/GlobalContext'

function Main() {
    const { user, setUser } = useContext(GlobalContext);
    // console.log(user);

    if (!user) {
        return (
            <Login />
        )
    }
    return (

        <View style={{ flex: 1 }}>
            {Platform.OS == 'web' ? <WebNavigation /> :
                <NativeNavigation />

            }
        </View>

    )
}

export default Main

