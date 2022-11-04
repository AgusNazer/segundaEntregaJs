
const btnRecetas = document.querySelector('#boton-buscar-receta');
const container = document.querySelector('.container');




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e5be0fa71msh0fd20730b5098cfp1eb33cjsnb0b1f21e79aa',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};


const obtenerRecetas = () => {
fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
	.then(response => response.json())
	.then(result =>{
		let data = result.results;
		console.log(data)
		data.forEach(receta => {
			container.innerHTML +=
			`
			
			`
		})
	})
}

btnRecetas.onclick = () => {
	obtenerRecetas()
}


const formReceta = document.querySelector('#form-receta');
const resultadoBusqueda = document.querySelector('.resultado-busqueda') 
let searchFoods = "";
formReceta.addEventListener('submit', (e) =>{
	e.preventDefault();
	searchFoods = e.target.querySelector('input').value;
	console.log(searchFoods)
	fetchAPI();
})

async function fetchAPI (){
	const baseURL = (`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options`)
	const res = await fetch (baseURL);
	const data = await res.json();
	imprimirHTML(data);
	console.log(data);
}

function imprimirHTML (results){
	let nuevoHTML = "" ;
	results.map(result=> {
     nuevoHTML += 
	 `
	 <div class="item">
                <img class="img-receta" src="../imagenes/receta.webp" alt="">
                <div class="container-flex">
                    <h2 class="titulo">This is your recipe</h2>
                    <a class="ver-receta-boton" href="#">View recipe</a>
                </div>
                <p class="data-item">Calories: 0</p>
            </div>
	 `
	})
 resultadoBusqueda.innerHTML = nuevoHTML;
} 
 





