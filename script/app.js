document.getElementById('btn-pin-generator').addEventListener('click', function(){
    let generatedPin = Math.random()*10000;
    let generatedPinRound = Math.round(generatedPin);
    let generatedPinString = generatedPinRound + '';
    console.log(generatedPinString);
})