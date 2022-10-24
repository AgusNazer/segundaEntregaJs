
// LOGIN


const nombreRegistro = document.getElementById('name')
const email = document.getElementById('email')
const pass = document.getElementById('password')
const form = document.getElementById('form')
const parrafo = document.getElementById('warnings')




// para guardar en el localStorage clickear dos veces el boton de "agregar" (arreglarlo para el tp final)
form.addEventListener("submit", e => {
  e.preventDefault();
  let warnings = ""
  let entrar = false ;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  parrafo.innerHTML = ""
  if (nombreRegistro.value.length < 6) {
        warnings += `El nombre no es valido <br>`
        entrar = true
    
  }
  
   if(!regexEmail.test(email.value)){
     warnings += `El email no es valido <br>`
     entrar = true ;
   }
   if(pass.value.length < 8){
    warnings += `La contraseña debe tener al menos 8 caracteres <br>`
    entrar = true
   }
   if(entrar){
    parrafo.innerHTML = warnings
   }else{
    parrafo.innerHTML  = "Ingreso correcto"
   }
   
   // LOCALSTORAGE
   const guardarRegistro = document.getElementById('btnRegistro');


 guardarRegistro.addEventListener("click", (e) => {
  e.preventDefault();
  let contador = 0 ;
  let nombreLocal = JSON.stringify(localStorage.setItem("usuario", nombreRegistro.value));
  let emailLocal = JSON.stringify(localStorage.setItem("email", email.value));
} )

/*  console.log(nombreLocal);
  console.log(emailLocal); */
 })
 









 



    
   