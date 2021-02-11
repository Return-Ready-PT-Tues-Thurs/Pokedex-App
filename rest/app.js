const pokedex = document.getElementById("pokedex");

console.log(pokedex);

const fetchPokemon = () =>{

    const promises = [];
    for( let i=1; i<=150 ; i++){
            
    
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
   promises.push( fetch(url).then((res) => res.json()));           //empty array we start and push all returns to promises

    }

    Promise.all(promises).then( (results) =>{                   // all asynch call will run in parallel and when done to be sent to result object
        const pokemon = results.map((data) => ({
            name: data.name,                                     
            id: data.id,                                             //map fucntion does  create new array to convert each item and make it into an object
            image: data.sprites['front_default'],
            type: data.types.map(type =>type.type.name).join(', ')

        } ) );
        displayPokemon(pokemon);
    } )
   
};

const displayPokemon =(pokemon) =>{
    //console.log(pokemon);

    const pokemonHTMLString =pokemon.map(
        (pokemman) =>
        `<li class="card">
        <img class="card-image" src="${pokemman.image}"/>
        <h2 class =card-title>${pokemman.id}.${pokemman.name}</h2>
        <p class=card-subtitle">Type: ${pokemman.type}</p>
        </li> `
    )
    .join('');
    
    pokedex.innerHTML = pokemonHTMLString;
}

fetchPokemon();
