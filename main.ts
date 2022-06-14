function scroll () {
    for (let i = 0; i <= 4; i++) {
        clearColumn(i)
        if (i != 4) {
            for (let v = 0; v <= 4; v++) {
                copyPixel(i + 1, v, i, v)
            }
        }
    }
}
function copyPixel (srcX: number, srcY: number, destX: number, destY: number) {
    led.plotBrightness(destX, destY, led.pointBrightness(srcX, srcY))
}
function clearColumn (column: number) {
    for (let j = 0; j <= 4; j++) {
        led.plotBrightness(column, j, 0)
    }
}
basic.forever(function () {
    scroll()
    if (input.soundLevel() / 51 >= 1) {
        led.plotBrightness(4, 4, 255)
    } else {
        led.plotBrightness(4, 4, input.soundLevel() % 51 * 5)
    }
    if (input.soundLevel() / 51 >= 2) {
        led.plotBrightness(4, 3, 255)
    } else {
        if (input.soundLevel() > 51) {
            led.plotBrightness(4, 3, input.soundLevel() % 51 * 5)
        } else {
            led.plotBrightness(4, 3, 0)
        }
    }
    if (input.soundLevel() / 51 >= 3) {
        led.plotBrightness(4, 2, 255)
    } else {
        if (input.soundLevel() > 102) {
            led.plotBrightness(4, 2, input.soundLevel() % 51 * 5)
        } else {
            led.plotBrightness(4, 2, 0)
        }
    }
    if (input.soundLevel() / 51 >= 4) {
        led.plotBrightness(4, 1, 255)
    } else {
        if (input.soundLevel() > 153) {
            led.plotBrightness(4, 1, input.soundLevel() % 51 * 5)
        } else {
            led.plotBrightness(4, 1, 0)
        }
    }
    if (input.soundLevel() / 51 >= 5) {
        led.plotBrightness(4, 0, 255)
    } else {
        if (input.soundLevel() > 204) {
            led.plotBrightness(4, 0, input.soundLevel() % 51 * 5)
        } else {
            led.plotBrightness(4, 0, 0)
        }
    }
})
