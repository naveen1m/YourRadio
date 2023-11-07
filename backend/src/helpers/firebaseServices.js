import { storage } from "../database/firebaseConfig.js";
import * as uuid from "uuid";
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage";

export const uploadFile = async (file, folder) => {
    // Create file metadata including the content type
    const metadata = {
        contentType: file.mimetype,
    };
    console.log(`${folder}/${uuid.v4()}.${file.mimetype.split("/")[1]}`);
    const audioRef = ref(
        storage,
        `${folder}/${uuid.v4()}.${file.mimetype.split("/")[1]}` //eg: folder/random-id.mpeg
    );
    let url = await uploadBytesResumable(audioRef, file.buffer, metadata)
        .then(async (snapshot) => {
            // Let's get a download URL for the file.
            let url = await getDownloadURL(snapshot.ref).then((url) => {
                return url;
            });
            return url;
        })
        .catch((error) => {
            console.error("Upload failed", error);
        });
    return url;
};

