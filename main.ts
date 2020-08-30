radio.setGroup(3);
radio.setTransmitPower(7);
serial.redirectToUSB();

radio.onReceivedString(function (receivedString: string) {
    serial.writeLine(receivedString); 
})
input.onButtonPressed(Button.A, function () {
      serial.writeLine("test A");
})