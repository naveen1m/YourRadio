import React from 'react'
import { View } from '@gluestack-ui/themed'
import { Text, Box } from '@gluestack-ui/themed'
function Profile() {
    return (
        <View>
            <Box width="100%" height="100%" justifyContent="center" alignItems="center" bg="$green500" >
                <Text color="$green" fontWeight="$bold" fontSize={"$2xl"} bg="$white" padding="$1.5" paddingTop="$10" >Profile Page</Text>
            </Box>
        </View>
    )
}

export default Profile
