
var rodamiento_seleccionado = $("#rodamientos_opciones");
var boton = $("#menu_consultar_rodamiento");
var boton_consultar_precio = $("#menu_consultar_precio");
var campo_respuesta = $("#respuesta_campo");
var boton_precio = $("#menu_calcular_precio");
var consultar_disponibilidad = $("#menu_consultar_disponibilidad");
var boton_regresar = $("#boton_regresar");
var boton_todos_precios = $("#boton_todos_precios");
var tabla_precios_rodamientos = $("#imagen_rodamientos_precios");
var imagen_historial_ventas = $("#imagen_rodamientos_ventas");
var boton_historial_ventas = $("#boton_historial_ventas");
var boton_orden_rodamientos = $("#boton_orden_rodamientos");
var boton_calcular_rodamientos = $("#boton_calcular_rodamientos");
var boton_retirar_rodamientos = $("#boton_retirar_rodamientos");
var retirar_rodamiento = $("#menu_retirar_rodamiento");

var container = $(".container")

var input_calcular_rodamientos = $("#calcular_rodamiento");

//Oculta la tabla de los precios de los rodamientos y el boton para mostrarlos
tabla_precios_rodamientos.hide();
boton_todos_precios.hide();
//Oculta la Consulta, y L;a Respuesta
rodamiento_seleccionado.hide();
campo_respuesta.hide();
boton.hide();
boton_precio.hide();
boton_consultar_precio.hide();
boton_regresar.hide();
imagen_historial_ventas.hide();
boton_calcular_rodamientos.hide();
retirar_rodamiento.hide();

//Oculta el input para calcular la orden de rodamientos
input_calcular_rodamientos.hide();

boton_precio.show();

//Boton que muestra la disponibilidad del rodamiento seleccionado
boton.on("click", function(event) {
  event.preventDefault();
  campo_respuesta.text("Cargando...");
  campo_respuesta.css("width", "900px");
  campo_respuesta.css("height", "150px");
  campo_respuesta.css("font-size", "70px");
  campo_respuesta.css("padding-top", "60px");

  var rodamiento_solicitado = rodamiento_seleccionado.val();
  if (rodamiento_solicitado == 6201) {
    rodamiento_disponibilidad(rodamiento_6201);
  } else if (rodamiento_solicitado == 6202) {
    rodamiento_disponibilidad(rodamiento_6202);
  } else if (rodamiento_solicitado == 6203) {
    rodamiento_disponibilidad(rodamiento_6203);
  } else if (rodamiento_solicitado == 6204) {
    rodamiento_disponibilidad(rodamiento_6204);
  } else if (rodamiento_solicitado == 608) {
    rodamiento_disponibilidad(rodamiento_608);
  } else if (rodamiento_solicitado == "carro") {
    rodamiento_disponibilidad(rodamiento_carro);
  } else {
    campo_respuesta.css("width", "900px");
    campo_respuesta.css("height", "250px");
    campo_respuesta.css("font-size", "60px");
    campo_respuesta.css("padding-top", "1px");
    campo_respuesta.html(`<p>Por Favor Introduzca Un Rodamiento, y Solo Seleccione Uno</p>`);
  }

});

//Boton que muestra el precio del rodamiento seleccionado
boton_consultar_precio.on("click", function(event) {
  event.preventDefault();
  campo_respuesta.text("Cargando...");
  campo_respuesta.css("width", "900px");
  campo_respuesta.css("height", "150px");
  campo_respuesta.css("font-size", "70px");
  campo_respuesta.css("padding-top", "60px");
  var rodamiento_solicitado = rodamiento_seleccionado.val();
  if (rodamiento_solicitado == 6201) {
    rodamiento_precio(rodamiento_6201);
  } else if (rodamiento_solicitado == 6202) {
    rodamiento_precio(rodamiento_6202);
  } else if (rodamiento_solicitado == 6203) {
    rodamiento_precio(rodamiento_6203);
  } else if (rodamiento_solicitado == 6204) {
    rodamiento_precio(rodamiento_6204);
  } else if (rodamiento_solicitado == 608) {
    rodamiento_precio(rodamiento_608);
  } else  if (rodamiento_solicitado == "carro") {
    rodamiento_precio(rodamiento_carro);
  } else {
    campo_respuesta.css("width", "900px");
    campo_respuesta.css("height", "250px");
    campo_respuesta.css("font-size", "60px");
    campo_respuesta.css("padding-top", "1px");
    campo_respuesta.html(`<p>Por Favor Introduzca Un Rodamiento, y Solo Seleccione Uno</p>`);
  }

});

