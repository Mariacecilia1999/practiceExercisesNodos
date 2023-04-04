// Los ejercicios a continuación, a menos que se indique lo contrario, deben realizarse manipulando el DOM mediante JavaScript, es decir, creando elementos y modificando sus atributos y propiedades, no definiéndolos en el documento html.

// Recordá que luego de crear los elementos deben agregarse al documento o a algún otro elemento que se encuentre en el mismo.

// Ejercicio 2: Creación de listas
// Crear un elemento desde el DOM de tipo ol

// Asignarle 3 elementos de tipo li, con lo siguientes textos:

// Home
// Nosotros
// Contacto

const create = tag => document.createElement(tag)
const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const exerciseTwo = (value) =>{
   const body = $('body')
   const ul = create('ul')
   body.appendChild(ul)
   value.forEach(menu => {
      const li = create('li')
      li.innerText += menu
      ul.appendChild(li)
   });
}
exerciseTwo(['Home', 'Nosotros', 'Contacto'])