const pokemonChar = document.querySelector(".pokemon")
fetch('https://pokeapi.co/api/v2/pokemon').then(res=> res.json()).then(data=>{
    data.results.forEach(element => {
        let wrapper = document.createElement('div')
        pokemonChar.append(wrapper)
        wrapper.classList.add("wrapper1")
        wrapper.innerHTML += 
        
        `<a href="details.html?name=${element.name}" class="link" data-link="${element.url}">${element.name}</a>`   
    });
})




const searchInput = document.getElementById("input");

fetch('https://pokeapi.co/api/v2/pokemon?limit=1281').then(res => res.json()).then(data => {
    console.log(data.count)
  let pokemonList = data.results;
  console.log("pokemonList", pokemonList)

  // Render initial list of Pokemon
  renderPokemonList(pokemonList);

  // Add event listener to search input
  searchInput.addEventListener("input", () => {
    let searchText = searchInput.value.toLowerCase();
    let filteredList = pokemonList.filter(pokemon => pokemon.name.includes(searchText) && pokemon.name != "" && pokemon.name != " ");
    renderPokemonList(filteredList);
    console.log("filteredList",filteredList)
  });
});

function renderPokemonList(pokemonList ) {
  pokemonChar.innerHTML = "";
  for (let index = 0; index <20; index++) {
    // let wrapper = document.createElement('div');
    // pokemonChar.append(wrapper);
    // wrapper.classList.add("wrapper");
    pokemonChar.innerHTML += `
    <div class= "wrapper">
        <a href="details.html?name=${pokemonList[index].name}" class="link" data-link="${pokemonList[index].url}">${pokemonList[index].name}</a>
    </div>
    `;
  
  }
//   pokemonList.forEach(pokemon => {
//     let wrapper = document.createElement('div');
//     pokemonChar.append(wrapper);
//     wrapper.classList.add("wrapper");
//     wrapper.innerHTML += `<a href="details.html?name=${pokemon.name}" class="link" data-link="${pokemon.url}">${pokemon.name}</a>`;
//   });
}







