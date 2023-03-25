function quest3 () {
    music.play(music.createSong(assets.song`suspense`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`dragon`)
    adventure.addToTextlog("A dragon hovers above. The flap of his wings is threatening.")
    adventure.addToTextlog("Press (A) stand and watch.")
    adventure.addToTextlog("Press (B) to hide.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("That was a really bad idea.")
        adventure.addToTextlog("The dragon meets your gaze and sweeps down to grab you.")
        info.changeLifeBy(-2)
    } else {
        adventure.addToTextlog("You hide behind a large tree with a cavern in the trunk.")
        adventure.addToTextlog("Inside, you see something glimmer.  It's a treasure chest!")
        adventure.changeScoreOverride(adventure.Currency.Coins, 100)
    }
}
function quest1 () {
    music.play(music.createSong(assets.song`jolly`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`lute`)
    adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
    adventure.addToTextlog("Press (A) to join the fun.")
    adventure.addToTextlog("Press (B) to turn and run.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure.")
        quest2()
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun.")
        game.over(false)
    }
}
function quest2 () {
    music.play(music.createSong(assets.song`jolly`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(img`
        ...............................11111111.........................
        ............................111bbbbbbbb1111.....................
        .........................111bbb11111111bbbb11...................
        ........................1bbb111111bbbbb1111bbee.................
        ......................11bbb111111b11111bbb11bbbe................
        .....................1bbb1111111b11bb11111bbbbbbe...............
        ....................1bb11111111b11bbbbbb1111bbbbbe..............
        ...................1bb111111111b11b11e1bb11111bbbbee............
        ..................1bb111111111b111b1be11bbb11bbbbbbbe...........
        .................1bb1111111111b11b11bbb1e1beb11bbbbbe...........
        ................1bbbebbb11111b111b11bbbb1e1beb11bbbbbe..........
        ...............1bbb111b111111b11bbe1b1bbbb111bb11bbbbbe.........
        ..............1bb11111e11111b111b1ebb1111bb111bb11bbbbe.........
        .............1bb11b11eb111111111b11b1b11e11bb11bb11bbbbe........
        ............1bbbbb1b1e111111111b11bb1bbbbe11bb111111bbbbe.......
        ...........1bb11e1b11b111bbbb11111bb1bbbbb1111bb1111bbbbe.......
        ..........1b111111e11b1bbebbb11111b11ebbbbbb111bb11e1ebbe.......
        .........1b111b11eb11bbbeb1bbb1e1111bebbbbbbbb11111e1ebbbe......
        ........1bbbbb1b11b1bb1be11bbb1e1e1bbbbbbbbbbbb1111e11bbbbe.....
        .......1bbb1111b11ebb11b11e1bb1e1ebbbb11111111bb1e11111bbbe.....
        ......1bb11111b11ebbb11111e1bb111bbb1111111111111b111e11bbbe....
        .....1b111eeb1b11bbb11111111bbb1bbb111111111111111bbbe111bbbe...
        ....1b111ebbb1b1ebbb111111111bbbbe111111111111111111bbbb1bbbe...
        ...1b111bbbe111ebbbb111111111bbbe1b111111111111111111bbbbbbbbe..
        ..1b11bbbbbb1e1ebbbb1e1111111bbe11bb111111111111111111bb11bbbe..
        ..1bbbbbbbbbbe1bbbbe1e1111111bb1bb1bb111111111111111eb1bb11bbe..
        .1bbbbbbbbbbb1bbbbbe1e1111111bb1bb11bb111111111111bbbeb1b111be..
        .1bbbb11bbbbbbbbbbe1e11111111b1bebb1bbbe1111111ebbb1bbeb1b111e..
        .1bbb11111bbbbbbbbe1e11111111b1bebb11bbbe11111bbb1111ebb1b1111e.
        .1bbb11111bbbbbbbbb1111111111b1bebb111bbb1111bbb11111ebbb11111e.
        1bbbb11111bbbbbbbbb1e1111111bb1beebb111bbbbbbbb11111eebbb1b111e.
        1bbbbe1111bbbbbbbbb1e1111111bb1bbebb1111bbbbbb111e1bebbbb1b111be
        1bbbbe1111bbbbbbbbe11e111111bb1bbebbb1111bbb111111be5bbbb1b111be
        1bbbbe1e11bbbebbbbee11111111bb1bb5ebbe111111111e1be775bbbb1e11be
        1bbebebe11bbbbebbbb1e1111111b1ebb57ebbe1111111e1be1775bbbb1e11be
        1bbebbbeeebbbbeebbbb1e11e111b1bbb571ebbe1111111beff775bbbb1e11be
        1bbbbebeeebbbbeebbbe1e11e111b1bbb57ffebb111111be7f775bb1bb1ee1be
        1bbbbebbbebbbbbebbbe11111111b1bbbb57f7ebb111bbe57775bbb1bb1eeebe
        .1bbbbbebbbbbbee1bbb11b1111bb1eb1bb555bebbbbbbeb555bbb11bb1eeebe
        ..bbbbbbebbbbbee1bbb11e1e11bbb1111bbbbbbebbbbebbbbbbb111b1e111be
        ..1bbbbbbbbbbe..1bbb1ebe1e1bbb1b111bbbbbbfefeeebbbb11111eeb111be
        ..eebbbbbbbebe..e1bbbbebbbebbbb1b111bbbbfeeeeeeebb1111bb1e1e1bbe
        ..eeebbbbbeee....e1bbbbebbbebbeb1bbbbbbbf1eeeeeebbbbbbb1eb11bbbe
        ..eeeeeeeeeee.....e11bbbbbbbb1bee1bbbbbbf1eeeefbbbbbbb1eeb11bbbe
        ...eeeeeeeebe........ebbbbbb111bee1bbbbbf1eeefefbbbbb1eebb1bbbbe
        ....eeeeeeebe.........ebbbbb111bbee1111ef1eeefefbbb1eeebb1bbbbbe
        ....eeeeeeee...........ebbbbb111bbeeeebefe1eefefbbeeeebb1e1ebbbe
        ....beeee1e.............ebbbe1111bbeeeeeefeeefe.eeeeebbb1e1e1ebe
        ....e1e1ee1e.............ebbbe1e11bbbbe.eefeefe.eeeebbbb1e1e1bbe
        ....e1e1e.e1e.............ebbbe1e1bbbbe...effe.e..ebbbb11111bbe.
        ....e1ee...e...............ebbbb1bebbbe....ee.e...ebbbb111ebbbe.
        .....e.....................ebeeeeeebbee......e....ebbebeebebbbe.
        ...........................ebbeeeebbbe............ebbebebbbbbbe.
        ............................ebbeeebbbe............ebbbbbbbeebe..
        ............................ebbeebbbbe............ebbbbbeeeebe..
        .............................ebebbbbbe............ebeeeeeeeebe..
        ..............................ebbbbbbe............ebeeeeeeeebe..
        ..............................ebbeeeee............ebbeeeeeeebe..
        .............................e11e1ee1e...........ebbbbeeeeebbe..
        ............................e1e1e1ee1e...........ebbbbbbbebbbe..
        .............................ee1e1ee1e...........ebbbbbbbbbeee..
        ...............................e.e..e.............eebbbbbbbb1e..
        ..................................................e1eebbebbee1e.
        .................................................e1ee1bbebe.e1e.
        .................................................e1ee1eee1e..e1e
        .................................................ee.e1eee1e..eee
        .................................................e..e1e.e1e.....
        ....................................................e1e.e1e.....
        .....................................................e..ee......
        `)
    adventure.addToTextlog("Out of the darkness, an Owlbear leaps toward your party.")
    adventure.addToTextlog("Press (A) to back away slowly.")
    adventure.addToTextlog("Press (B) to attack.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("The group begins to laugh.")
        adventure.addToTextlog("That's just Doric. She won't hurt you.")
        quest3()
    } else {
        adventure.addToTextlog("The group surrounds you with weapons drawn.")
        adventure.addToTextlog("You're going to regret attacking Doric!")
        game.over(false)
    }
}
info.onLifeZero(function () {
    game.gameOver(false)
})
info.onScore(20, function () {
    game.gameOver(true)
})
scene.setBackgroundColor(1)
adventure.changeLogColors(3, 9)
quest1()
