//Muestra la disponibilidad del rodamiento seleccionado
const respuesta_rodamiento = (respuesta, rodamiento) => {
  campo_respuesta.html(`${rodamiento.modelo}<br>
    Rodamientos Comprados Desde China: ${rodamiento.comprado}<br>
    ${respuesta}<br>
    Rodamientos Vendidos: ${rodamiento.vendido}</p>`);
  campo_respuesta.css("font-size", "80px");
  campo_respuesta.css("padding-top", "50px");
  campo_respuesta.css("height", "360px");
  campo_respuesta.css("width", "900px");


};
//Muestra el precio del rodamiento seleccionado
const comprobar_precio_rodamiento = (respuesta, rodamiento) => {
  campo_respuesta.html(`<p>${rodamiento.modelo}</p><p>${respuesta} c/u</p>`)
  campo_respuesta.css("font-size", "80px");
  campo_respuesta.css("padding-top", "0px");
  campo_respuesta.css("height", "370px");
  campo_respuesta.css("width", "900px");

};
//Muestra la orden del rodamiento seleccionado
const respuesta_orden_rodamientos = (respuesta, rodamiento, valor) => {
  campo_respuesta.html(`<p>Los ${valor} ${rodamiento.modelo}<br>
    Seria un Total de ${respuesta}$</p>`);
  campo_respuesta.css("font-size", "80px");
  campo_respuesta.css("padding-top", "1px");
  campo_respuesta.css("height", "320px");
  campo_respuesta.css("width", "900px");

};
//Muestra el mensaje exitoso de la orden de rodamientos retirado de la base de datos
const respuesta_retirar_rodamiento = (respuesta, rodamiento) => {
  campo_respuesta.html(`<p>Se Actualizo la Base De Datos Correctamente<br>
    Se Retiraron ${respuesta} ${rodamiento.modelo} del Inventario</p>`);
  campo_respuesta.css("font-size", "80px");
  campo_respuesta.css("padding-top", "0px");
  campo_respuesta.css("height", "410px");
  campo_respuesta.css("width", "900px");
};
