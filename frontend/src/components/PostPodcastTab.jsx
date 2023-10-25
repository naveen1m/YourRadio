import React, { Fragment, useState } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { View, Text, Box, ScrollView } from '@gluestack-ui/themed'
import PodcastTab from './PodcastTab';
import PostTab from './PostTab';

function PostPodcastTab() {
    const [activeTab, setActiveTab] = useState('POST');
    // Function to handle tab selection
    const handleTabPress = (tabName) => {
        setActiveTab(tabName);
    };

    // Function to check if a tab is active
    const isTabActive = (tabName) => {
        return activeTab === tabName;
    };

    return (
        <Fragment>
            <View height='100%'>
                <View flexDirection='row' backgroundColor='$blue100' justifyContent='space-evenly' fontWeight='$bold' height='$12' >
                    <Box style={[isTabActive('POST') && styles.activeTabText]} width='50%' justifyContent='center'>
                        <TouchableOpacity onPress={() => handleTabPress('POST')}>
                            <Text textAlign='center' fontWeight='bold' color='$black'>
                                POST
                            </Text>
                        </TouchableOpacity>
                    </Box>
                    <Box style={[isTabActive('PODCAST') && styles.activeTabText]} width='50%' justifyContent='center'  >

                        <TouchableOpacity onPress={() => handleTabPress('PODCAST')}>
                            <Text textAlign='center' fontWeight='bold' color='$black' >
                                PODCAST
                            </Text>
                        </TouchableOpacity>

                    </Box>
                </View>
                <View height='90%' flex={1}>

                    <ScrollView>
                        {isTabActive('PODCAST') && <PodcastTab />}
                        {isTabActive('POST') && <PostTab />}
                    </ScrollView>
                </View>

            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    tabText: {
        color: 'black',
        textAlign: 'center',

    },
    activeTabText: {
        color: 'white',
        backgroundColor: '#3876BF', // Set a blue background when the tab is active
    },
});

export default PostPodcastTab
