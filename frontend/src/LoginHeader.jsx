import { View, Text, Heading, Image, Center, Box, Input, InputField, VStack, Button, ButtonText } from '@gluestack-ui/themed'
import React from 'react'
import { StatusBar } from 'react-native'

function LoginHeader() {
    return (
        <>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />

            <View marginTop={15}>
                <Center flexDirection='row' marginTop={0} paddingTop={0}  >
                    <Image
                        size="5xl"
                        borderRadius="$xl"
                        source={require('../assets/radio.png')}
                        alt='radio.png'
                    />

                    <Heading marginLeft={19} fontSize={26} bold={true} paddingTop={15} alignSelf='center' >
                        YourRadio
                    </Heading>

                </Center>
                <Text marginVertical={10} marginTop={30} marginBottom={30} fontSize={20} fontWeight='$extrabold' >SIGN-in HERE ... .. .</Text>
                <Box backgroundColor='$blue400' marginLeft={18} borderRadius={10} width={280} >
                    <View flexDirection='row' >
                        <Text paddingLeft={9} color='$black' flex={1} lex={1} flexDirection='row' alignSelf='center' alignContent='center' alignItems='center' >E-mail :</Text>
                        <Input flex={2} alignSelf='center' alignContent='center' alignItems='center' marginTop={10} borderWidth={0} borderColor='$transparent'>
                            <InputField placeholder='name' />
                        </Input>
                    </View>
                    <VStack borderBottomWidth={2} marginHorizontal={9} borderBottomColor='$black' borderStyle='dotted' />
                    <View flexDirection='row' >
                        <Text paddingLeft={9} color='$black' flex={1} flexDirection='row' alignSelf='center' alignContent='center' alignItems='center'>Password : </Text>
                        <Input flex={2} width={"90%"} alignSelf='center' alignContent='center' alignItems='center' marginTop={10} borderWidth={0} borderColor='$transparent' >
                            <InputField placeholder='password' />
                        </Input>
                    </View>
                </Box>

                <Button
                    size="lg"
                    variant="solid"
                    action="primary"
                    marginTop={33}
                    isDisabled={false}
                    isFocusVisible={false}
                    backgroundColor="$yellow400"
                    borderTopWidth={4}
                    borderLeftWidth={4}
                    borderColor="$yellow600"
                    width={150}
                    borderRadius={10}
                >
                    <ButtonText color="$black" fontWeight='$extrabold' >SIGN in </ButtonText>

                </Button>

                <Button
                    size="lg"
                    variant="solid"
                    action="primary"
                    backgroundColor="$green600"
                    isDisabled={false}
                    isFocusVisible={false}
                    marginTop={23}
                    width={200}
                    borderRadius={30}
                    marginLeft={100}

                >
                    <ButtonText color="$black" fontWeight='$extrabold' >Create Account </ButtonText>

                </Button>
                <Text fontWeight='$extrabold' fontSize={20} color='$blue700' paddingTop={20} >or <Text fontWeight='$extrabold' fontSize={20} >,</Text></Text>
                <Text fontWeight='$extrabold' fontSize={20} paddingTop={20} >Sign-in with ... .. .</Text>
            </View>
        </>
    )
}

export default LoginHeader
