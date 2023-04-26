import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
//import Sound from 'react-native-sound';
//import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// import { Alert } from 'react-native';
import Alarm from 'react-native-alarm';
import { TextInput } from 'react-native-web';

////
import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
    AudioEncoderAndroidType,
    AudioSet,
    AudioSourceAndroidType,
   } from 'react-native-audio-recorder-player';


export default function Zen() {
    ///
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [recordSecs, setRecordSecs] = useState(0);
    const [recordTime, setRecordTime] = useState('00:00:00');
    const [currentPositionSec, setCurrentPositionSec] = useState(0);
    const [currentDurationSec, setCurrentDurationSec] = useState(0);
    const [playTime, setPlayTime] = useState('00:00:00');
    const [duration, setDuration] = useState('00:00:00');
  
     const xaudioRecorderPlayer = new AudioRecorderPlayer();
     xaudioRecorderPlayer.setSubscriptionDuration(0.09);
  




    ////
    const [isRecording, setIsRecording] = useState(false);
    const [recordedVoicePath, setRecordedVoicePath] = useState('');
    const [alarmTime, setAlarmTime] = useState('');
    const [alarmInterval, setAlarmInterval] = useState('');

    const audioRecorderPlayer = new AudioRecorderPlayer();

    const startRecording = async () => {
        const filePath = 'voice_recording.mp3';
        setIsRecording(true);
        const result = await audioRecorderPlayer.startRecorder(filePath);
        audioRecorderPlayer.addRecordBackListener((e) => {
            setRecordedVoicePath(e.current_position);
        });
    };

    const stopRecording = async () => {
        setIsRecording(false);
        const result = await audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removeRecordBackListener();
    };

    const playRecordedVoice = async () => {
        const sound = new Sound(recordedVoicePath, '', (error) => {
            if (error) {
                console.log('failed to load the sound', error);
            }
        });
        sound.play();
    };

    const setAlarm = () => {
        Alarm.createAlarm({
            alarm_id: 'my_alarm',
            fire_date: new Date(alarmTime).getTime(),
            repeat_interval: alarmInterval, // set this to null if you don't want to repeat the alarm
            title: 'Alarm',
            message: 'Wake up!',
        });
    };

    return (
        <View>
            <Text>Record your voice:</Text>
            {isRecording ? (
                <Button title="Stop Recording" onPress={stopRecording} />
            ) : (
                <Button title="Start Recording" onPress={startRecording} />
            )}
            //         {recordedVoicePath ? (
                <>
                    <Button title="Play Recorded Voice" onPress={playRecordedVoice} />
                    <Text>{`Recorded Voice Path: ${recordedVoicePath}`}</Text>
                </>
            ) : null}
            <Text>Set an alarm:</Text>

            <TextInput
                placeholder="Alarm Time (YYYY-MM-DD HH:MM:SS)"
                value={alarmTime}
                onChangeText={setAlarmTime}
            />

            <TextInput
                placeholder="Alarm Interval (in milliseconds)"
                value={alarmInterval}
                onChangeText={setAlarmInterval}
            />
            <Button title="Set Alarm" onPress={setAlarm} />

           

           

        </View>
    );







    // return (
    //     <View>
    //         <Text>Record your voice:</Text>
    //         {isRecording ? (
    //             <Button title="Stop Recording" onPress={stopRecording} />
    //         ) : (
    //             <Button title="Start Recording" onPress={startRecording} />
    //         )}
    //         {recordedVoicePath ? (
    //             <>
    //                 <Button title="Play Recorded Voice" onPress={playRecordedVoice} />
    //                 <Text>{`Recorded Voice Path: ${recordedVoicePath}`}</Text>
    //             </>
    //         ) : null}
    //         <Text>Set an alarm:</Text>
    //         <TextInput
    //             placeholder="Alarm Time (YYYY-MM-DD HH:MM:SS)"
    //             value={alarmTime}
    //             onChangeText={setAlarmTime}
    //         />
    //         <TextInput
    //             placeholder="Alarm Interval (in milliseconds)"
    //             value={alarmInterval}
    //             onChangeText={setAlarmInterval}
    //         />
    //         <Button title="Set Alarm" onPress={setAlarm} />
    //     </View>
    // );
}
