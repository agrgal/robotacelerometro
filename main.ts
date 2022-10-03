input.onGesture(Gesture.ThreeG, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 125)
    basic.pause(1000)
})
basic.showIcon(IconNames.Happy)
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
for (let index = 0; index < 12; index++) {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(200)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(200)
}
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
