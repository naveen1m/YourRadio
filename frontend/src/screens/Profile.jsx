import React, { Fragment } from 'react'
import { View } from '@gluestack-ui/themed'
import {
    Text,
    Box,
    Avatar,
    AvatarBadge,
    AvatarFallbackText,
    AvatarImage,
    VStack, HStack, Heading,
} from '@gluestack-ui/themed';
import HorizontalLine from '../components/HorizontalLine';
import PostPodcastTab from '../components/PostPodcastTab';
function Profile() {
    return (
        <Fragment>
            <View>
                <Box mx={2} my={2}>
                    <Heading>Username</Heading>
                    <Box justifyContent='space-between' flexDirection='row'>
                        <Avatar bgColor="$amber600" size="lg" borderRadius="$full" >
                            <AvatarFallbackText>Ronald Richards</AvatarFallbackText>
                            <AvatarImage
                                source={{
                                    uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                                }}
                            />
                        </Avatar>
                        <HStack>
                            <VStack mx={7} alignItems='center' >
                                <Text>10</Text>
                                <Text>Post</Text>
                            </VStack>
                            <VStack mx={7} alignItems='center' >
                                <Text>50</Text>
                                <Text>Follower</Text>
                            </VStack>
                            <VStack mx={7} alignItems='center' >
                                <Text>90</Text>
                                <Text>Following</Text>
                            </VStack>
                        </HStack>
                    </Box>
                    <VStack marginBottom={3}>
                        <Heading size="sm">Ronald Richards</Heading>
                    </VStack>
                    <Text>Bio....</Text>
                </Box>
                <HorizontalLine />

                <Box>
                    <PostPodcastTab />
                </Box>
            </View>
        </Fragment>
    )
}

export default Profile
