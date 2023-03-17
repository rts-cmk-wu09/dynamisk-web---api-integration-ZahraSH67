const search = document.querySelector(".search")
const searchInput = document.querySelector("#input")
const searchBtn = document.querySelector("#searchBtn")
const firstPage = document.querySelector(".firstPage")


search.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    fetch('https://pokeapi.co/api/v2/pokemon').then(res=> res.json()).then(data=>{   
        console.log(data) 
    // Clear previous content
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
    // Remove navigation buttons
    // document.querySelector("#navigation").innerHTML = "";
  });

