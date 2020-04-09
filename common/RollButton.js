import React from 'react'
import { Audio } from 'expo-av'
import { StyleSheet, TouchableHighlight, Button } from 'react-native';

import { colors } from '../stlyes/color'

const rollSound = new Audio.Sound();

async function loadSound() {
    try {
        await rollSound.loadAsync(
            require("../assets/nettimato__rolling-dice-1.wav")
        );
        await soundObject.setVolumeAsync(1)
    } catch (error) {
        console.log('Error: cannot load sound.')
    }
}

const RollButton = ({ onPress }) => {

    const onRollPress = (e) => {
        rollSound && rollSound.replayAsync();
        onPress(e);
    }

    return (
        <TouchableHighlight style={styles.button} touchSoundDisabled={true}>
            <Button
                title="Roll"
                accessibilityLabel="Roll the dice"
                color={colors.secondary}
                onPress={onRollPress}
            />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '30%'
    }
});

export { RollButton, loadSound }