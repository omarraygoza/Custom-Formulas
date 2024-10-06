/*
Uso JSDoc to document your functoins and thids can appear into autocomplete
https://jsdoc.app/about-getting-started.html

More informacion:
https://developers.google.com/apps-script/guides/sheets/functions?hl=es-419
*/

/**
 * Calculate TAX 
 *
 * @param {number} value Initial value
 * @param {number} tax to calculate
 * @return Return % tax Calculate
 * @customfunction
 */
function TAXCalculate(value,tax) {
  var total = (value * tax)/100
  return total
}