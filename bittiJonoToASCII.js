function muunnaBittiJono() {
    var bittiJono = document.getElementById("bittiJono").value;
    var asciiMerkki = 0;
    var kerroin = 0;
    
    if(bittiJono.length != 8) {
        alert("Error invalid input.");
    } else {
        for(let x = bittiJono.length; x > 0; x--) {
            asciiMerkki = asciiMerkki + bittiJono.charAt(x) * kerroin;
            if(kerroin == 0) {
                kerroin += 1;
            } else {
                kerroin = kerroin * 2;
            }
            console.log(asciiMerkki); // DEBUG
            console.log(kerroin + " KERROIN"); // DEBUG
        }
        document.getElementById("asciiMerkki").innerHTML = "Muunnettu merkki on: " + String.fromCharCode(asciiMerkki);
    }
}