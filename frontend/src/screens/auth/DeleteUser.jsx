import { View, Text } from "@gluestack-ui/themed";
import React, { useState, useEffect, useContext } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { TouchableOpacity } from "react-native";
import { GlobalContext } from "../../context/GlobalContext";

function DeleteUser() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const { user, setUser } = useContext(GlobalContext);

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
        // TO DELETE USER
        await auth()
            .currentUser.delete()

            .catch((err) => {
                // @error — auth/requires-recent-login Thrown if the user's last sign-in time does not meet the security threshold.
                // Use auth.User#reauthenticatAeWithCredential to resolve. This does not apply if the user is anonymous.
                console.log(err);
            });

        await GoogleSignin.signOut();


        onAuthStateChanged(null);
    };

    if (user) {
        return (
            <View>
                <TouchableOpacity
                    style={{
                        width: 300,
                        height: 40,
                        marginTop: 10,
                        backgroundColor: "lightgreen",
                    }}
                    onPress={onGoogleButtonPress}
                >
                    <Text>Delete User</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default DeleteUser;