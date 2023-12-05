// console.log ("testing on this file")

// document.addEventListener('DOMContentLoaded', () => init())
let num = Math.floor(Math.random() * 82)

const formLoad = document.querySelector('#form-loading-data')

formLoad.addEventListener('submit',event =>{
    event.preventDefault()
    console.log(event)
    formDataHandler(event.target)
    
})

function loadingFormHandler(dataArr){
   
    console.log("click2",dataArr)

}

const formConfirm = document.querySelector("#form-confirming")
formConfirm.addEventListener('submit', confirmingFormHandler)
// formConfirm.reset()
function  confirmingFormHandler(event) {
    event.preventDefault()

    
    const person = event.target.people.value
    const film = event.target.film.value
    const vehicle = event.target.vehicle.value
    const starship = event.target.starship.value
    const planet = event.target.planet.value

    fetchPerson(person)
    fetchFilm(film)
    fetchVehicle(vehicle)
    fetchStarship(starship)
    fetchPlanet(planet)
    
    


    
    // let input = event.category.value
    // switch (input) {
    //     case "people" : renderPeople();
    //     break;
    //     default:
    //         break;
    // }
}

function renderPerson(data){
    const divContainer = document.querySelector('.process-container')
    divContainer.style.backgroundImage = `url("https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcndhcnN8ZW58MHx8MHx8fDA%3D")  `
    const h4 = document.createElement('h4')
    h4.textContent = "cast:"
    
    const divSolo = document.createElement('div')
    divSolo.appendChild(h4)
    divContainer.appendChild(divSolo)
    divSolo.innerHTML =`
        <p>${data.name}</p>
        <p>${data.gender}</p>
        <p>${data.height}</p>
        <p>${data.homeworld}</p>
        <p>${data.films}</p>
        <hr>   
    `
     const btnDelete = document.createElement("button")
     btnDelete.id = "buttonDelete"
     btnDelete.innerText = "delete"

     btnDelete.addEventListener('click',() => {
        btnDelete.parentNode.remove()
        deleteDivSoloOnHub(data)
     })

     divSolo.appendChild(btnDelete)

}

function deleteDivSoloOnHub(data){
    event.preventDefault()

}

function savePerson(data){
    let personObj ={
        name : data.name,
        gender: data.gender,
        height: data.height,
        planet: data.homeworld,
        films: data.films
    }

    fetch(" http://localhost:3000/people", {
        method:'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(personObj)

    })
        .then(resp => resp.json())
        .then(perosn => renderPerson(person) )

}
function fetchPerson(item){
    
    fetch(`https://swapi.dev/api/people/${item}`)
        .then(resp => resp.json())
        .then(data => savePerson(data) )

}

function fetchVehicle(item){

}
function fetchFilm(item){

}
function fetchStarship(item){
    
}
function fetchPlanet(item){
    
}

function initAll() {
    getPeople()
    getFilms()
    getVehicles()
    getStarships()
    getPlanets()

    getPerson()
    
}

function getPerson(){
    fetch("http://localhost:3000/people")
        .then(resp => resp.json())
        .then (people => {
            people.forEach(person => renderPerson(person))
        })
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
    console.log("from renderPeople")
    for (let index in data) {

    
        let ulpeople = document.querySelector("#people-list")
        let character = document.createElement("li")
        character.innerText = `${index*1 + 1}: ${data[index].name}` 
    // let showBtn = createItemShowBtn()
    // character.appendChild(showBtn)
    // showBtn.addEventListener("click",(event) => {
    //     //TODO: complete teh show logic here using person as parameter
    //     event.preventDefault()
    //     console.log("click")
    //     const showBox = document.querySelector("div.display-container")
    //     // console.log("from show button: ",person)


        
    // })

    
    ulpeople.appendChild(character)
    }
}
 
function renderFilms(data){
    // console.log(data)
    data.forEach( film => {

        let ulfilms = document.querySelector("#films-list")
        let lifilm = document.createElement('li')
        lifilm.innerText = film.title 

        // let showBtn = createItemShowBtn()
        // showBtn.addEventListener('click', film => {
        //     //TODO: complete teh show logic here using film as parameter
        // })
        // lifilm.appendChild(showBtn)

        ulfilms.appendChild(lifilm)
    }
        
    )
}

function renderVehicles (data){
    // console.log("vehicles informaiton: ",data)
    data.forEach(
        vehicle => {
            
            let ulvehicles = document.querySelector("#vehicles-list")
            let livehicle = document.createElement('li')
            livehicle.innerText=vehicle.name

            // let showBtn = createItemShowBtn()
            // livehicle.appendChild(showBtn)
            // showBtn.addEventListener('click',(vehicle)=> {
            //     //TODO: complete the loic for showing item details
            // })


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

        // let showBtn = createItemShowBtn()
        // showBtn.addEventListener('click',(starship)=> {
        //     //TODO: complete the loic for showing item details
        // })

        // listarship.appendChild(showBtn)
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

        // let showBtn = createItemShowBtn()
        // showBtn.addEventListener('click',(planet)=> {
        //     //TODO: complete the loic for showing item details
        // })

        // liplanet.appendChild(showBtn)
        ulplanets.appendChild(liplanet)
    }

    )
    
}

initAll()


function createItemShowBtn () {
    let btn = document.createElement("button")
    btn.id = "show-details"
    btn.textContent = "show"
    return btn
}
