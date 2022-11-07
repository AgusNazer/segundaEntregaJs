
let tempValor = document.getElementById('tempValor');
let tempDescripcion = document.getElementById('tempDescripcion');
let ubicacion = document.getElementById('ubicacion');
let iconoAnimado = document.getElementById('iconoAnimado');
let vientoVel = document.getElementById('vientoVel');

window.addEventListener('load', () => {
    let lon
    let lat


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion => {
            let lon = posicion.coords.longitude
            let lat = posicion.coords.latitude

           // por ID - actual
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8b1d53170411c672e7a1c9fc22df368a`
            
            fetch(url)
            .then( response => {return response.json()})
            .then(data => {
                
            //console.log(data)
                 
                let temp = Math.round(data.main.temp -270)
                  tempValor.textContent = `${temp - 4}° C `

                  let desc = data.weather[0].description
                  tempDescripcion.textContent = desc.toUpperCase()
                 
                  ubicacion.textContent = data.name
                  
                  vientoVel.textContent = `${data.wind.speed} k/h`
                
            //iconos dinámicos
            switch (data.weather[0].main) {
            case 'Thunderstorm':
              iconoAnimado.src='animated/thunder.svg'
              
              break;
            case 'Drizzle':
              iconoAnimado.src='animated/rainy-2.svg'
              
              break;
            case 'Rain':
              iconoAnimado.src='animated/rainy-7.svg'
              
              break;
            case 'Snow':
              iconoAnimado.src='animated/snowy-6.svg'
                
              break;                        
            case 'Clear':
                iconoAnimado.src='animated/day.svg'
                
              break;
            case 'Atmosphere':
              iconoAnimado.src='animated/weather.svg'
                
                break;  
            case 'Clouds':
                iconoAnimado.src='animated/cloudy-day-1.svg'
                
                break;  
            default:
              iconoAnimado.src='animated/cloudy-day-1.svg'
              
          }

            })
             .catch (error => {
                console.log(error)
            })
        })
          
    }
})

