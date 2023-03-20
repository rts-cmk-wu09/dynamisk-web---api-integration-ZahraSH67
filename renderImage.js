//To define buttons
const titleRender = document.querySelector(".title_render")
const pokemonSec = document.querySelector(".pokemon")
// const prevButton =document.createElement("button")
// prevButton.classList.add("prevButton")
// prevButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i>'
// const nextButton =document.createElement("button")
// nextButton.classList.add("nextButton")
// nextButton.innerHTML = '<i class="fa-solid fa-arrow-right"></i>'
// titleRender.append(prevButton, nextButton)








//limit: The number of results to retrieve per page
const limit = 20;
//offset: the starting position of the first page of results
let offset = 0;
let pageNum = 1;

//The fetchPokemons function is defined, which takes an offset parameter to indicate the starting position of the page to retrieve
function fetchPokemons(offset) {  
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then((response) => response.json()).then((data) => {
        console.log(data);
        console.log(`count is : ${data.count}`)
        //Add a variable for counting pages.
        const count = data.count
        // Clear previous content      
       pokemonSec.innerHTML = "";
        // Add pokemons to the page      
    // data.results.forEach((result) => {
    //     fetch(result.url).then((response) => response.json()).then((pokemon) => {
    //         const pokemonCard = `<div class="pokemon-card"><h2>${pokemon.name}</h2><img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"></div>`;
    //         document.querySelector(".pokemon").innerHTML += pokemonCard;});});

    
    data.results.forEach(element => {
        fetch(element.url).then((response) => response.json()).then((data) => {
                console.log(element)
                // let wrapper = document.createElement('div')
                // document.querySelector(".pokemon").append(wrapper)
                // wrapper.classList.add("wrapper")
                pokemonSec.innerHTML += 
                `<div class="wrapper">
                    <a href="details.html?name=${element.name}" class="link" data-link="${element.url}">
                        ${element.name}
                    </a>
                    <img src="${data.sprites.front_default}" alt="${data.name}">
               </div>`   
            });
        
        
        
        
        
        
          
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        })
        


          
    //Add navigation buttons 
 

    document.querySelector(".title_render").innerHTML = "";
    if (offset > 0) {
        const prevButton = document.createElement("button");
        prevButton.classList.add("prevButton")
        prevButton.textContent = "Prev";
        prevButton.addEventListener("click", () => {fetchPokemons(offset - limit)
            
            if(pageNum == 1){
                pageNum == 1
            }else{
                pageNum--
            }
            const pageCounter = document.querySelector(".page_counter")
            pageCounter.innerHTML = `<h2>${pageNum} Of ${data.count}`
        })
        document.querySelector(".title_render").appendChild(prevButton)
    }


    if (offset + limit < data.count) {
        const nextButton = document.createElement("button");
        nextButton.classList.add("nextButton")
        nextButton.textContent = "Next";
        nextButton.addEventListener("click", () => {fetchPokemons(offset + limit)
            if(pageNum == data.count){
                pageNum == data.count

            }else{
                pageNum++
            }
            const pageCounter = document.querySelector(".page_counter")
            pageCounter.innerHTML = `<h2>${pageNum} Of ${data.count}`
        })
        document.querySelector(".title_render").appendChild(nextButton);}}).catch((error) => console.error(error))
    }
    
    fetchPokemons(offset);
  //new version