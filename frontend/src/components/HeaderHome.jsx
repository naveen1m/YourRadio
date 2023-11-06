
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, VStack, Text, Center, Box, Input, InputField, Image, Avatar, AvatarFallbackText, AvatarImage, Heading, HStack } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native';


const HeaderHome = () => {
    const navigation = useNavigation();
    return (
        <>
            <View flexDirection='row' >
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
                    <Avatar flex={1} bgColor='$amber600' size='xl' borderRadius='$sm' borderWidth={2} borderColor='#00F788' >
                        <AvatarFallbackText>Ronald Richards</AvatarFallbackText>
                        <AvatarImage
                            source={{
                                uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                            }}
                            borderRadius='$sm'
                        />
                    </Avatar>
                </TouchableOpacity>


                <View flex={3} flexDirection='row' marginHorizontal={5}>
                    <View flex={3} marginTop={6} height={50} backgroundColor='#02CCFE' borderRadius='$full' width={'60%'}>
                        <Center>
                            <Input width={"90%"} alignSelf='center' alignContent='center' alignItems='center' marginTop={7} borderWidth={0} borderColor='$transparent'>
                                <InputField placeholder="Title of your podcast ……" />
                            </Input>
                        </Center>

                        <VStack marginBottom={3} marginTop={12} borderBottomWidth={3} borderBottomColor='$blue400' />
                    </View>

                    <View flex={1}  >
                        <Center>
                            <TouchableOpacity >
                                <Image
                                    size="sm"
                                    borderRadius="$full"
                                    source={require('../../assets/recordaudio512.png')}
                                    alt='play-pause'
                                />
                            </TouchableOpacity>
                            <Text fontSize="$xs" >tap to record</Text>
                        </Center>
                    </View>
                </View>
            </View>

            <View flexDirection='row' marginHorizontal={2} marginTop={4} >
                <View flex={1} marginRight={12} backgroundColor='$yellow300'>
                    <Center>
                        <Heading>Treanding today</Heading>
                    </Center>
                    <VStack marginBottom={3} marginTop={1} borderBottomWidth={3} borderBottomColor='$black' />
                    <VStack marginLeft={15}>
                        <Text fontSize='$xs'>3.00 AM yourRadio by <Text fontSize='$xs' color='$blue500'>by ALLEN COOPER</Text></Text>
                        <Text fontSize='$xs'>3.00 AM yourRadio by <Text fontSize='$xs' color='$blue500'>by ALLEN COOPER</Text></Text>
                        <Text fontSize='$xs'>3.00 AM yourRadio by <Text fontSize='$xs' color='$blue500'>by ALLEN COOPER</Text></Text>


                    </VStack>

                </View>
                <View flex={1} backgroundColor='$red300' >
                    <Center>
                        <Heading>Podcasts</Heading>
                    </Center>
                    <VStack marginBottom={3} marginTop={1} borderBottomWidth={3} borderBottomColor='$black' />

                    <VStack marginLeft={15}>
                        <Text fontSize='$xs'>Joe Rogan’s dailies</Text>
                        <Text fontSize='$xs'>Joe Rogan’s dailies</Text>

                        <Text fontSize='$xs'>Joe Rogan’s dailies</Text>

                    </VStack>
                </View>
            </View>
        </>
    )
}

export default HeaderHome