// document.addEventListener('DOMContentLoaded', () => init())
let num = Math.floor(Math.random() * 82)

const form = document.querySelector('#formQuery')
form.addEventListener('submit',event =>{
    event.preventDefault()
    // console.log(event)
    formDataHandler(event.target)
})

function formDataHandler(dataArr){


}


function init() {
    getPeople()
    getFilms()
    getVehicles()
    getStarships()
    getPlanets()
    
}

function getPeople(){
    let request = `https://swapi.dev/api/people/`
    fetch(request)
        .then(resp => resp.json())
        .then(people => {
            
            // console.log(people,people.results)
            renderPeople(people.results) 
        })
}
function getFilms(){
    let request = `https://swapi.dev/api/films/`
    fetch(request)
        .then(resp => resp.json())
        .then(films => {
            
            // console.log(people,people.results)
            renderFilms(films.results) 
        })

}
async function getVehicles(){
    const reposnse = await fetch("https://swapi.dev/api/vehicles/")
    const vehicles = await reposnse.json()
    renderVehicles(vehicles.results)

}
async function getStarships(){
    const reposnse = await fetch("https://swapi.dev/api/starships/")
    const starships = await reposnse.json()
    renderStarships(starships.results)

}
async function getPlanets()
{
    const response = await fetch("https://swapi.dev/api/planets/")
    const planets = await response.json()
    renderPlanets(planets.results)

}
function renderPeople(data) {
    
    for (const person of data) {

    
    let ulpeople = document.querySelector("#people-list")

    let character = document.createElement("li")

    character.innerText = person.name
    
    // character.innerHTML = `
    //     <div>
    //     <p>${person.name}</p>
             
              
    //     </div>        
    // `

    ulpeople.appendChild(character)
    
    }


}

function renderFilms(data){
    // console.log(data)
    data.forEach( film => {

        let ulfilms = document.querySelector("#films-list")
        let lifilm = document.createElement('li')
        lifilm.innerText = film.title 
        ulfilms.appendChild(lifilm)
    }
        
    )
}
function renderVehicles (data){
    console.log("vehicles informaiton: ",data)
    data.forEach(
        vehicle => {
            
            let ulvehicles = document.querySelector("#vehicles-list")
            let livehicle = document.createElement('li')
            livehicle.innerText=vehicle.name
            ulvehicles.appendChild(livehicle)
        }
    )
    
}
function renderStarships (data){
    console.log("ships: ",data)
    data.forEach( starship => {
        
        let ulstarships = document.querySelector("#starships-list")
        let listarship = document.createElement('li')
        listarship.innerText = starship.name
        ulstarships.appendChild(listarship)
    }

    )
    

}
function renderPlanets (data){
    console.log("planet information",data)
    data.forEach( planet => {
        
        let ulplanets = document.querySelector("#planets-list")
        let liplanet = document.createElement('li')
        liplanet.innerText = planet.name
        ulplanets.appendChild(liplanet)
    }

    )
    
}

{/* <p>${person.height}</p>
        <p>${person.gender}</p>
        <p></p>  */}

init()
// function 
