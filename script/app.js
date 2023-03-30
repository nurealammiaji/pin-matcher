function fourDigitPin() {
    let pin = pinGenerator();
    let pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        fourDigitPin();
    }
}

function pinGenerator() {
    let generatedPin = Math.round(Math.random()*10000);
    return generatedPin;
}

document.getElementById('btn-pin-generator').addEventListener('click', function(){
    let pinGen = fourDigitPin();
})