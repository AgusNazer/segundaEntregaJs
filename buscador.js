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
        <li>Comida: ${producto.nombre} <br> Calorias: ${producto.calorias} cal</li>
        `
        }
    }
    if(resultadoBusqueda.innerHTML === ""){
    resultadoBusqueda.innerHTML += `
     <h3 class="h3-prod-no-encontrado">Producto no encontrado</h3>
    `
    }
}
btnBuscar.addEventListener('click', filtrar);
inputBuscar.addEventListener('keyup', filtrar);

filtrar();

