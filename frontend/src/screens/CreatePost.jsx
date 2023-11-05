import React from 'react'
import { View } from 'react-native'
import { Box, Text } from '@gluestack-ui/themed'

function CreatePost() {
    return (
        <View>
            <Box width="100%" height="100%" justifyContent="center" alignItems="center" bg="$green500" >
                <Text color="$green" fontWeight="$bold" fontSize={"$2xl"} bg="$white" padding="$1.5" paddingTop="$10" >Post page</Text>
            </Box>
        </View>
    )
}

export default CreatePost
