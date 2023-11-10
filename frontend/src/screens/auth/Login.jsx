import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Center, Box } from '@gluestack-ui/themed';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import LoginHeader from '../../LoginHeader';
import { GlobalContext } from '../../context/GlobalContext';
import { StackActions } from '@react-navigation/native';
import axiosInst from '../../config/axiosInstance';

function Login({ navigation }) {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const { setUser } = useContext(GlobalContext);
    const { setShowRegisterModal } = useContext(GlobalContext);

    GoogleSignin.configure({
        webClientId: '1047977436439-u7kv2656ajnnmss3usma32nov8b4pe14.apps.googleusercontent.com'
    });

    // Handle user state changes
    function onAuthStateChanged(user) {
        console.log(JSON.stringify(user, null, 2));
        // setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        // using timeout to replicate the splash screen delay at startup
        async () => {
            const loggedIn = true;
            auth().onAuthStateChanged(user => {
                const routeName = user !== null && loggedIn ? 'Profile' : 'Login';
                navigation.dispatch(StackActions.replace(routeName));
            });
        };
    }, []);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const onGoogleButtonPress = async () => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        console.log(idToken);
        axiosInst.post('/user/login')
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        // return auth().signInWithCredential(googleCredential);
        const user_signIn = auth().signInWithCredential(googleCredential);
        user_signIn
            .then(user => {
                // console.log(user.additionalUserInfo.isNewUser);
                if (user.additionalUserInfo.isNewUser) {
                    // open a full modal to get details and add in the userData
                    setShowRegisterModal(true);

                    const userData = {

                        name: user.user.displayName,
                        email: user.user.email,
                        uid: user.user.uid
                    };

                    navigation.navigate('TabNav', { params: userData, screen: 'Feed' });



                } else {
                    console.log("user already exist!");
                    navigation.navigate('TabNav');
                }
            })
            .catch(error => {
                console.log({ error: error });
            });
    };
    return (
        <View style={{ flex: 1, justifyContent: 'start', alignItems: 'center' }} >
            <LoginHeader />
            <Center>
                <Box marginTop={25} justifyContent='center' height={150} padding={15} alignItems='center' borderRadius={10} borderBottomWidth={2} borderLeftWidth={2} borderRightWidth={2} borderColor="#D3D3D3" shadowOpacity={1} shadowRadius={15} shadowOffset={5} shadowColor='$green500' backgroundColor='$white'>



                    <GoogleSigninButton style={{ width: 300, height: 70 }} onPress={onGoogleButtonPress} />

                </Box>
            </Center>
        </View>
    );
}

export default Login;
