// console.log ("testing on this file")

// document.addEventListener('DOMContentLoaded', () => init())
let num = Math.floor(Math.random() * 82)

const formLoad = document.querySelector('#form-loading-data')

formLoad.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event)
    formDataHandler(event.target)

})

function loadingFormHandler(dataArr) {

    console.log("click2", dataArr)

}

const formConfirm = document.querySelector("#form-confirming")
formConfirm.addEventListener('submit', confirmingFormHandler)
// formConfirm.reset()
function confirmingFormHandler(event) {
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
function deletePersonOnHub(data) {

    let idNum = data.id
    fetch(`http://localhost:3000/people/${idNum}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },

    })
        .then(resp => resp.json())
        .then(person => console.log(person))

}

function deleteVehicleOnHub(vehicle) {
    let idNum = vehicle.id
    fetch(`http://localhost:3000/vehicles/${idNum}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
 }
function deleteFilmOnHub(data) { }
function deleteStarshipOnHub(data) { }
function deletePlanetOnHub(data) { }

function renderPerson(data) {
    
    // data.forEach(item => {
    //     const ulCast = document.querySelector('#cast-list')
    //     const licard = document.createElement('li')
    //     licard = item
    //     ulCast.appendChild(licard)
    // })
    const ulCast = document.querySelector('#cast-list')
    ulCast.style.backgroundImage = `url("https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcndhcnN8ZW58MHx8MHx8fDA%3D")  `
    
    const licard = document.createElement('li')
    
    ulCast.appendChild(licard)
    licard.innerHTML = `
        <p>name: ${data.name}</p>
        <p>gender: ${data.gender}</p>
        <p>height: ${data.height}</p>
        <p>home: ${data.homeworld}</p>
        <p>films: ${data.films}</p>
        <hr>

    `
    const btnDelete = document.createElement("button")
    btnDelete.id = "buttonDelete"
    btnDelete.innerText = "delete"
    btnDelete.className = "right"
    btnDelete.addEventListener('click', () => {
        btnDelete.parentNode.remove()
        deletePersonOnHub(data)
    })

    licard.appendChild(btnDelete)

}
function renderVehicle(vehicle) {
    const ul = document.querySelector('#vehicle-list')
    ul.style.backgroundImage = `url("https://media.istockphoto.com/id/501940544/photo/space-exploration-and-planetary-colonization.webp?b=1&s=170667a&w=0&k=20&c=tmsxg6JyxDSaByL4bAhXQzxNaQ33jYYedoIxhHwT398=")  `
    // ul.style.backgroundRepeat = "no-repeat"
    ul.style.bacgroundSize = "contain"
    const li = document.createElement('li')
  
    ul.appendChild(li)
    li.innerHTML = `
        <p>name: ${vehicle.name}</p>
        <p>model: ${vehicle.model}</p>
        <p>length: ${vehicle.length}</p>
        <p>crew: ${vehicle.crew}</p>
        <p>films: ${vehicle.films}</p>
         
    `
    const btnDelete = document.createElement("button")
    btnDelete.id = "buttonDelete"
    btnDelete.className = "center"
    btnDelete.innerText = "delete"

    btnDelete.addEventListener('click', () => {
        btnDelete.parentNode.remove()
        deleteVehicleOnHub(vehicle)
    })

    li.appendChild(btnDelete)
 }
function renderFilm(data) { }
function renderStarship(data) { }
function renderPlanet(data) { }


function savePerson(data) {
    let personObj = {
        name: data.name,
        gender: data.gender,
        height: data.height,
        planet: data.homeworld,
        films: data.films
    }

    fetch(" http://localhost:3000/people", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personObj)

    })
        .then(resp => resp.json())
        .then(person => renderPerson(person))

}

function saveVehicle(data) {
    let vehicleObj = {
        name: data.name,
        model: data.model,
        length: data.length,
        crew: data.crew,
        films: data.films
    }

    fetch("http://localhost:3000/vehicles", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(vehicleObj)
    })
        .then (resp => resp.json())
        .then(vehicle => renderVehicle(vehicle))

}
function saveFilm(data) { }
function saveStarship(data) { }
function savePlanet(data) { }

function fetchPerson(item) {

    fetch(`https://swapi.dev/api/people/${item}`)
        .then(resp => resp.json())
        .then(person => savePerson(person))

}

