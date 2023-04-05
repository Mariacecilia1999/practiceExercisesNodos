// Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem y un botón que diga Eliminar. Al clickear el botón, se debe eliminar de la lista el nodo correspondiente.


const tareas = [
   'Comprar comida',
   'Estudiar para examen',
   'Pagar impuestos',
   'Pasear a perro',
   'Comprar entradas para el cine',
 ]


const tasks = (values) =>{
   const body = document.querySelector('body')
   const ul = document.createElement('ul')
   body.appendChild(ul)
   for(const task of values){
      const li = document.createElement('li')
      li.innerHTML += task
      ul.appendChild(li)
   }
}
tasks(tareas)