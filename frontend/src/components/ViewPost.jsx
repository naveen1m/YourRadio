import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Heading, Text, Box, Image, Center } from '@gluestack-ui/themed'

const ViewPost = () => {
    return (
        <View>
            <Box w="$auto" marginLeft={1} marginRight={1} paddingVertical={2} paddingBottom={6} marginBottom={3} bg="$blue300"  >
                <Heading underline={true} size={"$xl"} bold={true} paddingLeft={7} >Traffic Jam</Heading>
                <View flexDirection='row' >
                    <View flex={3} paddingLeft={3}>
                        <Text>Oh God! Today was trash. I didn t expect to be home
                            nearly. So much pain it was.</Text>
                        <Text alignItems='flex-end' alignContent='flex-end' alignSelf='flex-end' color='$green800' >~ Dom Shiitic</Text>

                    </View>
                    <View flex={1}  >
                        <Center>
                            <TouchableOpacity >
                                <Image
                                    size="sm"
                                    borderRadius="$full"
                                    source={require('../../assets/playpause512.png')}
                                    alt='play-pause'
                                />
                            </TouchableOpacity>
                        </Center>
                    </View>
                </View>
            </Box>
        </View>
    )
}

export default ViewPost