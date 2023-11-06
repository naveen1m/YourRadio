import { TouchableOpacity } from 'react-native'
import React from 'react'
import { View, Text, Heading, Input, InputField, Box, Center, Image, Button, ButtonText } from '@gluestack-ui/themed'
import { ScrollView } from 'react-native-gesture-handler'

const CreatePodcast = () => {
    return (
        <View>
            <Heading>PODCAST… .. .</Heading>
            <ScrollView >
                <View alignItems='center' marginTop={22} marginHorizontal={10} paddingHorizontal={8} justifyContent='center' backgroundColor='$green400' borderRadius='$xl' height={70} >
                    <Input width={"90%"} alignSelf='center' justifyContent='center' alignContent='center' alignItems='center' marginTop={0} borderWidth={0} borderColor='$transparent'>
                        <InputField justifyContent='center' placeholder="Title of your podcast ……" />
                    </Input>
                </View>
                <Box flex={1} flexDirection='row' alignContent='stretch' justifyContent='space-evenly' flexWrap='wrap' width='$full'  >


                    <Center margin={18}>
                        <Image
                            size="md"
                            borderRadius="$full"
                            source={{
                                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                            }}
                        />
                        <Text>Speaker name</Text>
                    </Center>
                    <Center margin={18}>
                        <Image
                            size="md"
                            borderRadius="$full"
                            source={{
                                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                            }}
                        />
                        <Text>Speaker name</Text>
                    </Center>

                    <Center margin={18}>
                        <Image
                            size="md"
                            borderRadius="$full"
                            source={{
                                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                            }}
                        />
                        <Text>SSpeaker name</Text>
                    </Center>
                    <Center margin={18}>
                        <Image
                            size="md"
                            borderRadius="$full"
                            source={{
                                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                            }}
                        />
                        <Text>Speaker name</Text>
                    </Center>
                    <Center margin={18}>
                        <Image
                            size="md"
                            borderRadius="$full"
                            source={{
                                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                            }}
                        />
                        <Text>Speaker name</Text>
                    </Center>

                    <Center margin={18}>
                        <TouchableOpacity>
                            <Image
                                size="md"
                                borderRadius="$full"
                                backgroundColor='$amber600'
                                source={require('../../assets/addspeaker512.png')}
                            />
                        </TouchableOpacity>

                        <Text>Add speaker</Text>
                    </Center>
                </Box>
                <View flexDirection='row' justifyContent='space-evenly' marginTop={54} marginBottom={10}>

                    <Button
                        size="md"
                        variant="solid"
                        action="negative"
                        isDisabled={false}
                        isFocusVisible={false}
                        borderRadius='$xl'

                    >
                        <ButtonText>Leave Audio </ButtonText>
                    </Button>

                    <Button
                        size="md"
                        variant="solid"
                        action="positive"
                        isDisabled={false}
                        isFocusVisible={false}
                        borderRadius='$xl'
                    >
                        <ButtonText>Upload </ButtonText>
                    </Button>

                </View>
            </ScrollView>
        </View>
    )
}

export default CreatePodcast