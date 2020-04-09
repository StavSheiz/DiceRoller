const imgDiceOne = require('../assets/perspective-dice-six-faces-one.png')
const imgDiceTwo = require('../assets/perspective-dice-six-faces-two.png')
const imgDiceThree = require('../assets/perspective-dice-six-faces-three.png')
const imgDiceFour = require('../assets/perspective-dice-six-faces-four.png')
const imgDiceFive = require('../assets/perspective-dice-six-faces-five.png')
const imgDiceSix = require('../assets/perspective-dice-six-faces-six.png')
const imgDiceEmpty = require('../assets/perspective-dice-six-faces-random.png')

const images = [imgDiceEmpty, imgDiceOne, imgDiceTwo, imgDiceThree, imgDiceFour, imgDiceFive, imgDiceSix]

function getDiceImage(number) {
    return images[number]
}

export {
    getDiceImage
}