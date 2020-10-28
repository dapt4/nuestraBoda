var invitado = document.querySelector("#invitado");
var pases = document.querySelector("#pases");
var result = document.querySelector("#result");


function generar() {
    result.value = location.host+"/?nom=" + invitado.value + "&ps=" + pases.value;
}

// https://dapt4.github.io/nuestraBoda/