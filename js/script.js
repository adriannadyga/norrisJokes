'use strict'

var url = 'http://api.icndb.com/jokes/random'; //zmienna z adresem dowcipu

var button = document.getElementById('get-joke'); //znalezienie odpowiedniego przycisku na stronie
button.addEventListener('click', function(){  //nasłuchiwanie zdarzenia
    getJoke(); //wykonywana funkcja
});

var paragraph = document.getElementById('joke'); //do zmiennej paragraph przypisany jest element DOM p odpowiadający za wyświetlenie dowcipu

//funkcja joke
function getJoke() {
    var xhr = new XMLHttpRequest(); //nowa instancja obiektu XMLHttpRequest
    xhr.open('GET', url); //otwarcie łącza z wybranym adresem
    xhr.addEventListener('load', function(){ //podpięcie nasłuchiwania na odpowiedź serwera
        var response = JSON.parse(xhr.response); //sparsowanie na język JS odpowiedzi od serwera w formacie
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
}