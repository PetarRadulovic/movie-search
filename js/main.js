//varible 
let search = document.querySelector(`#search`)
let btn = document.querySelector(`button`)
let modul = document.querySelector(`.show-modul`)
let send = document.querySelector(`.submit`)
let divBody = document.querySelector(`.search-body`)

// events

search.addEventListener(`keypress`, searchMovie)
send.addEventListener(`click`, closeModal)

//show modal

function closeModal(e) {
    e.preventDefault()
    modul.style.display = `none`
    search.style.display = ``
}

btn.addEventListener(`click`, (e) => {
    e.preventDefault()
    modul.style.display = "flex"
    search.style.display = `none`
}) 

// search movie

function searchMovie(e) {
    if (e.keyCode == 13) {
        getResult(search.value)
        divBody.innerHTML = ``
    }
}

const ombdi = {
    key: ` e485e374`,
    base: ` http://www.omdbapi.com/?i=tt3896198&apikey=e485e374`,
}

function getResult(film) {
    fetch(` http://www.omdbapi.com/?s=${film}&apikey=e485e374`)
        .then(res => res.json())
        .then(res => displayRes(res))

}

function displayRes(info) {

    document.querySelector(`.container`).classList.add(`show`)

    for (let i = 0; i < info.Search.length; i++) {

        let flexDiv = document.createElement(`div`)
        let divTitle = document.createElement(`div`)
        let divPhoto = document.createElement(`img`)
        let idMovie = info.Search[i].imdbID

        //description 

        fetch(`http://www.omdbapi.com/?i=${idMovie}&apikey=e485e374`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                divTitle.innerHTML = `<h1>${data.Title} </h1> 
                <p>  ${data.Plot} </p>
                <p> &#9201; ${data.Runtime
                }
                <p> &#11088; ${data.imdbRating}`

            })
        // TITLE
        flexDiv.classList.add(`flex-item`)
        divTitle.classList.add(`search-head`)
        flexDiv.append(divTitle)

        // photo
        divPhoto.classList.add(`.search-photo`)
        divPhoto.src = info.Search[i].Poster
        flexDiv.append(divPhoto)
        divBody.append(flexDiv)




    }
    search.value = ``



}