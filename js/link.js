var invitado = document.querySelector("#invitado");
var pases = document.querySelector("#pases");
var result = document.querySelector("#result");

function normalize(text) {
    return text.toLowerCase().replace(/[ ]/g, "-");
}

function generar() {
    result.value = "https://dapt4.github.io/nuestraBoda/" + "?nom=" + normalize(invitado.value) + "&ps=" + normalize(pases.value);
}

function copiar() {
    result.select();
    document.execCommand("copy");
} 