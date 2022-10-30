
const contenedor = document.getElementById('contenedor');

let miLista = [];

const botonVaciar = document.getElementById('vaciarLista');

const miListaContenedor = document.getElementById('miListaContenedor');

const contadorLista = document.getElementById('contadorComidas');

const caloriasTotales = document.getElementById('caloriasTotales');

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('miLista')){
        miLista = JSON.parse(localStorage.getItem('miLista'))
    }
})

const comidasLista = [
    {id: 1, nombre: "🍚Arroz", cantidad: 150, calorias:59 },
    {id: 2, nombre: "🍗Pollo", cantidad: 200, calorias:110 },
    {id: 3, nombre: "🥩Carne", cantidad: 200, calorias:120 },
    {id: 4, nombre: "🐟Pescado", cantidad: 200, calorias:100 },
    {id: 5, nombre: "🦃Pavo", cantidad: 150, calorias:98 },
    {id: 6, nombre: "🥓Cerdo", cantidad: 150, calorias:100 },
    {id: 7, nombre: "🥓Bacon", cantidad: 120, calorias:120 },
    {id: 8, nombre: "🥔Papa", cantidad: 200, calorias:60 },
    {id: 9, nombre: "🍝Spaghetti", cantidad: 200, calorias:180 },
    {id: 10, nombre: "🍝Lasagna", cantidad: 200, calorias:140 },
    {id: 11, nombre: "🥣Avena", cantidad: 100, calorias:300 },
    {id: 12, nombre: "🥣Cereal", cantidad: 100, calorias:100 },
    {id: 13, nombre: "🥜Maní", cantidad: 100, calorias:50 },
    {id: 14, nombre: "🥨Almendras", cantidad: 100, calorias:90 },
    {id: 15, nombre: "🍇Pasas de uva", cantidad: 100, calorias:90 },
    {id: 16, nombre: "🥜Nueces", cantidad: 100, calorias:120 },
    {id: 17, nombre: "🧀Queso blanco", cantidad: 150, calorias:150 },
    {id: 18, nombre: "🍅Tomates", cantidad: 100, calorias:20 },
    {id: 19, nombre: "🥬Lechuga", cantidad: 100, calorias:20 },
    {id: 20, nombre: "🥗Ensalada mixta", cantidad: 200, calorias:80 },
    {id: 21, nombre: "🌾Espinaca", cantidad: 100, calorias:60 },
    
    ];
// vaciar Lista de comidas agregadas
botonVaciar.addEventListener('click', () => {
    miLista.length = 0;
   actualizarLista();
})
 comidasLista.forEach((producto) =>{
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>Cantidad : <span id="cantidad">${producto.cantidad}gr</p>
    <p>Calorias : <span id="calorias">${producto.calorias}cal</p>
    <button id= "agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar <i class="fa-solid fa-plus"></i> </button>
    `
    contenedor.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarComida(producto.id)
    })
 })

const agregarComida = (prodId) => {
    
    const item = comidasLista.find((prod) => prod.id === prodId);
    miLista.push(item);
    actualizarLista();
    console.log(item);
}

// Arreglado, ya se puede eliminar cada elemento de manera individual.
const eliminarDeLista = (prodId) => {
    const item = miLista.find((prod) => prod.id === prodId);
    const indice = miLista.indexOf(item);
    miLista.splice(indice, 1);
    actualizarLista();
}
 

//actualizar lista

const actualizarLista = () => {
    miListaContenedor.innerHTML = "";

    miLista.forEach((prod) => {
        const div = document.createElement('div');
        div.classList = ('productoEnLista');
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Cantidad : <span id="cantidad">${prod.cantidad}gr</span></p>
        <p>Calorias : <span id="calorias">${prod.calorias}cal</span></p>
        <button onclick="eliminarDeLista(${prod.id})" class="botonEliminar"><i class="fas fa-trash-alt"></i></button>
        `

        miListaContenedor.appendChild(div);

        localStorage.setItem('miLista', JSON.stringify(miLista))
    })
    contadorLista.innerText = miLista.length // para actualizar cantidad de la lista
    caloriasTotales.innerText = miLista.reduce((acc, prod)   => acc + prod.calorias, 0)
}



