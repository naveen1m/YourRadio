import React, { Fragment } from 'react';
import { Center, Image, Input, InputField, View } from '@gluestack-ui/themed';
import { Text, Box, Avatar, AvatarBadge, AvatarFallbackText, AvatarImage, VStack, HStack, Heading } from '@gluestack-ui/themed';
import HorizontalLine from '../components/HorizontalLine';
import PostPodcastTab from '../components/PostPodcastTab';
import { ScrollView, TouchableOpacity } from 'react-native';
import ViewPost from '../components/ViewPost';
function Profile() {
    return (
        <Fragment>
            <ScrollView>
                <View>
                    <Box mx={2} my={2}>

                        <Box justifyContent='space-between' flexDirection='row' marginTop={2} >

                            <View backgroundColor='#02CCFE' flexDirection='row' flex={3} marginTop={6} height={80}  >
                                <View flexDirection='coloumn' >
                                    <Heading underline={true} size={"$xl"} bold={true} paddingLeft={7}>Tasdid Shitab</Heading>
                                    <Text paddingLeft={3}>~ Soccer lover with no regrets</Text>
                                </View>
                            </View>
                            <Avatar bgColor='$amber600' size='xl' borderRadius='$sm' borderWidth={2} borderColor='#00F788' >
                                <AvatarFallbackText>Ronald Richards</AvatarFallbackText>
                                <AvatarImage
                                    source={{
                                        uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                                    }}
                                    size='xl' borderRadius='$sm'
                                />
                            </Avatar>

                        </Box>
                        <HStack>
                            <VStack mx={7} alignItems='center'>
                                <Text>10</Text>
                                <Text>Post</Text>
                            </VStack>

                            <VStack mx={7} alignItems='center'>
                                <Text>50</Text>
                                <Text>Follower</Text>
                            </VStack>
                            <VStack mx={7} alignItems='center'>
                                <Text>90</Text>
                                <Text>Following</Text>
                            </VStack>
                        </HStack>
                        <VStack marginBottom={3} marginTop={4} borderBottomWidth={5} borderBottomColor='$black' />

                        <Text>
                            Studies in Military Academia of Science & Technology
                            Studied in St.Mary School & College
                            Went to Daniel Engineering College
                        </Text>
                        <VStack marginBottom={3} marginTop={4} borderBottomWidth={2} borderBottomColor='$black' borderStyle='dotted' />

                        <Text>Works at Sunday -Morning</Text>

                    </Box>
                    <VStack marginBottom={3} marginTop={4} borderBottomWidth={5} borderBottomColor='$black' />
                    <View flexDirection='row' marginHorizontal={5}>
                        <View flex={3} marginTop={6} backgroundColor='#02CCFE' borderRadius='$full' width={'60%'} height={70}>
                            <Center>
                                <Input width={"90%"} alignSelf='center' alignContent='center' alignItems='center' marginTop={10} borderWidth={0} borderColor='$transparent'>
                                    <InputField placeholder="Title of your moment ……" />
                                </Input>
                            </Center>

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
                    <VStack marginBottom={3} marginTop={4} borderBottomWidth={5} borderBottomColor='$black' />
                    <Heading marginLeft={18}>START A PODCAST … .. .</Heading>
                    <View flexDirection='row' marginHorizontal={5}>
                        <View flex={3} marginTop={6} height={60} backgroundColor='#02CCFE' borderRadius='$full' width={'60%'}>
                            <Center>
                                <Input width={"90%"} alignSelf='center' alignContent='center' alignItems='center' marginTop={10} borderWidth={0} borderColor='$transparent'>
                                    <InputField placeholder="Title of your podcast ……" />
                                </Input>
                            </Center>

                            <VStack marginBottom={3} marginTop={19} borderBottomWidth={5} borderBottomColor='$blue400' borderStyle='dotted' />
                        </View>

                        <View flex={1}  >
                            <Center>
                                <TouchableOpacity >
                                    <Image
                                        size="sm"
                                        borderRadius="$full"
                                        source={require('../../assets/podcast512.png')}
                                        alt='play-pause'
                                    />
                                </TouchableOpacity>
                                <Text fontSize="$xs" >tap to record</Text>
                            </Center>
                        </View>
                    </View>
                    <VStack marginBottom={3} marginTop={4} borderBottomWidth={5} borderBottomColor='$black' />

                    <Box>
                        <Heading size={"$xl"} bold={true} paddingLeft={7}>Your Posts … .. .</Heading>

                        <ViewPost />
                        <ViewPost />
                        <ViewPost />


                    </Box>
                </View>
            </ScrollView>
        </Fragment>
    );
}

export default Profile;
