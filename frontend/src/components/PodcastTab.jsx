import { View, VStack, Box, ScrollView, Text, Center } from '@gluestack-ui/themed'
import React, { Fragment } from 'react'


function PodcastTab() {
    return (
        <Fragment>
            <ScrollView>

                <Box h='100%' marginTop={4} justifyContent="center">
                    <VStack space="sm" reversed={false} >
                        <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$green300"  >
                            <Center>
                                <Text marginTop="$5" >Podcast 1</Text>
                            </Center>
                        </Box>
                        <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$green300"  >
                            <Center>
                                <Text marginTop="$5" >Podcast 2</Text>
                            </Center>
                        </Box>
                        <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$green300"  >
                            <Center>
                                <Text marginTop="$5" >Podcast 3</Text>
                            </Center>
                        </Box>
                        <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$green300"  >
                            <Center>
                                <Text marginTop="$5" >Podcast 4</Text>
                            </Center>
                        </Box>
                        <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$green300"  >
                            <Center>
                                <Text marginTop="$5" >Podcast 5</Text>
                            </Center>
                        </Box>
                        <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$green300"  >
                            <Center>
                                <Text marginTop="$5" >Podcast 6</Text>
                            </Center>
                        </Box>
                        <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$green400"  >
                            <Center>
                                <Text marginTop="$5" >Podcast 7</Text>
                            </Center>
                        </Box>
                        <Box w="$auto" marginLeft={"$2"} marginRight={"$2"} h="$20" bg="$green500"  >
                            <Center>
                                <Text marginTop="$5" >Podcast 8</Text>
                            </Center>
                        </Box>


                    </VStack>
                </Box>

            </ScrollView>
        </Fragment>
    )
}

export default PodcastTab
