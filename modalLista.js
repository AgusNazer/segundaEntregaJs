
// modales de la seccion app donde se agregan las comidas.
const contenedorModal = document.getElementsByClassName('modalContenedor')[0]
const botonAbrir = document.getElementById('botonLista')
const botonCerrar = document.getElementById('listaCerrar')
const modalLista = document.getElementsByClassName('modalLista')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalLista.addEventListener('click', (event) => {
    event.stopPropagation() 
})