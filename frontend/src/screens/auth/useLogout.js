// useLogout.js

import { useState, useEffect, useContext } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { GlobalContext } from "../../context/GlobalContext";

GoogleSignin.configure({
    webClientId:
        "1047977436439-u7kv2656ajnnmss3usma32nov8b4pe14.apps.googleusercontent.com",
});

const useLogout = () => {
    const [initializing, setInitializing] = useState(true);
    const { user, setUser } = useContext(GlobalContext);

    // Handle user state changes
    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const onGoogleButtonPress = async () => {
        await GoogleSignin.signOut();
        await auth().signOut();
    };

    return onGoogleButtonPress;
};

export default useLogout;
