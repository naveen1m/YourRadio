import React from 'react'
import { Platform, View } from 'react-native'
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import NativeNavigation from './NativeNavigation'
import WebNavigation from './WebNavigation'
function Main() {
    return (
        <GluestackUIProvider config={config}>

            <View style={{ flex: 1 }}>
                {Platform.OS == 'web' ? <WebNavigation /> :

                    <View>
                        <Box width="100%" justifyContent="center" alignItems="center" bg="$coolGray600" >
                            <Text color="$whitesmoke" fontWeight="$bold" fontSize={"$2xl"} width="100%" paddingLeft="$1.5" paddingTop="$10"  >Your Radio</Text>
                        </Box>
                        <NativeNavigation />
                    </View>
                }
            </View>
        </GluestackUIProvider>
    )
}

export default Main
