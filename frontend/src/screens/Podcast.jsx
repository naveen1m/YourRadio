import React, { Fragment } from 'react'
// import { View } from 'react-native'
import { ScrollView, View, Heading, Box, Text, HStack, VStack, Fab, FabLabel, FabIcon, TouchableOpacity, Button } from '@gluestack-ui/themed'

function Podcast() {
    return (
        <Fragment>
            <View height="100%">
                <View>
                    <Heading fontWeight='$bold' my="$2" marginLeft="$1">Featured</Heading>
                    <Box>
                        <ScrollView horizontal>
                            <HStack space="xs" paddingHorizontal={7}>
                                <Box w="$40" h="$40" bg="$blue300" />
                                <Box w="$40" h="$40" bg="$blue400" />
                                <Box w="$40" h="$40" bg="$blue500" />
                                <Box w="$40" h="$40" bg="$blue300" />
                                <Box w="$40" h="$40" bg="$blue400" />
                                <Box w="$40" h="$40" bg="$blue500" />
                                <Box w="$40" h="$40" bg="$blue500" />
                                <Box w="$40" h="$40" bg="$blue400" />
                                <Box w="$40" h="$40" bg="$blue500" />
                                <Box w="$40" h="$40" bg="$blue500" />
                            </HStack>
                        </ScrollView>
                    </Box>
                    <Heading fontWeight='$bold' my="$2" marginLeft="$1">Categories</Heading>
                    <ScrollView>
                        <VStack space="xs" alignItems='center'>
                            <Box w="90%" h="$20" bg="$blue300" />
                            <Box w="90%" h="$20" bg="$blue400" />
                            <Box w="90%" h="$20" bg="$blue500" />
                            <Box w="90%" h="$20" bg="$blue300" />
                            <Box w="90%" h="$20" bg="$blue400" />
                            <Box w="90%" h="$20" bg="$blue500" />
                            <Box w="90%" h="$20" bg="$blue500" />
                            <Box w="90%" h="$20" bg="$blue400" />
                            <Box w="90%" h="$20" bg="$blue500" />
                            <Box w="90%" h="$20" bg="$blue500" />
                        </VStack>
                    </ScrollView>

                </View>


                <Fab size="md" placement="bottom right" marginBottom={'$10'} isHovered={false} isDisabled={false} isPressed={false} >
                    {/* <FabIcon as={AddIcon} mr="$1"/> */}
                    <FabLabel color='$white'>+ Podcast</FabLabel>
                </Fab>




            </View>
        </Fragment>
    )
}

export default Podcast
