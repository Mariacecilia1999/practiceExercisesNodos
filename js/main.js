// Los ejercicios a continuación, a menos que se indique lo contrario, deben realizarse manipulando el DOM mediante JavaScript, es decir, creando elementos y modificando sus atributos y propiedades, no definiéndolos en el documento html.

// Recordá que luego de crear los elementos deben agregarse al documento o a algún otro elemento que se encuentre en el mismo.

// Ejercicio 3: Botones
// Por cada ítem de la siguiente lista, crear un botón con el texto de dicho ítem. Al clickear un botón, debe aparecer un alert que diga Has clickeado el mes X, dependiendo del mes clickeado (por ejemplo, Has clickeado el mes: Mayo)

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 


const create = tag => document.createElement(tag)
const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
const body = $('body')

const buttons = (meses) =>{
   meses.forEach( month => {
      const button = create('button')
      button.innerText += month
      body.appendChild(button)
      button.onclick = function(){
         alert(month)
      }
   });
}
buttons(meses)

