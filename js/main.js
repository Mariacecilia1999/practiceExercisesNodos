// Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem. Cada vez que se clickea el ítem, debe ir cambiando de color, siguiendo este orden: gris -> celeste -> amarillo -> rojo. Cuando llega al último color y se lo vuelve a clickear, debe volver al primer color.

const tareas = [
   'Comprar comida',
   'Estudiar para examen',
   'Pagar impuestos',
   'Pasear a perro',
   'Comprar entradas para el cine',
 ]

let ul
let li

const changeColorYellow = (valueThree) =>{
   const allLi = document.querySelectorAll('li')
   allLi.forEach(clicLi =>{
      clicLi.onclick = function(){
         clicLi.classList.remove('blue')
         clicLi.classList.add(`${valueThree}`)
         changeColorRed('red')
      }
   })
 }




const changeColorBlue = (valueTwo) =>{
   const allLi = document.querySelectorAll('li')
   allLi.forEach(clicLi =>{
      clicLi.onclick = function(){
         clicLi.classList.remove('red')
         clicLi.classList.add(`${valueTwo}`)
         changeColorYellow('yellow')
      }
   })
 }

const changeColorRed = (valueOne) =>{
   const allLi = document.querySelectorAll('li')
   allLi.forEach(clicLi =>{
      clicLi.onclick = function(){
         clicLi.classList.remove('yellow')
         clicLi.classList.add(`${valueOne}`)
         changeColorBlue('blue')
      }
   })
 }





 const listTask = (values) =>{
   const body = document.querySelector('body')
    ul = document.createElement('ul')
   body.appendChild(ul)
   values.forEach(value => {
      li = document.createElement('li')
      ul.appendChild(li)
      li.innerText=value
      changeColorRed('red')
      
   });

 }
 listTask(tareas)



