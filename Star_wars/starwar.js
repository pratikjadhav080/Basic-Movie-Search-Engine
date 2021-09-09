let timerID;

async function searchCharacters(char_name) {

    let response = await fetch(`https://swapi.dev/api/people/?search=${char_name}`)

    let data = await response.json();

    return data.results

}

async function main() {

    let char_name = document.getElementById("characters").value

    let char_result = await searchCharacters(char_name)

    console.log(char_result)

    if (char_result == undefined) {
        return false;
    }

    appendMovie(char_result)

}


function appendMovie(m) {

    let char_div = document.getElementById("results")
    char_div.style.display = "block"


    let char_name = document.getElementById("characters").value

    if (char_name.length < 3) {
        char_div.style.display = "none"
    }

    char_div.innerHTML = ""

    m.forEach(({ name }) => {

        let p = document.createElement("p")

        p.textContent = name;

        console.log(p)

        char_div.append(p)

        console.log(name)
    })
}


function debounce(func, delay) {

    let char_name = document.getElementById("characters").value

    if (char_name.length < 3) {
        return false;
    }

    if (timerID) {
        clearTimeout(timerID)
    }

    timerID = setTimeout(() => {
        func()
    }, delay)
}