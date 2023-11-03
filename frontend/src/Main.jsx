import React, { useState, useEffect, useContext } from 'react'
import { Platform, View } from 'react-native'
import { Text } from "@gluestack-ui/themed"
import NativeNavigation from './NativeNavigation'
import WebNavigation from './WebNavigation'
import { UserContext } from './context/UserContext'

import Login from './screens/auth/Login'

function Main() {
    const { user, setUser } = useContext(UserContext);
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

