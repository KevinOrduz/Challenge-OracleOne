function encriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    eliminarFondo();
}
var btn = document.querySelector("#botonEncriptar");
btn.onclick = encriptar;

function desencriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
eliminarFondo();
}
var btn2 = document.querySelector("#botonDesencriptar");
btn2.onclick = desencriptar;

function copiar() {
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}

var btn3 = document.querySelector("#botonCopiar");
btn3.onclick = copiar;

function eliminarFondo() {
    var fondo = document.getElementById("fondo-textoDesencriptado");
    var parrafo = document.getElementById("parrafo-textoDesencriptado");
    var btncopiar = document.getElementById("botonCopiar");

    fondo.remove();
    parrafo.remove();
    btncopiar.style.display = "flex";
}