import React from 'react'
import { FlatList, View, Heading, Box, Text, HStack, VStack, Avatar, AvatarImage } from '@gluestack-ui/themed';

function SearchList() {
    return (
        <View>

            <Box py="$10">
                <Heading size="xl" p="$4" pb="$3">Result in list...</Heading>
                {/* <FlatList
                    data={data}
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
                            <HStack space="md" justifyContent="space-between">
                                <Avatar size="md">
                                    <AvatarImage source={{ uri: item.avatarUrl }} />
                                </Avatar>
                                <VStack>
                                    <Text
                                        color="$coolGray800"
                                        fontWeight="$bold"
                                        sx={{
                                            _dark: {
                                                color: '$warmGray100',
                                            },
                                        }}
                                    >
                                        {item.fullName}
                                    </Text>
                                    <Text
                                        color="$coolGray600"
                                        sx={{
                                            _dark: {
                                                color: '$warmGray200',
                                            },
                                        }}
                                    >
                                        {item.recentText}
                                    </Text>
                                </VStack>
                                <Text
                                    fontSize="$xs"
                                    color="$coolGray800"
                                    alignSelf="flex-start"
                                    sx={{
                                        _dark: {
                                            color: '$warmGray100',
                                        },
                                    }}
                                >
                                    {item.timeStamp}
                                </Text>
                            </HStack>
                        </Box>
                    )}
                    keyExtractor={(item) => item.id}
                /> */}
            </Box>
        </View>
    )
}

export default SearchList
