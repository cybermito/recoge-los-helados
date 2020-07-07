namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (info.life() == 0) {
        Jugador1.destroy(effects.fire, 500)
    }
    controller.vibrate(200)
    music.powerDown.play()
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(Jugador1, sprites.castle.tilePath5)
    tiles.placeOnRandomTile(enemigo, sprites.castle.tilePath5)
})
let enemigo: Sprite = null
let Jugador1: Sprite = null
Jugador1 = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
enemigo = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 1 1 1 1 1 7 7 1 1 1 1 1 7 7 
7 7 1 1 1 1 1 7 7 1 1 1 1 1 7 7 
7 7 f f f 1 1 7 7 f f f 1 1 7 7 
7 7 f f f 1 1 7 7 f f f 1 1 7 7 
7 7 f f f 1 1 7 7 f f f 1 1 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 4 4 4 7 7 7 7 7 7 7 7 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 7 7 4 4 4 4 4 4 4 4 4 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Enemy)
let comida = sprites.create(img`
. . . . . 3 3 b 3 3 d d 3 3 . . 
. . . . 3 1 1 d 3 d 1 1 1 1 3 . 
. . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
. . 3 d d 1 1 1 d d 1 1 1 3 3 3 
. 3 1 1 d 1 1 1 1 d d 1 1 b . . 
. 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
. b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
. 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
. 4 4 d 1 1 1 1 1 1 d d d b b . 
. 4 d b d 1 1 1 1 1 1 1 1 3 . . 
4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
4 5 5 d 5 5 d b b b d d 3 . . . 
4 5 5 5 d d d d 4 4 b 3 . . . . 
. 4 5 5 5 4 4 4 . . . . . . . . 
. . 4 4 4 . . . . . . . . . . . 
`, SpriteKind.Food)
enemigo.setPosition(89, 20)
Jugador1.setPosition(100, 62)
comida.setPosition(100, 101)
controller.moveSprite(Jugador1)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100002020202020101010101020202020202020202020201010101010202020202020202020202010101010102020202020202020202020101010101020202020202020202020201010101010202020202020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020202020201010101010202020202020202020202010101010102020202020202020202020101010101020202020202020202020201010101010202020202020202020202010101010102020202020202020202020101010101020202020202`,
            img`
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 2 . . . . 
2 2 2 2 2 . . . . . 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . 2 2 2 2 2 2 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 2 . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tileGrass1],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(Jugador1)
enemigo.follow(Jugador1, 40)
info.setScore(0)
info.setLife(3)
forever(function () {
    if (Jugador1.overlapsWith(comida)) {
        music.baDing.play()
        controller.vibrate(200)
        info.changeScoreBy(1)
        tiles.placeOnRandomTile(comida, sprites.castle.tilePath5)
    }
    if (info.score() == 10) {
        game.over(true, effects.hearts)
    }
})
