let tiempo = 0
input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        basic.pause(1000)
        tiempo += 1
        basic.showNumber(tiempo)
    }
})
input.onButtonPressed(Button.AB, function () {
    tiempo = 0
    basic.showNumber(tiempo)
})
