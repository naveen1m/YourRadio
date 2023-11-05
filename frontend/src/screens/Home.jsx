import React, { Fragment, useContext, useState } from 'react'
import { View, StatusBar, TouchableOpacity } from 'react-native'
import { VStack, Box, ScrollView, Text, Fab, FabLabel, FabIcon, Center } from '@gluestack-ui/themed'
import PostModal from '../components/PostModal';
import { createStackNavigator } from '@react-navigation/stack';
import Logout from './auth/Logout';
import DeleteUser from './auth/DeleteUser';
import axiosInst from '../config/axiosInstance.js';
import RegisterFormModal from './auth/RegisterFormModal';
import { GlobalContext } from '../context/GlobalContext';

function Home({ route }) {
    // const Stack = createStackNavigator();
    const [isModalVisible, setIsModalVisible] = useState(false);  // need to have context api
    const { showRegisterModal, setShowRegisterModal } = useContext(GlobalContext);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleAxios = async () => {

        axiosInst.get()
            .then(response => {
                console.log('backend response: ', response.data);
            })
            .catch(error => {
                console.error('home axios Error:', error.message);
            })

    }
    return (
        <Fragment>

            <ScrollView>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" />
                <View>

                    {showRegisterModal && <RegisterFormModal />}
                    <TouchableOpacity onPress={async () => {
                        await handleAxios()
                    }} style={{ backgroundColor: "black" }} ><Text color='$blue400' >Axios Test</Text></TouchableOpacity>
                    <Logout />
                    <DeleteUser />
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
                    {/* <VStack space="md">
                        <Box w="$20" h="$20" bg="$blue300" />
                        <Box w="$20" h="$20" bg="$blue400" />
                        <Box w="$20" h="$20" bg="$blue500" />
                    </VStack> */}

                    {/* <Box
                        h={360}
                        w={320}
                        bg="$green"
                        sx={{
                            "_dark": {
                                bg: "$backgroundDark900"
                            }
                        }}
                        borderRadius="$sm"
                    > */}

                    {/* </Box> */}

                </View>
            </ScrollView>

            <Fab size="lg" placement="bottom right" marginBottom={'$10'}>
                {/* <FabIcon mr="$1" /> */}
                <TouchableOpacity onPress={toggleModal}>
                    <Text color='$white'>+ Add post</Text>
                </TouchableOpacity>

                {isModalVisible && <PostModal modal={true} />}
            </Fab>





        </Fragment>
    )
}

export default Home
