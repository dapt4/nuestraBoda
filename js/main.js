var nom;
var pas;
var telefono = 584122404287;//584246738538;
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

function whats() {
    location.href = "https://api.whatsapp.com/send?phone="+telefono+"&text=Saludos,%20" + nom.replace(/[-]/g, "%20") + "%20te%20confirma%20asistencia%20para%20la%20boda";
}

function regalo() {
    location.href = "https://api.whatsapp.com/send?phone=584246738538&text=Saludos,%20" + nom.replace(/[-]/g, "%20") + "%20quiere%20confirmar%20su%20regalo%20de%20bodas";
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

