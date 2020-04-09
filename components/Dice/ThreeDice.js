import React from 'react'
import { View, Text, Image, Button, StyleSheet, TouchableHighlight } from 'react-native'
import { getDiceImage } from '../../stlyes/images'
import { colors } from '../../stlyes/color'
import { RollButton } from '../../common/RollButton'


class ThreeDice extends React.Component {
    state = {
        imageOne: getDiceImage(0),
        imageTwo: getDiceImage(0),
        imageThree: getDiceImage(0),
    }

    render() {
        const { imageOne, imageTwo, imageThree } = this.state;

        return (
            <View style={styles.view}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={imageOne}></Image>
                    <Image style={styles.image} source={imageTwo}></Image>
                    <Image style={styles.image} source={imageThree}></Image>
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
        const rollThree = Math.floor(Math.random() * 6) + 1;

        this.setState({ imageOne: getDiceImage(rollOne), imageTwo: getDiceImage(rollTwo), imageThree: getDiceImage(rollThree) })
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
        width: 100,
        height: 100,
        marginBottom: 65,
        marginTop: 65,
        alignSelf: 'center',
        tintColor: colors.image
    },
});

export { ThreeDice }