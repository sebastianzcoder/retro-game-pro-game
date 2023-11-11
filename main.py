def on_button_pressed_a():
    rocketship.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    rocketship.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

rocketship: game.LedSprite = None
rocketship = game.create_sprite(2, 4)
meteor = game.create_sprite(2, 0)

def on_forever():
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
    if meteor.is_touching(rocketship):
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.clear_screen()
        while True:
            pass
    meteor.set(LedSpriteProperty.Y, 0)
basic.forever(on_forever)
