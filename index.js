// document.addEventListener('DOMContentLoaded', () => init())

let num = Math.floor(Math.random() * 82)
function init() {

    let request = `https://swapi.dev/api/people/`
    fetch(request)
        .then(resp => resp.json())
        .then(people => {
            
            console.log(people,people.results)
            renderPage(people.results) 
        })
}

function renderPage(data) {
    
    for (const person of data) {

    
    let ul = document.querySelector("#cast-list")

    let character = document.createElement("li")

    character.innerText = person.name
    
    // character.innerHTML = `
    //     <div>
    //     <p>${person.name}</p>
             
              
    //     </div>        
    // `

    ul.appendChild(character)
    }

}

{/* <p>${person.height}</p>
        <p>${person.gender}</p>
        <p></p>  */}

init()
// function 