//Boton que muestra el menu para consultar la disponibilidad del rodamiento seleccionado seleccionado
consultar_disponibilidad.on("click", function(event) {
  event.preventDefault();
  campo_respuesta.text("Selecciona un Rodamiento");
  consultar_disponibilidad.hide();
  boton_precio.hide();
  boton_calcular_rodamientos.hide();
  boton_orden_rodamientos.hide();
  boton_retirar_rodamientos.hide();

  boton_historial_ventas.show();
  boton_historial_ventas.val("Seleccionar Todos");
  boton.show();

  container.css("padding-top", "130px");
  campo_respuesta.css("width", "900px");
  campo_respuesta.css("height", "150px");
  campo_respuesta.css("font-size", "70px");
  campo_respuesta.css("padding-top", "60px");

  rodamiento_seleccionado.show();
  campo_respuesta.show();
  boton_regresar.show();

});

//Boton que muestra el menu para buscar el precio del rodamiento seleccionado seleccionado
boton_precio.on("click", function(event) {
  event.preventDefault();
  campo_respuesta.text("Selecciona un Rodamiento");
  boton_precio.hide();
  consultar_disponibilidad.hide();
  boton_historial_ventas.hide();
  boton_calcular_rodamientos.hide();
  boton_orden_rodamientos.hide();
  boton_retirar_rodamientos.hide();

  container.css("padding-top", "130px");
  campo_respuesta.css("width", "900px");
  campo_respuesta.css("height", "150px");
  campo_respuesta.css("font-size", "70px");
  campo_respuesta.css("padding-top", "60px");

  boton_consultar_precio.show();
  rodamiento_seleccionado.show();
  campo_respuesta.show();
  boton_todos_precios.show();
  boton_regresar.show();
});

//Boton de Regresar al Menu
boton_regresar.on("click", function() {
  boton_regresar.hide();
  rodamiento_seleccionado.hide();
  campo_respuesta.hide();
  boton.hide();
  boton_precio.hide();
  tabla_precios_rodamientos.hide();
  boton_consultar_precio.hide();
  boton_todos_precios.hide();
  imagen_historial_ventas.hide();
  input_calcular_rodamientos.hide();
  boton_calcular_rodamientos.hide();
  retirar_rodamiento.hide();

  container.css("padding-top", "600px");

  boton_retirar_rodamientos.show();
  boton_precio.show();
  boton_orden_rodamientos.show();
  consultar_disponibilidad.show();
  boton_historial_ventas.show();
  boton_historial_ventas.val("Consultar Historial");

});

//Boton de muestra todos los precio es forma de tabla
var mostrar = false;
boton_todos_precios.on("click", function() {
  if (mostrar == false) {
    mostrar = true;
    tabla_precios_rodamientos.show();
    boton_todos_precios.val("Ocultar Precios");
  } else if (mostrar == true) {
    mostrar = false;
    tabla_precios_rodamientos.hide();
    boton_todos_precios.val("Seleccionar Todos");

  }

});

let rodamientos_tabla = false;
//Boton que muestra el historial de ventas de los rodamientos
boton_historial_ventas.on("click", function() {
  boton_precio.hide();
  consultar_disponibilidad.hide();
  boton_calcular_rodamientos.hide();
  boton_orden_rodamientos.hide();
  boton_retirar_rodamientos.hide();

  if (rodamientos_tabla == false) {
    rodamientos_tabla  = true;
    imagen_historial_ventas
    imagen_historial_ventas.show();
    boton_historial_ventas.val("Ocultar Rodamientos");
  } else if (rodamientos_tabla == true) {
    rodamientos_tabla  = false;
    imagen_historial_ventas.hide();
    boton_historial_ventas.val("Seleccionar Todos");
  }

  boton_regresar.show();
});

//Boton que muestra para calcular una orden de rodamientos
boton_orden_rodamientos.on("click", function() {
  boton_orden_rodamientos.hide();
  consultar_disponibilidad.hide();
  boton_precio.hide();
  boton_historial_ventas.hide();
  boton_retirar_rodamientos.hide();

  campo_respuesta.text("Selecciona Un Rodamiento");
  container.css("padding-top", "330px");
  campo_respuesta.css("width", "900px");
  campo_respuesta.css("height", "160px");
  campo_respuesta.css("font-size", "70px");
  campo_respuesta.css("padding-top", "60px");

  input_calcular_rodamientos.val("");
  boton_calcular_rodamientos.show();
  rodamiento_seleccionado.show();
  campo_respuesta.show();
  boton_regresar.show();
  input_calcular_rodamientos.show();

});

