import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, } from '@gluestack-ui/themed'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av';

function RecordAudio() {
    const [recording, setRecording] = React.useState();
    const [recordings, setRecordings] = React.useState([]);

    async function startRecording() {
        try {
            const perm = await Audio.requestPermissionsAsync();
            if (perm.status === "granted") {
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    playsInSilentModeIOS: true
                });
                const { recording } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
                setRecording(recording);

            }
        } catch (err) { }
    }

    async function stopRecording() {
        setRecording(undefined);

        await recording.stopAndUnloadAsync();
        let allRecordings = [...recordings];
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        allRecordings.push({
            sound: sound,
            duration: getDurationFormatted(status.durationMillis),
            file: recording.getURI()
        });
        // Save the recording file to the device's file system
        const fileName = `recording_${Date.now()}.wav`; // Customize the file name as needed
        const fileUri = `${FileSystem.documentDirectory}${fileName}`;
        await FileSystem.copyAsync({
            from: recording.getURI(),
            to: fileUri,
        });

        // Send the recording file to the backend
        //  try {
        //    const response = await axios.post('your-backend-api-endpoint', {
        //      audioFile: {
        //        uri: fileUri,
        //        name: fileName,
        //        type: 'audio/x-wav', // Adjust the file type if needed
        //      },
        //    });

        //    console.log('Recording uploaded:', response.data);

        //    // You can handle the response from your backend here

        //    // Update the state with the file URI (if needed)
        //    // allRecordings.push({
        //    //   sound: sound,
        //    //   duration: getDurationFormatted(status.durationMillis),
        //    //   file: fileUri, // Use the saved file URI instead
        //    // });

        //    // setRecordings(allRecordings);
        //  } catch (error) {
        //    console.error('Error uploading recording:', error);
        //  }
        setRecordings(allRecordings);
    }
    function getDurationFormatted(milliseconds) {
        const minutes = milliseconds / 1000 / 60;
        const seconds = Math.round((minutes - Math.floor(minutes)) * 60);
        return seconds < 10 ? `${Math.floor(minutes)}:0${seconds}` : `${Math.floor(minutes)}:${seconds}`
    }

    function getRecordingLines() {
        return recordings.map((recordingLine, index) => {
            // console.log(recordingLine, typeof recordingLine)
            // console.log(recordings, typeof recordings)
            return (
                <View key={index} style={styles.row} marginTop="$2" marginBottom={"$2"}>
                    <Text style={styles.fill}>
                        Recording #{index + 1} | {recordingLine.duration}
                    </Text>
                    <TouchableOpacity onPress={() => recordingLine.sound.replayAsync()} >

                        <View>
                            <Ionicons name='play-circle-sharp' size={36} color="black" />
                        </View>
                    </TouchableOpacity>

                </View>
            );
        });
    }

    function clearRecordings() {
        setRecordings([])
    }


    return (
        <View style={styles.container}>
            {recordings.length === 0 && <TouchableOpacity onPress={recording ? stopRecording : startRecording}>
                {recording ?
                    <View marginTop="$2" marginBottom={"$2"}>
                        <Text> <Ionicons name='mic-off-circle-outline' size={24} color="black" />
                            Stop recording</Text>
                    </View>
                    :
                    <View marginTop="$2" marginBottom={"$2"}>
                        <Text><Ionicons name='mic-circle-outline' size={24} color="black" />
                            Start recording</Text>
                    </View>
                }
            </TouchableOpacity>}
            {getRecordingLines()}
            <TouchableOpacity onPress={clearRecordings} >
                {recordings.length > 0 ?
                    <View marginTop="$2" marginBottom={"$2"}>
                        <Text> <Ionicons name='trash-sharp' size={12} color="black" />
                            Clear Recordings</Text>
                    </View>
                    :
                    <View marginTop="$2" marginBottom={"$2"}>
                        <Text>Record Now</Text>
                    </View>
                }
            </TouchableOpacity>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 40
    },
    fill: {
        flex: 1,
        margin: 15
    }
})
export default RecordAudio
