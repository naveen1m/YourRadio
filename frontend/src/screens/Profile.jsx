import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Center, Image, Input, InputField, View } from '@gluestack-ui/themed';
import { Text, Box, Avatar, AvatarBadge, AvatarFallbackText, AvatarImage, VStack, HStack, Heading } from '@gluestack-ui/themed';
import { ScrollView, TouchableOpacity } from 'react-native';
import ViewPost from '../components/ViewPost';
import { GlobalContext } from '../context/GlobalContext';
import axiosInst from '../config/axiosInstance';
import PostModal from '../components/PostModal';
import SP_ActionSheet from '../components/SP_ActionSheet';
function Profile({ navigation }) {
    const { user, setUser, setShowModal, showActionsheet, setShowActionsheet } = useContext(GlobalContext);
    console.log('profile user', user)

    const [userData, setUserData] = useState('');
    // console.log(user.uid)

    // const response = await axiosInst.get(`/user/get/${user.uid}`)
    const handleSP = () => {
        setShowActionsheet(true);
    }
    useEffect(() => {
        axiosInst.get(`/user/get/${user.uid}`).then(value => {
            // console.log(value.data);
            setUser(value.data);
        })
    }, [])
    console.log(userData)
    const { name, email, about, tagline, followers, following, posts, userName } = user;

    // console.log(name, about, tagline, email);
    const handleAudioRecord = () => {
        setShowModal(true)
    }
    return (
        <Fragment>
            <ScrollView>
                <View>
                    <Box mx={2} my={2}>

                        <Box justifyContent='space-between' flexDirection='row' marginTop={2} >

                            <View backgroundColor='#02CCFE' flexDirection='row' flex={3} marginTop={6} height={80}  >
                                <View flexDirection='coloumn' >
                                    <Heading underline={true} size={"$xl"} bold={true} paddingLeft={7}>{name ?? "Tasdid Shitab"}</Heading>
                                    <Text paddingLeft={3}>~ {tagline ?? "Soccer lover with no regrets"}</Text>
                                </View>
                            </View>
                            <Avatar bgColor='$amber600' size='xl' borderRadius='$sm' borderWidth={2} borderColor='#00F788' >
                                <AvatarFallbackText>{name ?? "Tasdid Shitab"}</AvatarFallbackText>
                                <AvatarImage
                                    source={{
                                        uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                                    }}
                                    size='xl' borderRadius='$sm'
                                />
                            </Avatar>

                        </Box>
                        <HStack>

                            <Text fontWeight='$bold' >5{posts ?? "10"}</Text>
                            <Text fontWeight='$bold' marginRight={8} > posts  •</Text>

                            <Text fontWeight='$bold'>15{followers ?? "10"}</Text>
                            <Text fontWeight='$bold' marginRight={8}> follower  •</Text>

                            <Text fontWeight='$bold'>2{following ?? "10"}</Text>
                            <Text fontWeight='$bold'> following</Text>

                        </HStack>
                        <VStack marginBottom={3} marginTop={4} borderBottomWidth={5} borderBottomColor='$black' />

                        <Text>
                            {about ?? `Studies in Military Academia of Science & Technology
                            Studied in St.Mary School & College
                            Went to Daniel Engineering College`}
                        </Text>
                        <VStack marginBottom={3} marginTop={4} borderBottomWidth={2} borderBottomColor='$black' borderStyle='dotted' />

                        <Text>Works at Sunday -Morning</Text>

                    </Box>
                    <VStack marginBottom={3} marginTop={4} borderBottomWidth={5} borderBottomColor='$black' />
                    <Box>
                        <HStack backgroundColor='$yellow400' borderRadius={10} paddingHorizontal={2} justifyContent='space-between' >
                            <TouchableOpacity>
                                <Text fontSize={13}>Edit Profile</Text>

                            </TouchableOpacity>
                            <Text>•</Text>

                            <TouchableOpacity>
                                <Text fontSize={13}>About</Text>
                            </TouchableOpacity>
                            <Text>•</Text>

                            <TouchableOpacity>
                                <Text fontSize={13}>Activity Log</Text>
                            </TouchableOpacity>
                            <Text>•</Text>
                            <TouchableOpacity onPress={handleSP}>
                                <Text fontSize={13}>Settings & Privacy </Text>
                            </TouchableOpacity>

                        </HStack>
                    </Box>
                    <SP_ActionSheet />

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
                                <TouchableOpacity onPress={handleAudioRecord}>
                                    <Image
                                        size="sm"
                                        borderRadius="$full"
                                        source={require('../../assets/TaptoRecord.png')}
                                        alt='play-pause'
                                    />
                                </TouchableOpacity>
                                <Text fontSize="$xs" >tap to record</Text>
                                <PostModal />
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
                                <TouchableOpacity onPress={() => navigation.navigate('Podcast')} >
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
