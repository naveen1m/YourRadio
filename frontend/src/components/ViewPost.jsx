import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Heading, Text, Box, Image } from '@gluestack-ui/themed'

const ViewPost = () => {
    return (
        <View>
            <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} bg="$blue300"  >
                <Heading underline={true} size={"$xl"} bold={true} >Traffic Jam</Heading>
                <View  >
                    <Text>Oh God! Today was trash. I didn t expect to be home
                        nearly. So much pain it was.
                    </Text>
                    <Text alignItems='flex-end' alignContent='flex-end' alignSelf='flex-end' >~ Dom Shiitic</Text>


                    <View alignItems='flex-end' alignContent='flex-end' alignSelf='flex-end'>
                        <TouchableOpacity >
                            <Image
                                size="sm"
                                borderRadius="$full"
                                source={require('../../assets/playpause512.png')}
                                alt='play-pause'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Box>
        </View>
    )
}

export default ViewPost