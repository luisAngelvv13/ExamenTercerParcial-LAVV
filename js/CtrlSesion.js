import {
  getAuth
} from "../lib/fabrica.js";
import {
  muestraError
} from "../lib/util.js";
import {
  iniciaSesión,
  terminaSesión
} from "./seguridad.js";

const forma = document["forma"];

const avatar = document.
  querySelector("#avatar");


getAuth().onAuthStateChanged(
  muestraSesión, muestraError);


async function
  muestraSesión(usuario) {
  if (usuario && usuario.email) {
    forma.email.value =
      usuario.email || "";
    forma.nombre.value =
      usuario.displayName || "";
    avatar.src =
      usuario.photoURL || "";
    forma.terminarSesión.
      addEventListener(
        "click", terminaSesión);
  } else {
    // No ha iniciado sesión.
    iniciaSesión();
  }
}
