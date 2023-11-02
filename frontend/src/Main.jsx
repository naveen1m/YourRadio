import React, { useState, useEffect } from 'react'
import { Platform, View } from 'react-native'
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import NativeNavigation from './NativeNavigation'
import WebNavigation from './WebNavigation'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Header from './Header'




function Main() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();


    GoogleSignin.configure({
        webClientId: '1047977436439-u7kv2656ajnnmss3usma32nov8b4pe14.apps.googleusercontent.com',
    });

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    const onGoogleButtonPress = async () => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        // return auth().signInWithCredential(googleCredential);
        const user_signIn = auth.googleCredential(googleCredential);
        user_signIn.then((user) => {
            console.log(user);
        }).catch((error) => {
            console.log(error)
        })
    }

    if (initializing) return null;

    if (!user) {
        return (
            <View>
                <Header />
                <Text>Please sign in</Text>
                <GoogleSigninButton style={{ width: 300, height: 70, marginTop: 50 }} onPress={onGoogleButtonPress} />
            </View>
        )
    }
    return (
        <GluestackUIProvider config={config}>

            <View style={{ flex: 1 }}>
                {Platform.OS == 'web' ? <WebNavigation /> :
                    <NativeNavigation />

                }
            </View>
        </GluestackUIProvider>
    )
}

export default Main



/**
 *   <View>
                        <Box width="100%" justifyContent="center" alignItems="center" bg="$coolGray600" >
                            <Text color="$whitesmoke" fontWeight="$bold" fontSize={"$2xl"} width="100%" paddingLeft="$1.5" paddingTop="$10"  >Your Radio</Text>
                        </Box> 

                 </View> 
 */