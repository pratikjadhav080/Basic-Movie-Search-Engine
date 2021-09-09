

async function getData(url){

    let res = await fetch(url)

    let data = await res.json()

    return data
}

function appendData(a,place) {
    place.innerHTML = ""

    a.forEach(({ strMeal, strMealThumb,strArea,strYoutube })=> {


        console.log("meals:", strMeal, strMealThumb,strArea,strYoutube)

        let div = document.createElement("div")

        let p_mealname = document.createElement("p")

        let p_mealarea = document.createElement("p")

        let youtube_link = document.createElement("a")

        let meal_images = document.createElement("img")

        meal_images.src = strMealThumb;

        p_mealname.textContent = strMeal;

        p_mealarea.textContent = strArea;

        youtube_link.textContent="Youtube Link for the receipe"

        youtube_link.setAttribute("href",`${strYoutube}`)

        div.append(meal_images,p_mealname,p_mealarea,youtube_link)

        place.append(div)
    })
}






export {appendData,getData}
