input.onPinPressed(TouchPin.P0, function () {
    game.addScore(1000)
})
input.onButtonPressed(Button.A, function () {
    if (Sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
    if (sprite2.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
    if (Sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
})
input.onButtonPressed(Button.AB, function () {
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    game.pause()
})
let sprite2: game.LedSprite = null
let Sprite: game.LedSprite = null
Sprite = game.createSprite(2, 2)
sprite2 = game.createSprite(2, 0)
let sprite3 = game.createSprite(2, 4)
game.setLife(9)
basic.forever(function () {
    Sprite.move(1)
    basic.pause(500)
    Sprite.ifOnEdgeBounce()
})
basic.forever(function () {
    sprite2.move(2)
    basic.pause(500)
    sprite2.ifOnEdgeBounce()
})
basic.forever(function () {
    sprite3.move(2)
    basic.pause(500)
    sprite3.ifOnEdgeBounce()
})
