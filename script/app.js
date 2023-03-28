document.getElementById('btn-pin-generator').addEventListener('click', function(){
    let randomPin = Math.round(Math.random()*10000);
    let randomPinString = randomPin + '';
    if (randomPinString.length === 4){
        console.log(randomPinString);
    }

})