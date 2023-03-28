document.getElementById('btn-pin-generator').addEventListener('click', function(){
    
    function fourDigitPin() {
        let randomPin = Math.round(Math.random()*10000);
        let randomPinString = randomPin + '';
        return randomPinString;
    }

    if (randomPinString.length === 4){
        console.log(randomPinString);
    }

})