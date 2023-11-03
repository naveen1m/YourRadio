import { View, Text } from '@gluestack-ui/themed'
import React from 'react'
import { StatusBar } from 'react-native'

function LoginHeader() {
    return (
        <>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />

            <View marginTop={10} padding={5}>
                <Text color='$green' fontWeight='$bold'>Signin with google using react native expo and firebase</Text>
            </View>
        </>
    )
}

export default LoginHeader
