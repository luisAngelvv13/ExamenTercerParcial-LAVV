"use strict";
var forma = document.getElementById("forma"),
        campos = ["nombre", "secreto", "navegador", "email",
          "usuario", "url", "telefono", "verso"],
        salidas = ["salidaNombre", "salidaSecreto", "salidaNavegador",
          "salidaEmail", "salidaUsuario", "salidaUrl", "salidaTelefono",
          "salidaVerso"];
forma.addEventListener("submit", procesa, false);
function procesa() {
  for (var i = 0, longitud = campos.length; i < longitud; i++) {
    var campo = forma[campos[i]];
    var salida = document.getElementById(salidas[i]);
    salida.value = campo.value;
  }
}
 