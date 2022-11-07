
const buscarReceta = document.querySelector('#formSearch');

let inputValue = "";
buscarReceta.addEventListener('submit', (e) =>{
	e.preventDefault();
	inputValue = e.target.querySelector('input').value;
	
	getAPI();
});

async function getAPI () {
    id = 'c8c9ed35';
    key = 'e303da7b5d838fc745fb72f34159ff50';
	const url =  `https://api.edamam.com/search?q=${inputValue}&app_id=${id}&app_key=${key}&to=5`;
	res = await fetch(url);
    data = await res.json()
	console.log(data)
	generarHTML(data.hits)
	
} 

function generarHTML(results){
	mostrarHTML = '';
	results.map(result => {
		mostrarHTML += 
		`
		 <div class="item col-5 my-5 text-center align-items-center">
		  <div class= "card">
			<div class= "card-body cards">
                <img class="img-receta img-fluid" src="${result.recipe.image}" alt="">
                <div class="">
                    <h2 class="titulo">${result.recipe.label}</h2>
                    <a class="btn btn-success align-items-center btn-ver-receta" href="${result.recipe.url}" target="_blank">View recipe</a>
                </div>
				<p class="data-item">Meal type: ${result.recipe.mealType}</p>
                <p class="data-item">Calories: ${result.recipe.calories.toFixed(0)}</p>
           </div>
          </div>
        </div>
        `
		
		
		document.querySelector('#mostrarDesdeJS').innerHTML = mostrarHTML;
	})
}


