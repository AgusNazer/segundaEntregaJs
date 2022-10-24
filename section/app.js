
const contenedor = document.getElementById('contenedor');
let miLista = [];

const botonVaciar = document.getElementById('vaciarLista')

const miListaContenedor = document.getElementById('miListaContenedor')

const comidasLista = [
    {id: 1, nombre: "rice", cantidad: 150, calories:59 },
    {id: 2, nombre: "chiken", cantidad: 200, calories:110 },
    {id: 3, nombre: "meat", cantidad: 200, calories:120 },
    {id: 4, nombre: "fish", cantidad: 200, calories:100 },
    {id: 5, nombre: "turkey", cantidad: 150, calories:98 },
    {id: 6, nombre: "steak", cantidad: 150, calories:100 },
    {id: 7, nombre: "bacon", cantidad: 120, calories:120 },
    {id: 8, nombre: "potato", cantidad: 200, calories:60 },
    {id: 9, nombre: "spaghetti", cantidad: 200, calories:180 },
    {id: 10, nombre: "lasagna", cantidad: 200, calories:140 },
    {id: 11, nombre: "avena", cantidad: 100, calories:300 },
    {id: 12, nombre: "cereal", cantidad: 100, calories:100 },
    {id: 13, nombre: "peanut", cantidad: 100, calories:50 },
    {id: 14, nombre: "almond", cantidad: 100, calories:90 },
    {id: 15, nombre: "cereal", cantidad: 100, calories:90 },
    {id: 16, nombre: "almond", cantidad: 100, calories:120 },
    {id: 17, nombre: "chese white", cantidad: 150, calories:150 },
    {id: 18, nombre: "tomatoes", cantidad: 100, calories:20 },
    {id: 19, nombre: "lettuce", cantidad: 100, calories:20 },
    {id: 20, nombre: "mixt salad", cantidad: 200, calories:80 },
    {id: 21, nombre: "spinach", cantidad: 100, calories:60 },
    
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
    <p>${producto.cantidad}</p>
    <p>${producto.calories}</p>
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

// Terminar este codigo de eliminar productos para el tp final
const eliminarComida = (prodId) => {
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
        <p>Cantidad : <span id="cantidad">${prod.cantidad}</span></p>
        <p>Calories : <span id="calories">${prod.calories}</span></p>
        <button onclick="eliminarDeLista(${prod.id})" class=" btn-primary botonEliminar"><i class="fas fa-trash"></i></button>
        `

        miListaContenedor.appendChild(div);
    })
}