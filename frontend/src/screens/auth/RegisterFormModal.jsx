import React, { useContext, useState } from 'react'
import { View, Modal, ModalCloseButton, Center, Button, ModalBackdrop, ModalContent, ModalHeader, Icon, ButtonText, Heading, Text, ModalBody, Input, InputField, ModalFooter, CloseIcon, FormControl, Textarea, TextareaInput, VStack, FormControlLabel, FormControlLabelText, FormControlErrorText } from '@gluestack-ui/themed';
import { GlobalContext } from '../../context/GlobalContext';
import axiosInst from '../../config/axiosInstance';
import { FormControlError } from '@gluestack-ui/themed';
import { FormControlErrorIcon } from '@gluestack-ui/themed';
import { AlertCircleIcon } from '@gluestack-ui/themed';

function RegisterFormModal({ userData }) {
    const { showRegisterModal, setShowRegisterModal } = useContext(GlobalContext);
    const [unique, setUnique] = useState(true);
    const [focus, setFocus] = useState(true);
    const ref = React.useRef(null);
    const [formValues, setFormValues] = useState({
        username: '', name: '', about: '', tagline: ''
    });

    const handleInputChange = (fieldName, value) => {
        const characterLimit = 100;

        if (fieldName === 'about') {

            if (value.length > characterLimit) {
                // If it exceeds, truncate the text to the character limit
                value = value.slice(0, characterLimit);
            }
        }

        setFormValues({ ...formValues, [fieldName]: value });

    };
    const handleFocus = () => {
        setFocus(true)
    }
    const handleBlur = () => {
        if (focus) {
            isUsernameUnique();
        }
        setFocus(false);
    }
    const isUsernameUnique = async () => {
        console.log('running is username unique');
        try {
            const response = await axiosInst.post('/user/checkusername', { username: formValues.username });
            setUnique(true);
            return response.data.isUnique;
        } catch (error) {
            console.error('Error checking username uniqueness:', error);
            return false;
        }
    }
    console.log("unique", unique)
    const handleSubmit = async () => {
        const { username, name, about, tagline } = formValues;
        // console.log(username, name, about);
        // console.log({ name: name ?? userData.name });
        console.log('userdata: ', userData);
        if (isUsernameUnique) {
            const dataToSend = {
                ...userData,
                displayName: name ?? userData.name,
                username: username,
                about: about,
                tagline: tagline,

            };
            console.log('dataToSend', dataToSend);
            try {
                await axiosInst.post('/user/create', dataToSend)
                    .then(response => {
                        console.log('User created successfully:', response.data);
                    })
                    .catch(error => {
                        console.error('axios Error:', error.message);
                    })
            } catch (error) {
                console.log({ error: 'axios error', error })
            }
        } else {
            console.log("message: username is not unique")
        }
    };

    return (
        <Center h={300}>
            {/* <Button onPress={() => setShowRegisterModal(true)} ref={ref}>
                <ButtonText>Show Modal</ButtonText>
            </Button> */}
            <Modal
                isOpen={showRegisterModal}
                onClose={() => {
                    setShowRegisterModal(false);
                }}
                // finalFocusRef={ref}
                size="full"
            >
                {/* <ModalBackdrop /> */}
                <ModalContent>
                    <ModalHeader>
                        <Heading size='lg'>Register to YourRadio</Heading>
                        {/* <ModalCloseButton>
                            <Icon as={CloseIcon} />
                        </ModalCloseButton> */}
                    </ModalHeader>
                    <ModalBody>


                        <VStack space="md">
                            <FormControl isRequired={true} isInvalid >
                                <FormControlLabel mb="$1">
                                    <FormControlLabelText>Username</FormControlLabelText>
                                </FormControlLabel>
                                <Input >
                                    <InputField placeholder="Username" autoFocus={true} onFocus={handleFocus} onBlur={handleBlur} value={formValues.username} onChangeText={(text) => handleInputChange('username', text)} />
                                </Input>
                                {!unique && <FormControlError>
                                    <FormControlErrorIcon as={AlertCircleIcon} />
                                    <FormControlErrorText>
                                        unique username required
                                    </FormControlErrorText>
                                </FormControlError>}
                            </FormControl>
                            <FormControl>
                                <FormControlLabel mb="$1">
                                    <FormControlLabelText>Name</FormControlLabelText>
                                </FormControlLabel>
                                <Input>
                                    <InputField placeholder="Name" mb="$1" value={formValues.name}
                                        onChangeText={(text) => handleInputChange('name', text)} />
                                </Input>
                                <FormControlLabel mb="$1">
                                    <FormControlLabelText>Tagline</FormControlLabelText>
                                </FormControlLabel>
                                <Input>
                                    <InputField placeholder="Tagline" mb="$1" value={formValues.tagline}
                                        onChangeText={(text) => handleInputChange('tagline', text)} />
                                </Input>
                                <FormControlLabel mb="$1">
                                    <FormControlLabelText>About</FormControlLabelText>
                                </FormControlLabel>
                                <View>
                                    <Textarea>
                                        <TextareaInput
                                            multiline
                                            numberOfLines={4}
                                            maxLength={100}
                                            placeholder='your bio...' value={formValues.about}
                                            onChangeText={(text) => handleInputChange('about', text)} />

                                    </Textarea>
                                    <Text marginLeft={3} padding={1} >
                                        {formValues.about.length}/100
                                    </Text>
                                </View>
                            </FormControl>
                        </VStack>


                    </ModalBody>
                    <ModalFooter>

                        <Button
                            size="sm"
                            action="positive"
                            borderWidth='$0'
                            onPress={() => {
                                setShowRegisterModal(false);
                                handleSubmit()
                            }}
                        >
                            <ButtonText>Register</ButtonText>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Center>
    );
}
export default RegisterFormModal;
