import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Heading, Avatar, Box, Text, Image, AvatarFallbackText, AvatarImage, Center, Textarea, TextareaInput, Input, InputField } from '@gluestack-ui/themed'
import { ScrollView } from 'react-native-gesture-handler'

import { GlobalContext } from '../context/GlobalContext'
import PostModal from '../components/PostModal'

function CreatePost() {
    const { setShowModal } = useContext(GlobalContext);

    const handleCreatePost = () => {
        console.log('post created...')
    }
    const handleAudioRecord = () => {
        console.log('audio recording ...');
        setShowModal(true);
    }
    return (
        <View>
            <ScrollView>
                <Box justifyContent='space-between' flexDirection='row' marginTop={35} >


                    <Avatar bgColor='$amber600' size='xl' borderRadius='$sm' borderWidth={2} borderColor='#00F788' >
                        <AvatarFallbackText>Ronald Richards</AvatarFallbackText>
                        <AvatarImage
                            source={{
                                uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                            }}
                            size='xl' borderRadius='$sm'
                        />
                    </Avatar>

                    <View backgroundColor='#02CCFE' flexDirection='row' flex={3} marginTop={6} height={80}  >
                        <View flexDirection='coloumn' justifyContent='center' >
                            <Center>
                                <Heading paddingHorizontal={4} fontSize={18} >Express Your moments … .. .</Heading>
                            </Center>
                        </View>
                    </View>
                </Box>

                <View backgroundColor='$yellow200' borderWidth={4} borderColor='$black' margin={7} marginTop={49} >
                    <Textarea borderWidth={0} borderColor='$transparent'>
                        <TextareaInput
                            multiline
                            numberOfLines={4}
                            maxLength={100}
                            placeholder='Describe here….. … .. .'
                        />

                    </Textarea>
                </View>
                <View flexDirection='row' marginTop={42}>
                    <View flex={3} alignItems='center' justifyContent='center' backgroundColor='$blue400' borderRadius='$xl'>
                        <Text fontSize='$xl'>Tap here to record</Text>
                    </View>

                    <View alignContent='flex-end' flex={1}>
                        <TouchableOpacity onPress={handleAudioRecord} >
                            <Image
                                size="sm"
                                borderRadius="$full"
                                source={require('../../assets/TaptoRecord.png')}
                                alt='play-pause'
                            />
                        </TouchableOpacity>
                        <PostModal />

                    </View>
                </View>
                <View alignItems='center' marginTop={22} marginHorizontal={10} paddingHorizontal={8} justifyContent='center' backgroundColor='$green400' borderRadius='$xl' height={70} >
                    <Input width={"90%"} alignSelf='center' justifyContent='center' alignContent='center' alignItems='center' marginTop={0} borderWidth={0} borderColor='$transparent'>
                        <InputField justifyContent='center' placeholder="Title of your moment “………………………………..…”" />
                    </Input>
                </View>

                <Center marginTop={48}>
                    <TouchableOpacity onPress={handleCreatePost} >
                        <Image
                            size="sm"
                            borderRadius="$xl"
                            source={require('../../assets/createpost512.png')}
                            alt='play-pause'
                        />
                    </TouchableOpacity>
                    <Heading>Create Post</Heading>
                </Center>
            </ScrollView>
        </View>
    )
}

export default CreatePost
