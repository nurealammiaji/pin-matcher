// Four Digit PIN Generator

function fourDigitPin() {
    let pin = pinGenerator();
    let pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
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


// PIN Input Pad

document.getElementById('keypad').addEventListener('click', function(event){
    let keyPad = event.target.innerText;
    console.log(keyPad);
})