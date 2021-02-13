
const poke_container =
document.getElementById('poke_container');
const pokemons_number = 5;

const colors = {
  fire: 'FDDFDF',
  grass: 'DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#F4E7DA',
  rock: '3d5d5d4',
  fairy: '#FCEAFF',
  poison: '#98D7A5',
  bug: '#F8D5A3',
  dragon: '#97B3E6',
  psychic: 'eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};
    const main_types = Object.keys(colors);
        console.log(main_types);

        const fetchPokemons = async () => {

     
    await getPokemon();
  
}
const getPokemon = async () => {
  const url =`http://localhost:3000/pokemon`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log({pokemon})
    pokemon.forEach(createPokemonCard);
}
fetchPokemons();

function createPokemonCard(pokemon) {

  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
    const poke_types = pokemon.types.map(el => el.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const name = pokemon.name[0].toUpperCase() +
     pokemon.name.slice(1);
     const pokemonType = pokemon.types[0].type.name;
     console.log({pokemonType})
    pokemonEl.style.backgroundColor = colors[pokemonType];

const pokeInnerHTML = `
     <div class="img-container">   
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
      </div>
          <div class="info">
         <span class="number">${pokemon.id}<span>
             <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
     </div>
    `;

    pokemonEl.innerHTML = pokeInnerHTML;
     poke_container.appendChild(pokemonEl);
}