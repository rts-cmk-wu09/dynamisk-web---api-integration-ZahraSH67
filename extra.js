const searchButton = document.querySelector("#search-box button");
const searchInput = document.querySelector("#search-box input");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  
  // Clear previous content
  document.querySelector("#pokemons").innerHTML = "";
  
  // Filter Pokemons by search term
  data.results.filter((result) => result.name.includes(searchTerm))
    .forEach((result) => {
      fetch(result.url)
        .then((response) => response.json())
        .then((pokemon) => {
          // Add Pokemon card to the page
          const pokemonCard = `
            <div class="pokemon-card">
              <h2>${pokemon.name}</h2>
              <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            </div>
          `;
          document.querySelector("#pokemons").innerHTML += pokemonCard;
        });
    });
  
  // Remove navigation buttons
  document.querySelector("#navigation").innerHTML = "";
});