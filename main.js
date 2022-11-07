
// LOGIN: al logearse correctamente se habilitan las secciones "app" y "recipes", las cuales estaran 
// visibles en el menu hamburguesa desplegable
const nombreRegistro = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');

// ocultar y mostrar secciones "app" y "recipes" mediantes las siguientes funciones
function ocultarSecciones(){
  document.getElementById('esconderApp').style.display = 'none';
  document.getElementById('esconderRecipes').style.display = 'none';
}
ocultarSecciones()


function mostrarSecciones(){
  document.getElementById('esconderApp').style.display = 'block';
  document.getElementById('esconderRecipes').style.display = 'block';
}


form.addEventListener("submit", e => {
  e.preventDefault();
  let warnings = ""
  let entrar = false ;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  parrafo.innerHTML = ""
  if (nombreRegistro.value.length < 6) {
        warnings += `El nombre es incorrecto <br>`
        entrar = true
    
  }
  
   if(!regexEmail.test(email.value)){
     warnings += `El email no es valido <br>`
     entrar = true ;
   }
   if(password.value.length < 8){
    warnings += `La contraseña debe tener al menos 8 caracteres <br>`
    Swal.fire('ingrese una contraseña valida')
    entrar = true
   }
   if(entrar){
    parrafo.innerHTML = warnings
   }else{
    Swal.fire ('Se ha registrado correctamente, seccion APP y Recipes habilitadas.')
     parrafo.innerHTML  = "Ingreso correcto" 
     mostrarSecciones()
   }
   
 
  let nombreLocal = JSON.stringify(localStorage.setItem("usuario", nombreRegistro.value));
  let emailLocal = JSON.stringify(localStorage.setItem("email", email.value));
} ) 


 /*  seccion Comentarios */

const getComments = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const comments = await response.json();
  

  let mostrarDatos =  ``;
 
  comments.splice(20)// la reduje a 20 porque traia 500 comentarios y solo es a modo practico
  comments.forEach((comment, index) => {
      
      mostrarDatos += 
      `
      <tr class="table-primary">
      <td class=" table-secundary">${comment.email}</td>
      <td class=" table-succes">${comment.body}</td>
      </tr>
      `
  })
  document.getElementById('mostrarComentarios').innerHTML = mostrarDatos;
  
};

window.addEventListener('load', function(){
  getComments();
});




 



    
   