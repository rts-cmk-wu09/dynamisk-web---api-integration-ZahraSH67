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
        
        
        
        
        
        
        //NEW CODE
        const search = document.querySelector(".search")
        const searchInput = document.querySelector("#input")
        const searchBtn = document.querySelector("#searchBtn")
        const firstPage = document.querySelector(".firstPage")


    search.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    firstPage.innerHTML = "";
    
    // Filter Pokemons by search term
    data.results.filter((result) => result.name.includes(searchTerm)).forEach((result) => {
        fetch(result.url)
          .then((response) => response.json())
          .then((result) => {
            // Add Pokemon card to the page
            // const pokemonCard = `
            //   <div class="pokemon-card">
            //     <h2>${pokemon.name}</h2>
            //     <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            //   </div>
            // `;

            console.log(result)
            const container = document.createElement("main")
            firstPage.appendChild(container)
            container.classList.add("container")
            container.innerHTML = `<div class="div_Contain">
            <h1>${result.name}</h1>
            <img src="${result.sprites.back_default}">
            <h3>Height: ${result.height}</h3>
            <h3>Weight: ${result.weight}</h3>
            <h4>First ability <br> Name: ${result.abilities[0].ability.name} <br>
            Hidden:${result.abilities[0].is_hidden} <br>
            Slot:${result.abilities[0].slot}</h4>
            <h4>Second ability <br> Name: ${result.abilities[1].ability.name} <br>
            Hidden:${result.abilities[1].is_hidden} <br>
            Slot:${result.abilities[1].slot}</h4>
        

            
            </div>`
            // document.querySelector(".firstPage").innerHTML += container;
          });
      });
    })
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
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
  