import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "@gluestack-ui/themed";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { UserContext } from "../../context/UserContext";
import { TouchableOpacity } from "react-native";

function Logout() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const { user, setUser } = useContext(UserContext);

    GoogleSignin.configure({
        webClientId:
            "1047977436439-u7kv2656ajnnmss3usma32nov8b4pe14.apps.googleusercontent.com",
    });

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (!initializing) setInitializing(true);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const onGoogleButtonPress = async () => {
        await GoogleSignin.signOut();

        // signs user out from firebase (@react-native-google-signin/.signOut doesnt work)
        await auth().signOut();
    };

    if (user) {
        return (
            <View>
                <TouchableOpacity
                    style={{
                        width: 250,
                        height: 40,
                        marginTop: 10,
                        backgroundColor: "lightgreen",
                    }}
                    onPress={onGoogleButtonPress}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Logout;