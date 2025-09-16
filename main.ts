basic.forever(function () {
    music.play(music.stringPlayable("C5 G E G F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . #
        . # . # .
        # . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        # # . # #
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        # # # # #
        # . # . #
        . # # # .
        . . . . .
        `)
})
