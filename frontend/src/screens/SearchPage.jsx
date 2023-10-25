import React from 'react'
import { View } from 'react-native'
import { Box, Text, ScrollView, Input, InputIcon, InputSlot, InputField, SearchIcon } from '@gluestack-ui/themed'
import SearchList from '../components/SearchList'

function SearchPage() {
    return (
        <View>
            <Box marginTop={10} marginHorizontal={10}>


                <Input
                    variant="rounded"
                    size="md"
                >
                    <InputSlot pl='$3'>
                        <InputIcon as={SearchIcon} />
                    </InputSlot>
                    <InputField
                        placeholder="Search..."
                    />
                </Input>
                <Box marginTop={10}>
                    <Text>This is search page ..</Text>
                </Box>
                <Box className="searchlist">
                    <ScrollView>
                        <SearchList />
                    </ScrollView>
                </Box>
            </Box>
        </View>
    )
}

export default SearchPage
