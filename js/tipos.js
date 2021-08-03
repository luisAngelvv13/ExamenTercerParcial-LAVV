 @typedef {Object} Rol
  @property {string} descripción
 


  @typedef {Object} Alumno
  @property {string} nombre
 


  @typedef {Object} Usuario
  @property {string[]} rolIds
  @property {string} alumnoId
 

 @ts-nocheck

  @typedef {Object} Mensaje
  @property {string} usuarioId
  @property {string} texto
  @property {firebase.firestore.Timestamp} timestamp
 

export const __tipos = 0;
