import React from 'react'
import { View, Text, Image, Button, StyleSheet, TouchableHighlight } from 'react-native'
import { getDiceImage } from '../../stlyes/images'
import { colors } from '../../stlyes/color'
import { RollButton } from '../../common/RollButton'


class TwoDice extends React.Component {
    state = {
        imageOne: getDiceImage(0),
        imageTwo: getDiceImage(0),
    }

    render() {
        const { imageOne, imageTwo } = this.state;

        return (
            <View style={styles.view}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={imageOne}></Image>
                    <Image style={styles.image} source={imageTwo}></Image>
                </View>
                <View style={styles.buttonContainer}>
                    <RollButton onPress={this.rollDice} />
                </View>
            </View>
        )
    }

    rollDice = () => {
        const rollOne = Math.floor(Math.random() * 6) + 1;
        const rollTwo = Math.floor(Math.random() * 6) + 1;

        this.setState({ imageOne: getDiceImage(rollOne), imageTwo: getDiceImage(rollTwo) })
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    view: {
        alignContent: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: colors.background
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 40,
        marginTop: 40,
        alignSelf: 'center',
        tintColor: colors.image
    },
});

export { TwoDice }