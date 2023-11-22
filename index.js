document.addEventListener('DOMContendLoaded',() => init())
function init(){
    fetch("https://swapi.dev/api/people")
        .then(resp => resp.json())
        .then(data => renderPage(data))
}

function renderPage(data){
    let ul = document.querySelector("#display-list")
    data.results.forEach(person => {
        let li = document.createElement("li")
        li.innerText= person
        ul.append(li)
    })
}
init()