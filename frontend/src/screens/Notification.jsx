import React from 'react'
import { ScrollView, FlatList, View, Heading, Box, Text, HStack, VStack, Avatar, AvatarImage } from '@gluestack-ui/themed';

const notificationsData = [
    {
        id: 1,
        avatarUrl: 'https://example.com/user1-avatar.jpg',
        userName: 'John Doe',
        message: 'liked your post.',
        timestamp: '5 minutes ago',
        type: 'like',
        postId: 123,
    },
    {
        id: 2,
        avatarUrl: 'https://example.com/user2-avatar.jpg',
        userName: 'Alice Johnson',
        message: 'commented on your post: "Beautiful photo!"',
        timestamp: '1 hour ago',
        type: 'comment',
        postId: 456,
    },
    {
        id: 3,
        avatarUrl: 'https://example.com/user3-avatar.jpg',
        userName: 'Bob Williams',
        message: 'sent you a friend request.',
        timestamp: '2 hours ago',
        type: 'friend_request',
    },
    {
        id: 4,
        avatarUrl: 'https://example.com/user4-avatar.jpg',
        userName: 'Ella Brown',
        message: 'started following you.',
        timestamp: '4 hours ago',
        type: 'follow',
    },
    {
        id: 5,
        avatarUrl: 'https://example.com/user5-avatar.jpg',
        userName: 'Grace Smith',
        message: `mentioned you in a comment: "Great job!"`,
        timestamp: '1 day ago',
        type: 'mention',
        postId: 789,
    }, {
        id: 6,
        avatarUrl: 'https://example.com/user1-avatar.jpg',
        userName: 'John Doe',
        message: 'liked your post.',
        timestamp: '5 minutes ago',
        type: 'like',
        postId: 123,
    },
    {
        id: 7,
        avatarUrl: 'https://example.com/user2-avatar.jpg',
        userName: 'Alice Johnson',
        message: 'commented on your post: "Beautiful photo!"',
        timestamp: '1 hour ago',
        type: 'comment',
        postId: 456,
    },
    {
        id: 8,
        avatarUrl: 'https://example.com/user3-avatar.jpg',
        userName: 'Bob Williams',
        message: 'sent you a friend request.',
        timestamp: '2 hours ago',
        type: 'friend_request',
    },
    {
        id: 9,
        avatarUrl: 'https://example.com/user4-avatar.jpg',
        userName: 'Ella Brown',
        message: 'started following you.',
        timestamp: '4 hours ago',
        type: 'follow',
    },
    {
        id: 10,
        avatarUrl: 'https://example.com/user5-avatar.jpg',
        userName: 'Grace Smith',
        message: `mentioned you in a comment: "Great job!"`,
        timestamp: '1 day ago',
        type: 'mention',
        postId: 789,
    },
];



function Notification() {



    return (
        <View>
            <VStack marginBottom={0} marginTop={1} borderBottomWidth={1} borderBottomColor='$black' />

            <Box paddingTop={1} maxWidth="100%">


                <FlatList
                    data={notificationsData}
                    renderItem={({ item }) => (
                        <Box
                            borderBottomWidth="$1"
                            borderColor="$trueGray800"
                            sx={{
                                '_dark': {
                                    borderColor: '$trueGray100',
                                },
                                '@base': {
                                    pl: 0,
                                    pr: 0,
                                },
                                '@sm': {
                                    pl: '$4',
                                    pr: '$5',
                                },
                            }}
                            py="$2"
                        >
                            <HStack space="md" justifyContent="flex-start">
                                <Avatar size="md">
                                    <AvatarImage source={{ uri: item.avatarUrl }} />
                                </Avatar>
                                <Box
                                    sx={{
                                        _web: { width: "90%" },
                                        _ios: { width: "80%" },
                                        _android: { width: "80%" }
                                    }}
                                    flexDirection='row' justifyContent='space-between' >
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
                                            {item.type === 'comment' && (
                                                <Text
                                                    color="$coolGray600"
                                                    sx={{
                                                        '_dark': {
                                                            color: '$warmGray200',
                                                        },
                                                    }}
                                                >
                                                    {item.message}
                                                </Text>
                                            )}
                                            {item.type === 'like' && (
                                                <Text
                                                    color="$coolGray600"
                                                    flexWrap='wrap'
                                                    sx={{
                                                        '_dark': {
                                                            color: '$warmGray200',
                                                        },
                                                    }}
                                                >
                                                    {item.message}
                                                </Text>
                                            )}
                                            {item.type === 'friend_request' && (
                                                <Text
                                                    color="$coolGray600"
                                                    flexWrap='wrap'
                                                    sx={{
                                                        '_dark': {
                                                            color: '$warmGray200',
                                                        },
                                                    }}
                                                >
                                                    {item.message}
                                                </Text>
                                            )}
                                            {item.type === 'follow' && (
                                                <Text
                                                    color="$coolGray600"
                                                    flexWrap='wrap'
                                                    sx={{
                                                        '_dark': {
                                                            color: '$warmGray200',
                                                        },
                                                    }}
                                                >
                                                    {item.message}
                                                </Text>
                                            )}
                                            {item.type === 'mention' && (
                                                <Text
                                                    color="$coolGray600"
                                                    flexWrap='wrap'
                                                    sx={{
                                                        '_dark': {
                                                            color: '$warmGray200',
                                                        },
                                                    }}
                                                >
                                                    {item.message}
                                                </Text>
                                            )}
                                        </VStack>
                                    </Box>
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
                                            {item.timestamp}
                                        </Text>
                                    </Box>
                                </Box>
                            </HStack>
                        </Box>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />



            </Box>
        </View>
    )
}

export default Notification
