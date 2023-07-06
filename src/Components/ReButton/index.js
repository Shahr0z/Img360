import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../Theme/Colors';
import Entypo from 'react-native-vector-icons/Entypo';

export const ReButton = ({ handleOpenCamera }) => (
    <TouchableOpacity style={styles.btnView} onPress={handleOpenCamera}>
        <Entypo name="camera" size={20} color={Colors.BORDER_COLOR} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    btnView: {
        width: 100,
        padding: 10,
        margin: 10,
        backgroundColor: Colors.BUTTON_BACKGROUND,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#efeeee',
        position: 'absolute',
        top: 0,
        left: 0,
    },
});