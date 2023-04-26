import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AudioRecorderPlayer, {
    AudioEncoderAndroidType,
    AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import { check, PERMISSIONS, request } from 'react-native-permissions';
import RNFS from 'react-native-fs';

// const audioRecorderPlayer = new AudioRecorderPlayer();



export default function record() {
    // const audioRecorderPlayer = new AudioRecorderPlayer();
    // const [isRecording, setIsRecording] = useState(false);
    // const [isPlaying, setIsPlaying] = useState(false);
    // const [recordedAudioPath, setRecordedAudioPath] = useState('');

    // const startRecording = async () => {
    //     try {
    //         const hasPermission = await check(PERMISSIONS.ANDROID.RECORD_AUDIO);

    //         if (hasPermission === 'granted') {
    //             setIsRecording(true);
    //             const path = RNFS.DocumentDirectoryPath + '/recordedAudio.mp3';
    //             const result = await audioRecorderPlayer.startRecorder(
    //                 path,
    //                 AudioEncoderAndroidType.AAC,
    //                 AudioSourceAndroidType.MIC,
    //             );
    //             console.log(result);
    //         } else {
    //             const result = await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
    //             if (result === 'granted') {
    //                 setIsRecording(true);
    //                 const path = RNFS.DocumentDirectoryPath + '/recordedAudio.mp3';
    //                 const result = await audioRecorderPlayer.startRecorder(
    //                     path,
    //                     AudioEncoderAndroidType.AAC,
    //                     AudioSourceAndroidType.MIC,
    //                 );
    //                 console.log(result);
    //             }
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const stopRecording = async () => {
    //     try {
    //         const result = await audioRecorderPlayer.stopRecorder();
    //         setIsRecording(false);
    //         setRecordedAudioPath(result);
    //         console.log(result);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const startPlaying = async () => {
    //     try {
    //         const result = await audioRecorderPlayer.startPlayer(recordedAudioPath);
    //         setIsPlaying(true);
    //         console.log(result);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const stopPlaying = async () => {
    //     try {
    //         const result = await audioRecorderPlayer.stopPlayer();
    //         setIsPlaying(false);
    //         console.log(result);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Audio Recorder Player Example</Text>
            {/* <Button
                title={isRecording ? 'Stop Recording' : 'Start Recording'}
                onPress={isRecording ? stopRecording : startRecording}
            />
            <Button
                title={isPlaying ? 'Stop Playing' : 'Start Playing'}
                onPress={isPlaying ? stopPlaying : startPlaying}
                disabled={!recordedAudioPath}
            />
            {recordedAudioPath ? (
                <Text style={styles.path}>{recordedAudioPath}</Text>
            ) : null} */}
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     path: {
//         marginTop: 20,
//     },
// });


