function fourDigitPin() {
    let pin = pinGenerator();
    let pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        console.log(pin);
        return fourDigitPin();
    }
}

function pinGenerator() {
    let generatedPin = Math.round(Math.random()*10000);
    return generatedPin;
}

document.getElementById('btn-pin-generator').addEventListener('click', function(){
    let pin = fourDigitPin();

    let pinDisplay = document.getElementById('pin-display');
    pinDisplay.value = pin;
})