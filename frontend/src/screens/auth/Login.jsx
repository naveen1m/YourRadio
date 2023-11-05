import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Center } from '@gluestack-ui/themed';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import LoginHeader from '../../LoginHeader';
import { GlobalContext } from '../../context/GlobalContext';
import { StackActions } from '@react-navigation/native';

function Login({ navigation }) {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const { user, setUser } = useContext(GlobalContext);
    const { showRegisterModal, setShowRegisterModal } = useContext(GlobalContext);

    GoogleSignin.configure({
        webClientId: '1047977436439-u7kv2656ajnnmss3usma32nov8b4pe14.apps.googleusercontent.com'
    });

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
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
        // console.log(idToken);

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        // return auth().signInWithCredential(googleCredential);
        const user_signIn = auth().signInWithCredential(googleCredential);
        user_signIn
            .then(user => {
                // console.log(user.additionalUserInfo.isNewUser);
                // if (user.additionalUserInfo.isNewUser) {
                // open a full modal to get details and add in the userData
                setShowRegisterModal(true);

                const userData = {
                    // will add form data here and pass the details
                    displayName: user.user.displayName,
                    email: user.user.email,
                    uid: user.user.uid
                };

                navigation.navigate('TabNav', { params: userData, screen: 'Feed' });
                // navigation.navigate('TabNav', userData);
                // axiosInst.post('/user/create', userData)
                //     .then(response => {
                //         console.log('User created successfully:', response.data);
                //     })
                //     .catch(error => {
                //         console.error('axios Error:', error.message);
                //     })

                // } else {
                //     console.log("user already exist!")
                // }
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <View style={{ flex: 1, justifyContent: 'start', alignItems: 'center', marginTop: '40%' }} >
            <LoginHeader />
            <Center>
                <Text>Please sign in</Text>

                <GoogleSigninButton style={{ width: 300, height: 70, marginTop: 50 }} onPress={onGoogleButtonPress} />
            </Center>
        </View>
    );
}

export default Login;
