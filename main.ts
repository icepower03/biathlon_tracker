radio.setGroup(3);
radio.setTransmitPower(7);
serial.redirectToUSB();
let i=0;
radio.onReceivedString(function (receivedString: string) {

    serial.writeLine(receivedString);
  
})
input.onButtonPressed(Button.A, function () {
      serial.writeLine("test A");
})