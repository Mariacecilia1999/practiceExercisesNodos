// Los ejercicios a continuación, a menos que se indique lo contrario, deben realizarse manipulando el DOM mediante JavaScript, es decir, creando elementos y modificando sus atributos y propiedades, no definiéndolos en el documento html.

// Recordá que luego de crear los elementos deben agregarse al documento o a algún otro elemento que se encuentre en el mismo.

// Ejercicio 2: Listas anidadas
// Replica la siguiente estructura HTML creando nodos mediante javascript

// <ul>
//   <li>Verduras</li>
//   <li>Garbanzos</li>
//   <li>
//     Frutas
//     <ul>
//       <li>Manzanas</li>
//       <li>Naranjas</li>
//       <li>Bananas</li>
//       <li>Frutillas</li>
//     </ul>
//   </li>
// </ul>

const create = tag => document.createElement(tag)
const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
const body = $('body')

const nestedList = () =>{
   body.innerHTML = `<ul>
     <li>Verduras</li>
     <li>Garbanzos</li>
     <li>
       Frutas
       <ul>
         <li>Manzanas</li>
         <li>Naranjas</li>
         <li>Bananas</li>
         <li>Frutillas</li>
       </ul>
     </li>
   </ul>`
}
nestedList()