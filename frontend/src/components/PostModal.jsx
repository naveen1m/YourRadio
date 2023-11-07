import React, { useContext, useState } from 'react'
import { Modal, Center, Button, ModalBackdrop, ModalContent, VStack, HStack, ModalHeader, ButtonIcon, Icon, ArrowLeftIcon, ButtonText, Heading, Text, ModalBody, Input, InputField, ModalFooter, Link } from '@gluestack-ui/themed';
import RecordAudio from './RecordAudio';
import { GlobalContext } from '../context/GlobalContext';

function PostModal() {
    const { showModal, setShowModal } = useContext(GlobalContext);
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)
    return (
        <Center >

            <Modal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false)
                }}
            >
                <ModalBackdrop />
                <ModalContent>
                    <ModalHeader borderBottomWidth="$0">
                        <VStack space="sm">
                            <Heading size="lg">Add Post</Heading>
                            <Text size="sm">
                                record your voice
                            </Text>
                        </VStack>
                    </ModalHeader>
                    <ModalBody height={'$14'}>
                        {/* <Input>
                            <InputField placeholder="Recorder" />
                        </Input> */}
                        <RecordAudio />
                    </ModalBody>
                    <ModalFooter borderTopWidth="$0">
                        <VStack space="lg" w="$full">
                            <Button
                                onPress={() => {
                                    setShowModal2(true)
                                }}
                            >
                                <ButtonText>Post</ButtonText>
                            </Button>

                        </VStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>



            {/* <Modal
                isOpen={showModal2}
                onClose={() => {
                    setShowModal2(false)
                }}
            >
                <ModalBackdrop />
                <ModalContent>
                    <ModalHeader borderBottomWidth="$0">
                        <VStack space="sm">
                            <Heading size="lg">Reset password</Heading>
                            <Text size="sm">
                                A verification code has been sent to you. Enter code below.
                            </Text>
                        </VStack>
                    </ModalHeader>
                    <ModalBody>
                        <Input>
                            <InputField placeholder="Enter verification code" />
                        </Input>
                    </ModalBody>
                    <ModalFooter borderTopWidth="$0">
                        <VStack space="lg" w="$full">
                            <Button
                                onPress={() => {
                                    setShowModal3(true)
                                }}
                            >
                                <ButtonText>Continue</ButtonText>
                            </Button>
                            <Text size="sm">
                                Didn’t receive the email?
                                <Link ml="$1">
                                    <Link.Text
                                        size="sm"
                                        sx={{
                                            _dark: {
                                                color: "$textDark200",
                                            },
                                            color: "$textLight700",
                                            fontWeight: "$semibold",
                                        }}
                                    >
                                        Click to resend
                                    </Link.Text>
                                </Link>
                            </Text>
                            <HStack space="xs" alignItems="center">
                                <Button
                                    variant="link"
                                    size="sm"
                                    onPress={() => {
                                        setShowModal2(false)
                                    }}
                                >
                                    <ButtonIcon as={ArrowLeftIcon} />
                                    <ButtonText>Back to login</ButtonText>
                                </Button>
                            </HStack>
                        </VStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Modal
                isOpen={showModal3}
                onClose={() => {
                    setShowModal3(false)
                }}
            >
                <ModalBackdrop />
                <ModalContent>
                    <ModalHeader borderBottomWidth="$0">
                        <VStack space="sm">
                            <Heading size="lg">Set new password</Heading>
                            <Text size="sm">
                                Almost done. Enter your new password and you are all set.
                            </Text>
                        </VStack>
                    </ModalHeader>
                    <ModalBody>
                        <VStack space="xl">
                            <Input>
                                <InputField placeholder="New password" />
                            </Input>
                            <Input>
                                <InputField placeholder="Confirm new password" />
                            </Input>
                        </VStack>
                    </ModalBody>
                    <ModalFooter borderTopWidth="$0">
                        <VStack space="lg" w="$full">
                            <Button
                                onPress={() => {
                                    setShowModal(false)
                                    setShowModal2(false)
                                    setShowModal3(false)
                                }}
                            >
                                <ButtonText>Submit</ButtonText>
                            </Button>
                            <HStack space="xs" alignItems="center">
                                <Button
                                    variant="link"
                                    size="sm"
                                    onPress={() => {
                                        setShowModal3(false)
                                    }}
                                >
                                    <ButtonIcon as={ArrowLeftIcon} />
                                    <ButtonText>Back to login</ButtonText>
                                </Button>
                            </HStack>
                        </VStack>
                    </ModalFooter>
                </ModalContent>
            </Modal> */}
        </Center>
    )

}

export default PostModal
