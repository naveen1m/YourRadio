import { View, Text, Button } from '@gluestack-ui/themed'
import React from 'react'

function ChatList({ navigation }) {
    return (
        <View>
            <Text>Chat list</Text>
            <Button
                title="Ravi"
                onPress={() => {
                    navigation.navigate('ChatDetails', { name: 'Ravi', message: 'xyx' })
                }} />
        </View>
    )
}

export default ChatList
