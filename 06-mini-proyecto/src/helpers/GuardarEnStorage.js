/**
 * Generic method to save key/value elements in local storage
 * @param {string} key
 * @param {*} value
 * @returns value element saved in local storage
 */
export const GuardarEnStorage = (key, value) => {
  //obtener elementos en el local storage
  let elementos = JSON.parse(localStorage.getItem(key));
  //verificar si es un array
  if (Array.isArray(elementos)) {
    // agregar peli si es un array
    elementos.push(value);
  } else {
    //crear array sino es un array
    elementos = [value];
  }
  //guardar objeto
  localStorage.setItem(key, JSON.stringify(elementos));

  //devolver objeto guardado
  return value;
};
