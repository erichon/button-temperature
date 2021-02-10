let state = 0
basic.forever(function () {
    if (state == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        state = 1
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        state = 0
    }
    basic.pause(100)
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("T=")
        basic.showNumber(input.temperature())
    }
    basic.pause(100)
})
