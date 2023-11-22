document.addEventListener('DOMContendLoaded',event => init(event))
function init(event){
    fetch("https://swapi.dev/api/people")
        .then(resp => resp.json())
        .then(data => console.log(data))
}

   init()