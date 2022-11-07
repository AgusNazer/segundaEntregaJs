
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
    {id: 1, nombre: "🍚Rice", cantidad: 150, calories:59 },
    {id: 2, nombre: "🍗Chiken", cantidad: 200, calories:110 },
    {id: 3, nombre: "🥩Meat", cantidad: 200, calories:120 },
    {id: 4, nombre: "🐟Fish", cantidad: 200, calories:100 },
    {id: 5, nombre: "🦃Turkey", cantidad: 150, calories:98 },
    {id: 6, nombre: "🥓Bacon", cantidad: 150, calories:100 },
    {id: 7, nombre: "🥚Eggs", cantidad: 120, calories:120 },
    {id: 8, nombre: "🥔Potato", cantidad: 200, calories:60 },
    {id: 9, nombre: "🍝Spaghetti", cantidad: 200, calories:180 },
    {id: 10, nombre: "🍝Lasagna", cantidad: 200, calories:140 },
    {id: 11, nombre: "🥣Avena", cantidad: 100, calories:300 },
    {id: 12, nombre: "🥣Cereal", cantidad: 100, calories:100 },
    {id: 13, nombre: "🥜Peanut", cantidad: 100, calories:50 },
    {id: 14, nombre: "🥨Almond", cantidad: 100, calories:90 },
    {id: 15, nombre: "🍇Raisins", cantidad: 100, calories:90 },
    {id: 16, nombre: "🥜Nuts", cantidad: 100, calories:120 },
    {id: 17, nombre: "🧀White cheese", cantidad: 150, calories:150 },
    {id: 18, nombre: "🍅Tomatoes", cantidad: 100, calories:20 },
    {id: 19, nombre: "🥬Lettuce", cantidad: 100, calories:20 },
    {id: 20, nombre: "🥗Mix salad", cantidad: 200, calories:80 },
    {id: 21, nombre: "🌾Spinac", cantidad: 100, calories:60 },
    
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
    <br>
    <h3>${producto.nombre}</h3>
    <p>Quantity : <span id="Quantity">${producto.cantidad}gr</p>
    <p>Calories : <span id="Calories">${producto.calories}cal</p>
    <button id= "agregar${producto.id}" class="boton-agregar btn btn-primary">Add <i class="fa-solid fa-plus"></i> </button>
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
        <p>Quantity : <span id="Quantity">${prod.cantidad}gr</span></p>
        <p>Calories : <span id="Calories">${prod.calories}cal</span></p>
        <button onclick="eliminarDeLista(${prod.id})" class="botonEliminar"><i class="fas fa-trash-alt"></i></button>
        `

        miListaContenedor.appendChild(div);

        localStorage.setItem('miLista', JSON.stringify(miLista))
    })
    contadorLista.innerText = miLista.length // para actualizar cantidad de la lista
    caloriasTotales.innerText = miLista.reduce((acc, prod)   => acc + prod.calories, 0)
}
