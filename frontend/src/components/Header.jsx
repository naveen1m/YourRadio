import React, { Fragment } from 'react'
import {
    View, Avatar,
    AvatarBadge,
    AvatarFallbackText,
    AvatarImage,
    Heading,
    Center
} from '@gluestack-ui/themed'
import HorizontalLine from './HorizontalLine'

function Header({ title }) {
    return (
        <Fragment>
            <View>
                <Avatar bgColor="$amber600" size="md" borderRadius="$full" marginLeft={'$1.5'} marginTop={'$1.5'}>
                    <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
                    <AvatarImage
                        source={{
                            uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                        }}
                    />
                </Avatar>
                <Center>
                    <Heading fontWeight="$bold" margin={0} padding={0} >{title}</Heading></Center>
                <HorizontalLine />
            </View>
        </Fragment>
    )
}

export default Header
