/*@author:Erick14911
 * Tipo de Variable: ([ var, let, const ], [symbol(); .valueOf();]) typeof, instanceof
 * Cambio de Variable: string(); parseInt(); parseFloat(); Number(); BigInt() 
 * Cambio de String: .toString(); .toUpperCase(); .toLowerCase(); .length;
 * Concatena: .concat(); 
 * Busquedas: .charAt(); .indexOf(""); .lastIndexOf(""); .match(/word/g); .includes("");
 * Remplazo: .substr(start, end); .slice(start, end); .replace("",""); 
 * Cortar: .trim(); .splice(indice, numElementos);
 * No es un numero: isNaN();  DECIMALES: numero.toFixed();
 * Plantilla: = `Texto con ${ }`;
 *
 * Agregar Elemento a Array: (.push(); .unshift()) (.pop(); shift();) { = [...object, value]; }
 * Ordenamientos: .sort((a, b) =>{ return a - b }); //.reverse();
 *
 * Hacer Array:  .split(" "); .trim();
 * Hacer String: .join()
 *
 * Rest y Spread son arreglos de n elementos, se indican con: ...name
 *
 * Funcion anonima es una funcion que puede pasarse como parametro o igualarse a una variable: 
 * function(){ arguments.length } | const fun = () => {} | function.toString();
 * ObjJson: let object = { key1: '', key2: '' } delete object.key1;  
 *
 * Eventos: .addEventListener('event', function, boolean(bubbling, capturing)); 
 * .click .dblclick  .keydown  .keypress  .keyup.key  .keycode  .change   
 * .focus .blur .hover .mouseover .mouseout .mousedown .mouseup .mousemove
 *
 * Efectos:
 * .show('fast'); .hide('scale'); .effect("explode");
 * .fadeOut('slow'); .fadeIn('normal'); .fadeTo('blind',1.0); .fadeToggle(shake);
 * .slideUp('drop'); .slideOut('fold'); .slideToggle('puff');  
 *
 * MATH OBJECT ${}:
 * Math.sqrt(); Math.max(); Math.min(); Math.random(); Math.round(); Math.ceil();
 *
 * UI jQuery: https://www.heteroclito.fr/modules/tooltipster/ 
 * .draggable(); .resizable(); .selectable(); .tooltip(); 
 * .datepicker(); .dialog(); .tabs();
 * .sorteable({update: function(event, ui){}});
 * .droppable({drop: function(){}});
 */
//import { alias } from "./" // export { alias: function, }

'use strict';

window.addEventListener('load', () => {

  //Intersection Observer
  const imagen1 = document.getElementById('imagen1');
  const cargarImagen = (entradas, observador) => {
    entradas.forEach((entrada ) => {
      if(entrada.isIntersecting){
        entrada.target.classList.add('visible');
      }else{
        entrada.target.classList.remove('visible');
      }
    });
  }
  const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
  });
  observador.observe(imagen1);
});


