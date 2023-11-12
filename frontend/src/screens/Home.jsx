import React, { Fragment, useContext, useState } from 'react'
import { View, StatusBar, TouchableOpacity } from 'react-native'
import { VStack, Box, ScrollView, Text, Fab, FabLabel, FabIcon, Center, Image, Heading, FlatList } from '@gluestack-ui/themed'
import PostModal from '../components/PostModal';
import Logout from './auth/Logout';
import DeleteUser from './auth/DeleteUser';
import axiosInst from '../config/axiosInstance.js';
import RegisterFormModal from './auth/RegisterFormModal';
import { GlobalContext } from '../context/GlobalContext';
import ViewPost from '../components/ViewPost';
import HeaderHome from '../components/HeaderHome';

const data = [
    {
        "title": "Morning Hike",
        "description": "Woke up early and went for a morning hike. The sunrise at the mountain peak was breathtaking.",
        "author": "Sarah Johnson"
    },
    {
        "title": "Movie Night",
        "description": "Had an awesome movie night with friends.",
        "author": "Alex Smith"
    },
    {
        "title": "Beach Day",
        "description": "Spent the day at the beach.",
        "author": "Emily Williams"
    },
    {
        "title": "Birthday Celebration",
        "description": "Celebrated my birthday with loved ones. It was a day filled with laughter and great food.",
        "author": "Mark Davis"
    },
    {
        "title": "Rainy Day",
        "description": "Rainy day at home with a good book and a hot cup of tea. Perfect relaxation.",
        "author": "Olivia Martinez"
    },
    {
        "title": "Road Trip Adventure",
        "description": "Embarked on a road trip with friends. We explored new places, tried local food, and made unforgettable memories.",
        "author": "Chris Turner"
    },
    {
        "title": "Cooking Experiment",
        "description": "Tried a new recipe for the first time. It was a bit challenging, but the end result was delicious.",
        "author": "Jessica Lee"
    },
    {
        "title": "Gym Workout",
        "description": "Early morning gym session to kickstart the day. Feeling energized and motivated.",
        "author": "Michael Johnson"
    },
    {
        "title": "Art Exhibition",
        "description": "Visited an art exhibition and was inspired by the creativity of the artists. Art truly knows no bounds.",
        "author": "Lily Parker"
    },
    {
        "title": "Gardening Bliss",
        "description": "Spent the weekend gardening, planting flowers and vegetables. Nature has a calming effect on the soul.",
        "author": "Daniel Miller"
    }
]


function Home({ route }) {
    const userData = route?.params;
    const [isModalVisible, setIsModalVisible] = useState(false);  // need to have context api
    const { showRegisterModal, setShowRegisterModal } = useContext(GlobalContext);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };



    const PostList = ({ data }) => (

        <Box w="$auto" marginLeft={1} marginRight={1} paddingVertical={2} paddingBottom={1} marginBottom={3} bg="$blue300"  >
            <Heading underline={true} size={"$md"} bold={true} paddingLeft={7} >{data.title}</Heading>
            <View flexDirection='row' >
                <View flex={3} paddingLeft={3}>
                    <Text width='100%' size='md' fontSize={13} >{data.description}</Text>
                    <Text alignItems='flex-end' alignContent='flex-end' marginTop={0} paddingTop={0} alignSelf='flex-end' color='$green800' >~ {data.author}</Text>

                </View>
                <View flex={1}  >
                    <Center>
                        <TouchableOpacity >
                            <Image
                                size="xs"
                                borderRadius="$full"
                                source={require('../../assets/Play-Pause.png')}
                                alt='play-pause'
                            />
                        </TouchableOpacity>
                    </Center>
                </View>
            </View>
        </Box>

    )
    return (
        <Fragment>

            <ScrollView>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" />

                <View>
                    {showRegisterModal && <RegisterFormModal userData={userData} />}

                    {/* <Logout />
                    <DeleteUser /> */}

                    <HeaderHome />

                    <VStack backgroundColor='$yellow400' marginBottom={3} marginTop={9} borderLeftWidth={3} borderTopWidth={3} borderColor='#A3AAAF'>
                        <TouchableOpacity>
                            <Center>

                                <Heading>Play YourRadio</Heading>
                            </Center>
                        </TouchableOpacity>

                    </VStack>



                    <Heading size={"$md"} bold={true} paddingLeft={5} marginTop={0}  >NEWS FEED … .. .</Heading>
                    <VStack marginBottom={3} marginTop={0} borderBottomWidth={3} borderBottomColor='$black' />

                    <Box h='100%' marginTop={1} justifyContent="center">



                        <FlatList
                            data={data}
                            renderItem={({ item }) => <PostList data={item} />}
                            keyExtractor={(item) => item.title}
                        />

                    </Box>

                </View>
            </ScrollView>

            {/* <Fab size="lg" placement="bottom right" marginBottom={'$10'}>
                <TouchableOpacity onPress={toggleModal}>
                    <Text color='$white'>+ Add post</Text>
                </TouchableOpacity>

                {isModalVisible && <PostModal modal={true} />}
            </Fab> */}





        </Fragment>
    )
}

export default Home
