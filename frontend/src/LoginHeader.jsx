import { View, Text, Heading, Image, Center, Box, Input, InputField, VStack, Button, ButtonText } from '@gluestack-ui/themed'
import React from 'react'
import { StatusBar } from 'react-native'

function LoginHeader() {
    return (
        <>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />

            <View marginTop={10} padding={5}  >
                <Center flexDirection='row'  >
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
                <Text marginVertical={10}>SIGN-in HERE ... .. .</Text>
                <Box backgroundColor='$blue400' borderRadius={10} width={280} >
                    <View flexDirection='row'>
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
                    marginTop={3}
                    variant="solid"
                    action="primary"
                    backgroundColor="$green600"
                    isDisabled={false}
                    isFocusVisible={false}
                    backgroundColor="$yellow400"
                    borderTopWidth={4}
                    borderLeftWidth={4}
                    borderColor="$yellow600"
                    width={150}
                    borderRadius={10}
                >
                    <ButtonText color="$black">SIGN in </ButtonText>

                </Button>
                <Button
                    size="lg"
                    variant="solid"
                    action="primary"
                    backgroundColor="$green600"
                    isDisabled={false}
                    isFocusVisible={false}
                    marginTop={3}
                    width={200}
                    borderRadius={30}


                >
                    <ButtonText color="$black">Create Account </ButtonText>

                </Button>
                <Text>or <Text>,</Text></Text>
                <Text>Sign-in with ... .. .</Text>
            </View>
        </>
    )
}

export default LoginHeader
