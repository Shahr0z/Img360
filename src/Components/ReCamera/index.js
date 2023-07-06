import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Camera } from 'react-native-vision-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../Theme/Colors';

export const CameraComponent = ({ camera, device, showCamera, capturePhoto, toggleTorch, toggleFlash, torch, flash, ...restProps }) => (
    <>
        <Camera
            {...restProps}
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            photo={true}
            cameraFlipMode={'auto'}
            frameRate={30}
            autoFocus={'on'}
            zoom={0}
            zoomMode={'enabled'}
            torch={torch ? 'on' : 'off'}
            flash={flash ? 'on' : 'off'}
        />

        <View style={styles.buttonContainer}>

            <TouchableOpacity onPress={toggleFlash}>
                <MaterialIcons name={flash ? 'flash-on' : 'flash-off'} size={26} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.camButton} onPress={capturePhoto} >
                <Entypo name="camera" size={20} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleTorch}>
                <Ionicons name={torch ? 'flashlight-outline' : 'flashlight'} size={26} color="white" />
            </TouchableOpacity>
        </View>
    </>
);


const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        backgroundColor: Colors.BACKGROUND,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 14,
        flexDirection: 'row',
        bottom: 0,
    },
    camButton: {
        height: 55,
        width: 55,
        borderRadius: 55 / 2,
        backgroundColor: Colors.BUTTON_BACKGROUND,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: Colors.BORDER_COLOR,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

});