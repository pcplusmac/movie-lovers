// document.addEventListener('DOMContentLoaded', () => init())

const form = document.querySelector('#formQuery')
form.addEventListener('submit',event =>{
    event.preventDefault()
    // console.log(event)
    formDataHandler(event.target)
})

function formDataHandler(dataArr){


}

let num = Math.floor(Math.random() * 82)
function init() {
    getPeople()
    getFilms()
    
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

{/* <p>${person.height}</p>
        <p>${person.gender}</p>
        <p></p>  */}

init()
// function 
