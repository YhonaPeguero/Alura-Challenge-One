/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

const botonEncriptar = document.querySelector("#btn-encriptar");
const textoIngresado = document.querySelector("#input-texto");
const botonDesencriptar = document.querySelector("#btn-desencriptar");
const botonCopiar = document.querySelector("#btn-copy");
const copiarTexto = document.querySelector("#msg");

botonEncriptar.addEventListener("click", function (e) {
  event.preventDefault();

  validarTexto(textoIngresado);
  encriptar(textoIngresado);
  textoIngresado.value = "";
});

botonDesencriptar.addEventListener("click", function (e) {
  event.preventDefault();

  validarTexto(textoIngresado);
  desEncriptar(textoIngresado);
  textoIngresado.value = "";
});

botonCopiar.addEventListener("click", function (e) {
  event.preventDefault();
  copiar(copiarTexto);
});

function encriptar(texto) {
  var textoAEncriptar = texto.value;

  textoAEncriptar = textoAEncriptar.toLowerCase();

  textoAEncriptar = textoAEncriptar.replaceAll("e", "enter");
  textoAEncriptar = textoAEncriptar.replaceAll("i", "imes");
  textoAEncriptar = textoAEncriptar.replaceAll("a", "ai");
  textoAEncriptar = textoAEncriptar.replaceAll("o", "ober");
  textoAEncriptar = textoAEncriptar.replaceAll("u", "ufar");

  document.querySelector("#msg").value = textoAEncriptar;
}

function desEncriptar(texto) {
  var textoADesencriptar = texto.value;

  textoADesencriptar = textoADesencriptar.toLowerCase();

  textoADesencriptar = textoADesencriptar.replaceAll("enter", "e");
  textoADesencriptar = textoADesencriptar.replaceAll("imes", "i");
  textoADesencriptar = textoADesencriptar.replaceAll("ai", "a");
  textoADesencriptar = textoADesencriptar.replaceAll("ober", "o");
  textoADesencriptar = textoADesencriptar.replaceAll("ufar", "u");

  document.querySelector("#msg").value = textoADesencriptar;
}

function copiar(input) {
  input.focus();
  document.execCommand("selectAll");
  document.execCommand("copy");
}

function validarTexto(texto) {
  var reglaValidacion = new RegExp("[°!$%&/()=?¡'¿áéíóú]|[0-9]", "g");
  var ingresado = texto.value;

  if (ingresado == "") {
    alert("Por favor, ingrese el texto a encriptar.");
    return false;
  } else {
    if (!reglaValidacion.test(ingresado)) {
      return true;
    } else {
      alert(
        "No se permiten letras con acentos, números ni caracteres especiales, por favor intente de nuevo."
      );
      return false;
    }
  }
}
