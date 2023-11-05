import React, { Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Avatar, AvatarBadge, AvatarFallbackText, AvatarImage, Heading, Center } from '@gluestack-ui/themed';
import HorizontalLine from './HorizontalLine';
import { Profile } from '../screens';
import { useNavigation } from '@react-navigation/native';

function Header({ title }) {
    const navigation = useNavigation();
    return (
        <Fragment>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Avatar bgColor='$amber600' size='md' borderRadius='$full' marginLeft={'$1.5'} marginTop={'$1.5'}>
                        <AvatarFallbackText>Rahul Kumar</AvatarFallbackText>
                        <AvatarImage
                            source={{
                                uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                            }}
                        />
                    </Avatar>
                </TouchableOpacity>

                <Center>
                    <Heading fontWeight='$bold' margin={0} padding={0}>
                        {title}
                    </Heading>
                </Center>
                <HorizontalLine />
            </View>
        </Fragment>
    );
}

export default Header;
