input.onButtonPressed(Button.A, function () {
    radio.sendString("yes")
    basic.showString("yes")
    basic.pause(500)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "yes") {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == "no") {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == "maybe") {
        basic.showString("maybe")
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("no")
    basic.showString("no")
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("maybe")
    basic.showString("maybe")
    basic.pause(500)
    basic.clearScreen()
})
radio.setGroup(7)
