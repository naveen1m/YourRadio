
import React from 'react'
import { View, Text } from 'react-native'
import { AgoraRTC } from 'agora-react-native-sdk';
const Agorasdk = () => {
    Agora.initialize(this.props.appId, this.props.appSecret);
    return (
        <View>
            <Text>Agorasdk</Text>
        </View>
    )
}

export default Agorasdk