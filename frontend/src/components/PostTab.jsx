import { View, VStack, Box, ScrollView, Text, Center } from '@gluestack-ui/themed'
import React, { Fragment } from 'react'


function PostTab() {
    return (
        <Fragment>
            <View height='100%' flex={1}>
                <ScrollView>

                    <Box h='100%' marginTop={4} justifyContent="center">
                        <VStack space="sm" reversed={false} >
                            <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$blue300"  >
                                <Center>
                                    <Text marginTop="$5" >Post 1</Text>
                                </Center>
                            </Box>
                            <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$blue300"  >
                                <Center>
                                    <Text marginTop="$5" >Post 2</Text>
                                </Center>
                            </Box>
                            <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$blue300"  >
                                <Center>
                                    <Text marginTop="$5" >Post 3</Text>
                                </Center>
                            </Box>
                            <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$blue300"  >
                                <Center>
                                    <Text marginTop="$5" >Post 4</Text>
                                </Center>
                            </Box>
                            <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$blue300"  >
                                <Center>
                                    <Text marginTop="$5" >Post 5</Text>
                                </Center>
                            </Box>
                            <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$blue300"  >
                                <Center>
                                    <Text marginTop="$5" >Post 6</Text>
                                </Center>
                            </Box>
                            <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$blue400"  >
                                <Center>
                                    <Text marginTop="$5" >Post 7</Text>
                                </Center>
                            </Box>
                            <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$blue500"  >
                                <Center>
                                    <Text marginTop="$5" >Post 8</Text>
                                </Center>
                            </Box>


                        </VStack>
                    </Box>
                </ScrollView>
            </View>

        </Fragment>
    )
}

export default PostTab
