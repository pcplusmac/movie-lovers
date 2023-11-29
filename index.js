document.addEventListener('DOMContendLoaded',() => init())
function init(){
    let request = "https://swapi.dev/api/people"
    fetch(request)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            renderPage(data.results)})
}

function renderPage(array){
    let ul = document.querySelector("#display-list")
    array.forEach(person => {
        let li = document.createElement("li")
        li.innerText= `${person.name}, ${person.height},${person.gender}`
        
        ul.append(li)
    })
}


init()