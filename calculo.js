//Clase para crear los rodamientos
class Rodamiento {
  constructor(modelo, precio, disponible, vendido, comprado) {
    this._modelo = modelo;
    this._precio = precio;
    this._disponible = disponible;
    this._vendido = vendido;
    this._comprado = comprado
  }
  get modelo() {
    return this._modelo;
  }
  get precio() {
    return this._precio;
  }
  get disponible() {
    return this._disponible;
  }
  get vendido() {
    return this._vendido;
  }
  get comprado() {
    return this._comprado;
  }

  retirar(cantidad) {
      this._disponible -=cantidad;
  }


}
var rodamiento_6201 = new Rodamiento("Rodamientos 6201-2RS", 1.72, 244, 156, 400);
var rodamiento_6202 = new Rodamiento("Rodamientos 6202-2RS", 1.96, 166, 134, 300);
var rodamiento_6203 = new Rodamiento("Rodamientos 6203-2RS", 2.32, 240, 160, 400);
var rodamiento_6204 = new Rodamiento("Rodamientos 6204-2RS", 2.60, 150, 150, 300);
var rodamiento_608 = new Rodamiento("Rodamientos 608-2RS", 1.36, 320, 80, 400);
var rodamiento_carro = new Rodamiento("Rodamientos DAC39720037", 12.04, 190, 10, 200);

//Promise que comprueba si hay rodamientos disponibles
const comprobar_disponibilidad = (rodamiento) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rodamiento.disponible > 0) {
        resolve(`Rodamientos Disponibles: ${rodamiento.disponible}`);
      } else {
        reject(`Ya No Hay Rodamientos Disponibles`);
      }

    }, 1000);
  });
};

//Funcion que espera al Promise que comprueba si hay rodamientos disponibles
const rodamiento_disponibilidad = async (rodamiento) => {
  try {
    const respuesta = await comprobar_disponibilidad(rodamiento);
    respuesta_rodamiento(respuesta, rodamiento);

  } catch(error) {
    return error;

  }
};

//Promise que regresa el precio del rodamiento rodamiento_seleccionado
const buscar_precio_rodamiento = (rodamiento) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rodamiento.disponible > 0) {
        resolve(`Precio De Venta: ${rodamiento.precio}$`);
      } else {
        reject(`Ya No Hay Rodamientos Disponibles`);
      }

    }, 1000);
  });

};

//Funcion que espera el Promise para buscar y mostrar el precio del rodamiento seleccionado
const rodamiento_precio = async (rodamiento) => {
  try {
    const respuesta = await buscar_precio_rodamiento(rodamiento);
    comprobar_precio_rodamiento(respuesta, rodamiento);

  } catch(error) {
    return error;
  }

};

//Promise que calcula la orden de rodamientos, y comprueba si el input es un numero
const orden_rodamientos = (valor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (valor / 1 == valor) {
        resolve(valor);
      } else {
        reject("Por Favor Introduzca Un Valor Numerico");
      }

    }, 1000);
  });

};

//Funcion que espera el Promise para calcular la orden de rodamientos
const calcular_orden_rodamientos = async (rodamiento, valor) => {
  try {
    const cantidad = await orden_rodamientos(valor);
    const respuesta = rodamiento.precio * cantidad;
    respuesta_orden_rodamientos(respuesta, rodamiento, valor);


  } catch(error) {
    campo_respuesta.html(`${error}`)
  }

};
//Promise que retira un rodamiento de la base de rodamientos
const retira_un_rodamiento = (valor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (valor / 1 == valor) {
        resolve(valor);

      } else {
        reject("Por Favor Introduzca Un Valor Numerico");
      }

    }, 1000);
  });

};

//Funcion que actualiza los rodamientos vendidos al utilizar el Promise de retirar un rodamiento
const actualizar = (valor, rodamiento) => {
  let rodamientos_vendidos = rodamiento.vendido;
  rodamientos_vendidos+=valor;
  rodamiento._vendido = rodamientos_vendidos;
};

//Funcion que espera el promise de retirar un rodamiento de la base de datos
const rodamiento_retirar = async (rodamiento, valor) => {
  try {
    const respuesta = await retira_un_rodamiento(valor);
    rodamiento.retirar(respuesta);
    let nuevo_valor = respuesta / 1;
    actualizar(nuevo_valor, rodamiento);

    respuesta_retirar_rodamiento(respuesta, rodamiento);

  } catch (error) {
    campo_respuesta.html(`${error}`)
  }

};
