const inputBuscar = document.getElementById("buscador");

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
            <li><h3>Food: ${producto.nombre} <br> Calories: ${producto.calories} cal</h3></li>
            </div>`
        }
    }
    if(resultadoBusqueda.innerHTML === ""){
    resultadoBusqueda.innerHTML += `
        <div class="comida-no-encontrada" >
        <h3 class="h3-prod-no-encontrado">Sorry! we cant find your food</h3>
        </div>
    `
    }

    
}


inputBuscar.addEventListener('keyup', filtrar);
 filtrar(); 




 
