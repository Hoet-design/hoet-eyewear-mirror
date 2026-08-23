// De pas-app is driehonderd kilobyte javascript op een ander domein, en zolang die
// binnenkomt en uitgevoerd wordt, komt de browser niet toe aan het tekenen van deze
// pagina: het eerste beeld liet vier seconden op zich wachten voor een kop van twee
// kilobyte. Dat is geen traag plaatje maar een bezette hoofddraad.
//
// Daarom start het iframe pas nadat deze pagina zelf klaar is. De bezoeker ziet de
// kop meteen in plaats van vier seconden wit, en de pas-app begint een tel later aan
// hetzelfde werk. Zonder javascript staat hij er gewoon meteen: dan is er ook geen
// script dat de hoofddraad bezet houdt.
addEventListener('load', function () {
    var frame = document.getElementById('mirror');
    frame.src = frame.dataset.src;
});
