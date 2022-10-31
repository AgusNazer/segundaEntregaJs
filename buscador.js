const inputBuscar = document.querySelector("#buscador");
const btnBuscar = document.querySelector("#btnBuscar");
const resultadoBusqueda = document.getElementById("resultadoBusqueda");

const filtrar = (e) => {
    e.preventDefault()
    /* console.log(inputBuscar.value); */
    resultadoBusqueda.innerHTML = "";

    const texto = inputBuscar.value.toLowerCase();
   
    for ( let producto of comidasLista){
        let nombre = producto.nombre.toLowerCase();
       
        if(nombre.indexOf(texto) !== -1){
            resultadoBusqueda.innerHTML = `
            <div class=" comida-encontrada">
            <li><h3>Comida: ${producto.nombre} <br> Calorias: ${producto.calorias} cal</h3></li>
            </div>`
        }
    }
    if(resultadoBusqueda.innerHTML === ""){
    resultadoBusqueda.innerHTML = `
        <div class="comida-no-encontrada" >
        <h3 class="h3-prod-no-encontrado">Comida no encontrada</h3>
        </div>
    `
    }

    
}
btnBuscar.addEventListener('click', filtrar);
inputBuscar.addEventListener('keyup', filtrar);


/* filtrar(); */

