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
    event.stopPropagation() //cuando clickeo sobre el modal se finaliza la propagacion del click a los elementos
    //padre
})