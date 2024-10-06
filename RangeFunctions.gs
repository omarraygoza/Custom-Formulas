/**
 * Sum range values
 *
 * @param {number|Array<Array<number>>} rango Range from cell to calculate
 * @return sume as SUM from all the values.
 * @customfunction
 */
function sumaDeValores(rango) {
  var suma = 0
  if(Array.isArray(rango)){
    rango.forEach(function(elemento){
      elemento.forEach(function(e){
        suma = suma +e
      })
    })
    return suma
  }else
    return "No es rango";
}


/**
 * Suma N cantidad a cada elemento del arreglo
 *
 * @param {number|Array<Array<number>>} rango El valor o rango de celdas a procesar
 * @param {number} valor Es el valor a sumar
 * @return El rango multiplicado por el valor.
 * @customfunction
 */
function sumarRangoEnX(rango,valor) {
  var suma = 0;
  if(Array.isArray(rango,valor)){
    rango.forEach(function(fila,indiceFila){
      fila.forEach(function(valorDeCelda,indiceColumna){
        rango[indiceFila][indiceColumna] = valorDeCelda+valor
      })
    });
      return rango;
  }else{
    return rango+valor;
  }
}


/**
 * Suma N cantidad a cada elemento del arreglo
 *
 * @param {number|Array<Array<number>>} rango El valor o rango de celdas a procesar
 * @param {number} valor a sumar
 * @return El rango multiplicado por el valor.
 * @customfunction
 */
function sumarRangoEnY(rango,valor) {
  return Array.isArray(rango) ?
      rango.map(row => row.map(cell => cell + valor)) :
      rango + valor;
}