function fetchVehicle(item) {
    fetch(`https://swapi.dev/api/vehicles/${item}`)
        .then(resp => resp.json())
        .then(vehicle => saveVehicle(vehicle))
}
function fetchFilm(item) {
    fetch(`https://swapi.dev/api/films/${item}`)
        .then(resp => resp.json())
        .then(film => saveFilm(film))
}
function fetchStarship(item) {
    fetch(`https://swapi.dev/api/starships/${item}`)
        .then(resp => resp.json())
        .then(starship => saveStarship(starship))
}
function fetchPlanet(item) {
    fetch(`https://swapi.dev/api/planets/${item}`)
        .then(resp => resp.json())
        .then(planet => savePlanet(planet))
}

function initAll() {
    getPeople()
    getFilms()
    getVehicles()
    getStarships()
    getPlanets()

    listPerson()
    listFilm()
    listVehicle()
    listStarship()
    listPlanet()

}

function listPerson() {
    fetch("http://localhost:3000/people")
        .then(resp => resp.json())
        .then(people => {
            people.forEach(person => renderPerson(person))
        })
}

function listFilm() {
    fetch("http://localhost:3000/films")
        .then(resp => resp.json())
        .then(films => {
            films.forEach(film => renderPerson(film))
        })
}

function listVehicle() {
    fetch("http://localhost:3000/vehicles")
        .then(resp => resp.json())
        .then(vehicles => {
            vehicles.forEach(vehicle => renderVehicle(vehicle))
        })
}

function listStarship() {
    fetch(" http://localhost:3000/starships")
        .then(resp => resp.json())
        .then(starships => {
            starships.forEach(starship => renderPerson(starship))
        })
}

function listPlanet() {
    fetch("http://localhost:3000/planets")
        .then(resp => resp.json())
        .then(planets => {
            planets.forEach(planet => renderPerson(planet))
        })
}

function getPeople() {
    let request = `https://swapi.dev/api/people/`
    fetch(request)
        .then(resp => resp.json())
        .then(people => {

            // console.log(people,people.results)
            renderPeople(people.results)
        })
}
function getFilms() {
    let request = `https://swapi.dev/api/films/`
    fetch(request)
        .then(resp => resp.json())
        .then(films => {

            // console.log(people,people.results)
            renderFilms(films.results)
        })

}
async function getVehicles() {
    const reposnse = await fetch("https://swapi.dev/api/vehicles/")
    const vehicles = await reposnse.json()
    renderVehicles(vehicles.results)

}
async function getStarships() {
    const reposnse = await fetch("https://swapi.dev/api/starships/")
    const starships = await reposnse.json()
    renderStarships(starships.results)

}
async function getPlanets() {
    const response = await fetch("https://swapi.dev/api/planets/")
    const planets = await response.json()
    renderPlanets(planets.results)

}
function renderPeople(data) {
    console.log("from renderPeople")
    for (let index in data) {
        let olpeople = document.querySelector("#people-list")
        let lipeople = document.createElement("li")
        lipeople.innerText = `${data[index].name}`
        olpeople.appendChild(lipeople)
    }
}

function renderFilms(data) {
    // console.log(data)
    // for (let index in data) {

    //     let ulfilms = document.querySelector("#films-list")
    //     let lifilm = document.createElement('li')
    //     lifilm.innerText = `${index*1 + 1}: ${data[index].title}`
    //     ulfilms.appendChild(lifilm)
    // }

    data.forEach(film => {
        let olfilms = document.querySelector("#films-list")
        let lifilm = document.createElement('li')
        lifilm.innerText = film.title
        olfilms.appendChild(lifilm)
    })
}

function renderVehicles(data) {
    // console.log("vehicles informaiton: ",data)
    for (const vehicle of data) {

        let olvehicles = document.querySelector("#vehicles-list")
        let livehicle = document.createElement('li')
        livehicle.innerText = vehicle.name
        olvehicles.appendChild(livehicle)
    }

}
function renderStarships(data) {
    console.log("ships: ", data)
    for (const starship of data) {

        let olstarships = document.querySelector("#starships-list")
        let listarship = document.createElement('li')
        listarship.innerText = starship.name
        olstarships.appendChild(listarship)
    }



}
function renderPlanets(data) {
    console.log("planet information", data)
    for (let planet of data) {

        let olplanets = document.querySelector("#planets-list")
        let liplanet = document.createElement('li')
        liplanet.innerText = planet.name
        olplanets.appendChild(liplanet)
    }


}

initAll()


function createItemShowBtn() {
    let btn = document.createElement("button")
    btn.id = "show-details"
    btn.textContent = "show"
    return btn
}
