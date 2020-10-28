var nom;
var pas;
var invitado = document.querySelector(".invitacion_invitado");
var pases = document.querySelector(".invitacion_pases");
var fecha = document.querySelector(".invitacion_contador--dias");

function showAccounts() {
    let box = document.querySelector(".regalo_mensaje");
    box.classList.toggle("on")
}

function normalize(text) {
    return text.toLowerCase().replace(/[-]/g, " ");
}

function whats() {Saludos, quiero 
    location.href = "https://api.whatsapp.com/send?phone=584122404287&text=Saludos,%20" + nom + "%20te%20confirma%20asistencia%para%la%boda";
}

function regalo() {
    location.href = "https://wa.link/qsuqo3";
}

//Fechas inicial y final
function actFecha() {
    let Hoy = new Date()
    let Nav = new Date(Hoy.getFullYear(), 10, 21)
    let mseg_dia = 1000 * 60 * 60 * 24
    let dias
    if (Hoy.getMonth() == 11 && Hoy.getDate() > 25) {
        Nav.setFullYear(Nav.getFullYear() + 1)
    }
    dias = Math.ceil((Nav.getTime() - Hoy.getTime()) / (mseg_dia))
    fecha.textContent = dias;
}

function getData() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    nom = url.searchParams.get("nom");
    pas = url.searchParams.get("ps");
}

function init() {
    getData()

    if (nom && pas){
        invitado.textContent = normalize(nom);
        pases.textContent = pas > 1 ? "Pases: " + pas : "Pase: " + pas;
    }

    actFecha();
}

init()

