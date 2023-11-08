import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { Box, Text, ScrollView, Input, InputIcon, InputSlot, InputField, SearchIcon } from '@gluestack-ui/themed'
import SearchList from '../components/SearchList'
import axiosInst from '../config/axiosInstance';
import { GlobalContext } from '../context/GlobalContext';

function SearchPage() {
    const [search, setSearch] = useState();
    const { searchedUser, setSearchedUser } = useContext(GlobalContext);

    useEffect(() => {
        axiosInst.get(`user/searchuser/${search}`).then(value => {
            setSearchedUser(value.data);

        }).catch(error => console.log({ error: error }))

    }, [search])
    const handleSearch = (newtext) => {
        setSearch(newtext);
    }

    return (
        <View>
            <Box marginTop={10} marginHorizontal={8}>


                <Input
                    variant="rounded"
                    size="md"


                >
                    <InputSlot pl='$3'>
                        <InputIcon as={SearchIcon} />
                    </InputSlot>
                    <InputField
                        placeholder="Search..."
                        value={search}
                        onChangeText={handleSearch}
                    />
                </Input>

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
