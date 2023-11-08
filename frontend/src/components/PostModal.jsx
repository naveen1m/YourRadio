import React, { useContext, useState } from 'react'
import { Modal, Center, Button, ModalBackdrop, ModalContent, VStack, HStack, ModalHeader, ButtonIcon, Icon, ArrowLeftIcon, ButtonText, Heading, Text, ModalBody, Input, InputField, ModalFooter, Link } from '@gluestack-ui/themed';
import RecordAudio from './RecordAudio';
import { GlobalContext } from '../context/GlobalContext';

function PostModal() {
    const { showModal, setShowModal } = useContext(GlobalContext);
    const handleAudio = () => {
        setShowModal(false);
    }
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
                    <ModalBody height={'$22'}>

                        <RecordAudio />
                    </ModalBody>

                    <ModalFooter borderTopWidth="$0">
                        <VStack space="lg" w="$full">
                            <Button
                                onPress={() => {
                                    handleAudio
                                }}
                            >
                                <ButtonText>Done</ButtonText>
                            </Button>

                        </VStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Center>
    )

}

export default PostModal
