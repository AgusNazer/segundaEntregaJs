const inputBuscar = document.querySelector("#buscador");
const btnBuscar = document.querySelector("#btnBuscar");
const resultadoBusqueda = document.getElementById("resultadoBusqueda");


//buscar y filtrar por nombre de comida
const filtrar = () => {
    
    resultadoBusqueda.innerHTML = "";

    const texto = inputBuscar.value.toLowerCase();
   
    // Para saber si lo que escribe el usuario coincide con los objetos de mi array
    for ( let producto of comidasLista){
        let nombre = producto.nombre.toLowerCase();
       
        if(nombre.indexOf(texto) !== -1){
            resultadoBusqueda.innerHTML = `
            <div class=" comida-encontrada">
            <li><h3>Comida: ${producto.nombre} <br> Calories: ${producto.calories} cal</h3></li>
            </div>`
        }
    }
    if(resultadoBusqueda.innerHTML === ""){
    resultadoBusqueda.innerHTML += `
        <div class="comida-no-encontrada" >
        <h3 class="h3-prod-no-encontrado">Comida no encontrada</h3>
        </div>
    `
    }

    
}
btnBuscar.addEventListener('click', filtrar);
inputBuscar.addEventListener('keyup', filtrar);


filtrar();

