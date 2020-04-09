import React from 'react'
import { View, Text, Image, Button, StyleSheet, TouchableHighlight } from 'react-native'
import { getDiceImage } from '../../stlyes/images'
import { colors } from '../../stlyes/color'
import { RollButton } from '../../common/RollButton'


class OneDice extends React.Component {
    state = {
        image: getDiceImage(0),
    }

    render() {
        const { image } = this.state;

        return (
            <View style={styles.view}>
                <Image style={styles.image} source={image}></Image>
                <View style={styles.buttonContainer}>
                    <RollButton onPress={this.rollDice} />
                </View>
            </View>
        )
    }

    rollDice = () => {
        const roll = Math.floor(Math.random() * 6) + 1;

        this.setState({ image: getDiceImage(roll) })
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
    image: {
        width: 200,
        height: 200,
        marginBottom: 30,
        alignSelf: 'center',
        tintColor: colors.image
    },
});

export { OneDice }