//Boton que calcula la orden de rodamientos
boton_calcular_rodamientos.on("click", function() {
  campo_respuesta.text("Cargando...");
  var rodamiento_solicitado = rodamiento_seleccionado.val();
  var cantidad = input_calcular_rodamientos.val();
  input_calcular_rodamientos.val("");
  campo_respuesta.css("width", "900px");
  campo_respuesta.css("height", "160px");
  campo_respuesta.css("font-size", "70px");
  campo_respuesta.css("padding-top", "60px");
  if (rodamiento_solicitado == 6201) {
    calcular_orden_rodamientos(rodamiento_6201, cantidad);
  } else if (rodamiento_solicitado == 6202) {
    calcular_orden_rodamientos(rodamiento_6202, cantidad);
  } else if (rodamiento_solicitado == 6203) {
    calcular_orden_rodamientos(rodamiento_6203, cantidad);
  } else if (rodamiento_solicitado == 6204) {
    calcular_orden_rodamientos(rodamiento_6204, cantidad);
  } else if (rodamiento_solicitado == 608) {
    calcular_orden_rodamientos(rodamiento_608, cantidad);
  } else if(cantidad == "") {
    campo_respuesta.html(`Introduzca Un Valor Numerico`)
  } else if (rodamiento_solicitado == "carro") {
    calcular_orden_rodamientos(rodamiento_carro, cantidad);
  } else {
    campo_respuesta.css("width", "900px");
    campo_respuesta.css("height", "270px");
    campo_respuesta.css("font-size", "60px");
    campo_respuesta.css("padding-top", "1px");
    campo_respuesta.html(`<p>Por Favor Introduzca Un Rodamiento, y Solo Seleccione Uno</p>`);
  }

});
//Boton que muestra el menu para retirar un rodamiento de la base de datos
boton_retirar_rodamientos.on("click", function() {
  boton_retirar_rodamientos.hide();
  consultar_disponibilidad.hide();
  boton_precio.hide();
  boton_historial_ventas.hide();
  boton_retirar_rodamientos.hide();
  boton_orden_rodamientos.hide();

  campo_respuesta.text("Retira Un Rodamiento");

  container.css("padding-top", "330px");
  campo_respuesta.css("width", "900px");
  campo_respuesta.css("height", "150px");
  campo_respuesta.css("font-size", "70px");
  campo_respuesta.css("padding-top", "60px");

  input_calcular_rodamientos.val("");
  rodamiento_seleccionado.show();
  campo_respuesta.show();
  boton_regresar.show();
  input_calcular_rodamientos.show();
  retirar_rodamiento.show();

});
//Boton que retira un rodamiento de la base de datos
retirar_rodamiento.on("click", function() {
  campo_respuesta.text("Cargando...");
  var rodamiento_solicitado = rodamiento_seleccionado.val();
  var cantidad = input_calcular_rodamientos.val();
  input_calcular_rodamientos.val("");
  campo_respuesta.css("width", "900px");
  campo_respuesta.css("height", "150px");
  campo_respuesta.css("font-size", "70px");
  campo_respuesta.css("padding-top", "60px");
  if (rodamiento_solicitado == 6201) {
    rodamiento_retirar(rodamiento_6201, cantidad);
  } else if (rodamiento_solicitado == 6202) {
    rodamiento_retirar(rodamiento_6202, cantidad);
  } else if (rodamiento_solicitado == 6203) {
    rodamiento_retirar(rodamiento_6203, cantidad);
  } else if (rodamiento_solicitado == 6204) {
    rodamiento_retirar(rodamiento_6204, cantidad);
  } else if (rodamiento_solicitado == 608) {
    rodamiento_retirar(rodamiento_608, cantidad);
  } else if(cantidad == "") {
    campo_respuesta.html(`Introduzca Un Valor Numerico`)
  } else if (rodamiento_solicitado == "carro"){
    rodamiento_retirar(rodamiento_carro, cantidad);
  } else {
    campo_respuesta.css("width", "900px");
    campo_respuesta.css("height", "250px");
    campo_respuesta.css("font-size", "60px");
    campo_respuesta.css("padding-top", "1px");
    campo_respuesta.html(`<p>Introduzca Un Rodamiento, y Solo Seleccione Uno</p>`);
  }

});
