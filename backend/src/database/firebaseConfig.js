import { initializeApp } from "@firebase/app";
import { getStorage } from "@firebase/storage";

// Set the configuration for your app
export const firebaseConfig = {
    apiKey: "AIzaSyD6sWpgUny_p0CGreCJg7vc-M5FiTU8Dwo",
    authDomain: "yourradio-48676.firebaseapp.com",
    projectId: "yourradio-48676",
    storageBucket: "yourradio-48676.appspot.com",
    messagingSenderId: "1047977436439",
    appId: "1:1047977436439:web:6f64d6b4e6cb140a50c352",
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);