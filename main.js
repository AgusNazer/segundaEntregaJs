
let userName = prompt("Please enter your name!");
alert( `${userName} welcome  to your calorie app!, Login or sign & enjoy a healthy life `)


//LOGIN : el login todavia no esta funcionando.
/* const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');

button.addEventListener('click', (e)=>{
   e.preventDefault()
   const data = {
    username: username.ariaValue,
    password: password.value,
   }
   console.log(data);
}) */

/* Array-Objetos */
const comidas = [
   {id: 1, name: "rice", quantity: 150, calories:59 },
   {id: 2, name: "chiken", quantity: 200, calories:110 },
   {id: 3, name: "meat", quantity: 200, calories:120 },
   {id: 4, name: "fish", quantity: 200, calories:100 },
   {id: 5, name: "turkey", quantity: 150, calories:98 },
   {id: 6, name: "steak", quantity: 150, calories:100 },
   {id: 7, name: "bacon", quantity: 120, calories:120 },
   {id: 8, name: "potato", quantity: 200, calories:60 },
   {id: 9, name: "spaghetti", quantity: 200, calories:180 },
   {id: 10, name: "lasagna", quantity: 200, calories:140 },
   {id: 11, name: "avena", quantity: 100, calories:300 },
   {id: 12, name: "cereal", quantity: 100, calories:100 },
   {id: 13, name: "peanut", quantity: 100, calories:50 },
   {id: 14, name: "almond", quantity: 100, calories:90 },
   {id: 15, name: "cereal", quantity: 100, calories:90 },
   {id: 16, name: "almond", quantity: 100, calories:120 },
   {id: 17, name: "chese white", quantity: 150, calories:150 },
   {id: 18, name: "tomatoes", quantity: 100, calories:20 },
   {id: 19, name: "lettuce", quantity: 100, calories:20 },
   {id: 20, name: "mixt salad", quantity: 200, calories:80 },
   {id: 21, name: "spinach", quantity: 100, calories:60 },
   
   ];
   console.log(comidas);


   // Este ciclo no lo utilizo por ahora
  /*  for( let i = 0; i < comidas.length; i++){
      console.log("----") 
      console.log(comidas[i].id);
      console.log(comidas[i].name);
      console.log(comidas[i].quantity);
      console.log(comidas[i].calories);
      
}  */

//recorro el array
for (const producto of comidas){
   console.log(producto.id);
   console.log(producto.comidas);
}

//ordeno las comidas de menor a mayor calorias
comidas.sort ((a,b) => {
   if(a.calories > b.calories){
       return 1;
   }
   if (a.calories < b.calories){
       return -1
   }
   return 0;

});
console.log(comidas);

//Promedio de calorias entre todas las comidas.
const caloriasPromedio = comidas.reduce((acumulador, comida) => acumulador +comida.calories, 0)
console.log(caloriasPromedio / 21);

//filtrar las comidas que tienen 100 calorias.
const calories100 = comidas.filter (calories => calories.calories == 100);
console.log(calories100);


// agregue un objeto nuevo
class Producto {
   constructor(id, name, quantity, calories){
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.calories = calories;
   }
}

const producto = new Producto ( 22, "burger", 200, 300);
console.log(producto);

/* Consulta: quiero hacer una especie de carrito de compras, solo que en vez de comprar productos, en este caso
 se irian agregando comidas a la lista al apretar en cada comida a traves de su boton, para poder ver el total de calorias de las comidas agrergadas.
 Nose si deberia crear una constante por cada objeto del array, como hice aca arriba con la class "Producto" "burger"
o si deberia utlizarlos directamente desde el array
*/

