import { View, Text, Button, FlatList, Box, HStack, Avatar, AvatarImage, VStack, Center } from '@gluestack-ui/themed'
import React from 'react'
import { TouchableOpacity } from 'react-native';

const Messages = [
    {
        id: '1',
        userName: 'Jenny Doe',
        userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        messageTime: '4 mins ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '2',
        userName: 'Simmons',
        userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        messageTime: '2 hours ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '3',
        userName: 'Ken William',
        userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',

        messageTime: '1 hours ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '4',
        userName: 'Selina Paul',
        userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        messageTime: '1 day ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '5',
        userName: 'Christy Alex',
        userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',

        messageTime: '2 days ago',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
    },
];
function ChatList({ navigation }) {
    const navigateToChatDetails = (user) => {
        navigation.navigate('ChatDetails', { name: user.userName, message: user.messageText });
    };

    return (
        <View>
            <Center>
                <Text>Messages</Text>
            </Center>

            <FlatList
                data={Messages}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Box

                        sx={{

                            '@base': {
                                pl: 0,
                                pr: 0,
                            },
                            '@sm': {
                                pl: '$4',
                                pr: '$5',
                            },
                        }}
                        py="$0.5"

                    >
                        <HStack space="md" justifyContent="flex-start" backgroundColor='$white'
                            padding={7} borderRadius={10}
                        >
                            <Avatar size="md">
                                <AvatarImage source={{ uri: item.userImg }} />
                            </Avatar>
                            <Box

                                sx={{
                                    _web: { width: "90%" },
                                    _ios: { width: "80%" },
                                    _android: { width: "80%" }
                                }}
                                flexDirection='row' justifyContent='space-between' >

                                <TouchableOpacity
                                    onPress={() => navigateToChatDetails(item)}
                                >
                                    <Box sx={{
                                        _web: { width: "90%" },
                                        _ios: { width: "80%" },
                                        _android: { maxWidth: "80%" }
                                    }} flexDirection='col' flexWrap='wrap' >
                                        <VStack>
                                            <Text
                                                color="$coolGray800"
                                                fontWeight="$bold"
                                                sx={{
                                                    '_dark': {
                                                        color: '$warmGray100',
                                                    },
                                                }}
                                            >
                                                {item.userName}
                                            </Text>




                                            <Text
                                                color="$coolGray600"
                                                flexWrap='wrap'
                                                isTruncated={true}
                                                paddingLeft={3}
                                                sx={{
                                                    '_dark': {
                                                        color: '$warmGray200',
                                                    },
                                                }}
                                            >
                                                {item.messageText}
                                            </Text>

                                        </VStack>
                                    </Box>
                                </TouchableOpacity>

                                <Box>
                                    <Text
                                        fontSize="$xs"
                                        color="$coolGray800"
                                        alignSelf="flex-end"
                                        paddingRight="$2"
                                        paddingBottom={0}
                                        marginBottom={0}
                                        sx={{
                                            '_dark': {
                                                color: '$warmGray100',
                                            },
                                        }}
                                    >
                                        {item.messageTime}
                                    </Text>
                                </Box>
                            </Box>
                        </HStack>
                    </Box>
                )}

            />


        </View>
    )
}

export default ChatList
