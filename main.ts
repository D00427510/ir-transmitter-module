basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P5, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P5, 0)
    basic.pause(1000)
})
