import { } from 'react-native'
import React, { useContext } from 'react'
import { View, Text, Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Box, Button, ButtonText, VStack } from '@gluestack-ui/themed'
import { GlobalContext } from '../context/GlobalContext'
import useLogout from '../screens/auth/useLogout'

const SP_ActionSheet = () => {
    const { showActionsheet, setShowActionsheet } = useContext(GlobalContext);
    const handleClose = () => setShowActionsheet(!showActionsheet)
    const { user } = useContext(GlobalContext)

    const onLogoutPress = useLogout();
    // const handleLogout = async () => {
    //     // await onLogoutPress();
    //     // console.log('user', user)
    // }

    return (
        <Box>
            <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}
                padding={3}
            >
                <ActionsheetBackdrop />
                <ActionsheetContent maxHeight="75%" zIndex={999} backgroundColor='#fffdb0'
                    padding={10} borderBottomWidth={8} borderTopWidth={8} borderRightWidth={4} borderLeftWidth={4} borderRadius={15} borderColor='#D3D3D3'>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>Account Settings</ActionsheetItemText>

                    </ActionsheetItem>
                    <Text marginLeft={19} padding={0} alignSelf='flex-start' color='$blue400' >(Ad , personal preference)</Text>
                    <VStack width='89%' marginBottom={2} marginTop={0} borderBottomWidth={2} borderBottomColor='$green700' borderStyle='dotted' />

                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>Apply for Verification Badge </ActionsheetItemText>
                    </ActionsheetItem>
                    <VStack width='89%' marginBottom={2} marginTop={0} borderBottomWidth={2} borderBottomColor='$green700' borderStyle='dotted' />

                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>Payment</ActionsheetItemText>
                    </ActionsheetItem>
                    <VStack width='89%' marginBottom={2} marginTop={0} borderBottomWidth={2} borderBottomColor='$green700' borderStyle='dotted' />

                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>Account Privacy</ActionsheetItemText>
                    </ActionsheetItem>
                    <VStack width='89%' marginBottom={2} marginTop={0} borderBottomWidth={2} borderBottomColor='$green700' borderStyle='dotted' />

                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>Blocked</ActionsheetItemText>
                    </ActionsheetItem>
                    <VStack width='89%' marginBottom={2} marginTop={0} borderBottomWidth={2} borderBottomColor='$green700' borderStyle='dotted' />

                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>Logout</ActionsheetItemText>
                    </ActionsheetItem>
                    <VStack width='89%' marginBottom={2} marginTop={0} borderBottomWidth={2} borderBottomColor='$green700' borderStyle='dotted' />

                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>Delete My Account</ActionsheetItemText>
                    </ActionsheetItem>
                    <VStack width='89%' marginBottom={2} marginTop={0} borderBottomWidth={2} borderBottomColor='$green700' borderStyle='dotted' />

                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>About Us</ActionsheetItemText>
                    </ActionsheetItem>
                    <VStack width='89%' marginBottom={2} marginTop={0} borderBottomWidth={2} borderBottomColor='$green700' borderStyle='dotted' />

                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>Help</ActionsheetItemText>
                    </ActionsheetItem>

                </ActionsheetContent>
            </Actionsheet>
        </Box>
    )
}

export default SP_ActionSheet