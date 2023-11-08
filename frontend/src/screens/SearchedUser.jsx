import { View, Text } from 'react-native'
import React from 'react'

const SearchedUser = ({ route }) => {
    const { name, searchedUser } = route.params;
    return (
        <View>
            <Text>{name}</Text>
            <Text>{searchedUser.tagline}</Text>
        </View>
    )
}

export default SearchedUser