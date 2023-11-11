input.onButtonPressed(Button.A, function () {
    rocketship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    rocketship.change(LedSpriteProperty.X, 1)
})
let rocketship: game.LedSprite = null
rocketship = game.createSprite(2, 4)
let meteor = game.createSprite(2, 0)
basic.forever(function () {
    meteor.set(LedSpriteProperty.X, randint(0, 4))
    basic.pause(200)
    meteor.change(LedSpriteProperty.Y, 1)
    basic.pause(200)
    meteor.change(LedSpriteProperty.Y, 1)
    basic.pause(200)
    meteor.change(LedSpriteProperty.Y, 1)
    basic.pause(200)
    meteor.change(LedSpriteProperty.Y, 1)
    basic.pause(200)
    if (meteor.isTouching(rocketship)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        while (true) {
        	
        }
    }
    meteor.set(LedSpriteProperty.Y, 0)
})
