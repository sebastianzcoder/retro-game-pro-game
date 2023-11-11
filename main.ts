input.onButtonPressed(Button.A, function () {
    rocketship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    rocketship.change(LedSpriteProperty.X, 1)
})
let rocketship: game.LedSprite = null
let tail = game.createSprite(2, 0)
rocketship = game.createSprite(2, 4)
let meteor = game.createSprite(2, 0)
tail.set(LedSpriteProperty.Brightness, 20)
let score = 0
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
        basic.showString("" + (score))
        basic.clearScreen()
        while (true) {
        	
        }
    }
    meteor.set(LedSpriteProperty.Y, 0)
    score += 1
})
basic.forever(function () {
    tail.set(LedSpriteProperty.X, meteor.get(LedSpriteProperty.X))
    tail.set(LedSpriteProperty.Y, meteor.get(LedSpriteProperty.Y) - 1)
})
