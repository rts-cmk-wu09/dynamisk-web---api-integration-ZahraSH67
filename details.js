const urlObject = new URLSearchParams(window.location.search)
console.log(urlObject)

const nameParam = urlObject.get("name")
console.log(nameParam)

fetch(`https://pokeapi.co/api/v2/pokemon/${nameParam}`).then((response) => response.json()).then((data) => {
        console.log(data)
        const container = document.createElement("main")
        document.body.appendChild(container)
        container.classList.add("container")
        container.innerHTML = `<div class="div_Contain">
        <h1>${data.name}</h1>
        <img src="${data.sprites.back_default}">
        <h3>Height: ${data.height}</h3>
        <h3>Weight: ${data.weight}</h3>
        <h4>First ability <br> Name: ${data.abilities[0].ability.name} <br>
        Hidden:${data.abilities[0].is_hidden} <br>
        Slot:${data.abilities[0].slot}</h4>
        <h4>Second ability <br> Name: ${data.abilities[1].ability.name} <br>
        Hidden:${data.abilities[1].is_hidden} <br>
        Slot:${data.abilities[1].slot}</h4>
        </div>`
        // console.log(data.name)
        // console.log(data.abilities[0].ability.name)
})