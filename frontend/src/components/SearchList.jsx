import React, { useContext, useEffect, useState } from 'react'
import { FlatList, View, Heading, Box, Text, HStack, VStack, Avatar, AvatarImage, Button, ButtonText } from '@gluestack-ui/themed';

import { GlobalContext } from '../context/GlobalContext';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SearchList() {
    const { searchedUser, setSearchedUser } = useContext(GlobalContext);
    const navigation = useNavigation();
    const data = searchedUser;

    const handleItemClick = (item, index) => {
        // You can do something with item.name here, such as showing it in an alert or performing some other action.
        // console.log(index, item.name)
        // console.log('searchedUser')
        // console.log(searchedUser[index])

        navigation.navigate('SearchedUser', { name: item.name, searchedUser: searchedUser[index] });

    };

    return (
        <View>

            <Box py="$3">


                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <Box
                            marginBottom={5}

                            borderLeftWidth={0.5}
                            borderTopLeftRadius={5}
                            borderBottomLeftRadius={5}
                            borderRightWidth={0.5}
                            borderTopRightRadius={5}
                            borderBottomRightRadius={5}
                            borderColor='$green800'

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
                            <TouchableOpacity onPress={() => handleItemClick(item, index)}>
                                <HStack space="md" justifyContent='flex-start'>
                                    <Avatar size="md">
                                        <AvatarImage source={{ uri: item.avatarUrl }} />
                                    </Avatar>
                                    <VStack>
                                        <Text
                                            color="$coolGray800"
                                            fontWeight="$bold"
                                            alignSelf='flex-start'
                                            alignContent='flex-start'
                                            alignItems='flex-start'
                                            sx={{
                                                _dark: {
                                                    color: '$warmGray100',
                                                },
                                            }}
                                        >
                                            {item.name}
                                        </Text>
                                        <Text
                                            color="$coolGray600"
                                            isTruncated={true}
                                            sx={{
                                                _dark: {
                                                    color: '$warmGray200',
                                                },
                                            }}
                                        >
                                            {item.tagline && <Text>~ {item.tagline}</Text>}
                                        </Text>
                                    </VStack>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        <Button
                                            title='follow'
                                            justifyContent='flex-end'
                                            marginRight={2}
                                            fontSize="$xs"
                                            color="$coolGray800"
                                            alignSelf="center"

                                            sx={{
                                                _dark: {
                                                    color: '$warmGray100',
                                                },
                                            }}
                                        >
                                            <ButtonText>Follow </ButtonText>
                                        </Button>

                                        {/* <Button
                                            size="md"
                                            marginRight={2}
                                            variant="outline"
                                            action="secondary"
                                            isDisabled={true}
                                            isFocusVisible={true}
                                        >
                                            <ButtonText>Following </ButtonText>

                                        </Button> */}
                                    </View>
                                </HStack>
                            </TouchableOpacity>
                        </Box>
                    )}
                    keyExtractor={(item) => item.id}
                />

            </Box>
        </View>
    )
}

export default SearchList
