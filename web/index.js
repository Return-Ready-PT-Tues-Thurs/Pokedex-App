const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors');
const app = express()
const port = 3000
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/pokemon', async (req,response)=>{
  console.log('in reoute')
  // call the pokemon api
  // return data in res
  const fetchPokemons = async () => {
    const pokemonArray = [];  
      console.log('in fetch');
    for(let i=1; i <=10; i++) {
      await getPokemon(i, pokemonArray);
}
console.log({pokemonArray})
return pokemonArray;
}
const getPokemon = async (id,array)=> {
const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
const res = await fetch(url);
const pokemon = await res.json();
array.push(pokemon)
//createPokemonCard(pokemon);
}
const fetchedPokemon = await fetchPokemons();
response.json(fetchedPokemon);
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})