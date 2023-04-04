// Los ejercicios a continuación, a menos que se indique lo contrario, deben realizarse manipulando el DOM mediante JavaScript, es decir, creando elementos y modificando sus atributos y propiedades, no definiéndolos en el documento html.

// Recordá que luego de crear los elementos deben agregarse al documento o a algún otro elemento que se encuentre en el mismo.

// Ejercicio 1 : Creación de nodo.
// Crear un nodo de tipo h1
// Asignarle un texto Hola DOM!
// Colocarle un color, un tamaño de texto y una familia de fuente a elección.

const create = tag => document.createElement(tag)
const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const exerciseOne = (value) =>{
   //Capturing body using querySelector
   const body = $('body')
   const h1 = create('h1')

   // I assign the text 'Hola DOM'
   h1.innerText = value

   //I add the class to the h1
   h1.classList.add('classExerciseOne')

   //I add the <h1> as a child 
   body.appendChild(h1)
   console.log(h1)
}
exerciseOne('Hola DOM!')