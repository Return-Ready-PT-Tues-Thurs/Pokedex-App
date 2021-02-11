// "express" and "app" are essential in any node/express app.
// require('library-name')
const express = require("express");
const app = express(); //initializes express app

// axios is for making api/ajax requests.
const axios = require("axios");
// ejs is our view engine. We're using EJS because we have to pass data to our frontend templates
const ejs = require("ejs");

// Setting EJS as our view engine
app.set("view engine", "ejs");

// This middleware is used to tell app that our data will be in JSON format.
app.use(express.json());

// This will be our root route
app.get("/", (req, res) => {
// the response is converted to json and our two routes are define in an array.
  res.json({
    routes: [
      {
        name: "All Pokemons",
        url: "/pokemons",
      },
      {
        name: "Pokemon with ID",
        url: "/pokemon/id-here",
      },
    ],
  });
});
// this is our pokemon route. We have use async for await to work.
app.get("/pokemons", async (req, res) => {
  let apiData;
  // creating an empty array for pokemon
  let pokemonArray = [];

  // axios is a library for requesting APIs, just like fetch or XML but it makes things even
  // easier than fetch()

  await axios
    .get("https://pokeapi.co/api/v2/pokemon") // we are getting the data from this api and setting it to var apidData.
    .then((data) => (apiData = data.data));

  // pushing name of each pokemon to the array
  apiData.results.forEach((pokemon) => {
    pokemonArray.push(pokemon.name);
  });

  // this will render pokemons.ejs (located in views/pokemons.ejs) with pokemonArray.
  // we can use this data with pokemon variable in our EJS template.
  res.render("pokemons", { pokemons: pokemonArray });
});

// :id creates a dynamic url, we the id in the params later.
app.get("/:id", async (req, res) => {
  let apiData;

  // Getting the ID from the url
  const id = req.params.id;

  let pokemon = {
    id: "",
    name: "",
    img: "",
    types: [],
  };

  try {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((data) => (apiData = data.data));
    //connecting the pokemon with its id, name, image, and type.
    pokemon.id = apiData.id;
    pokemon.name = apiData.name;
    pokemon.img = apiData.sprites.other["official-artwork"]["front_default"];
    pokemon.types = apiData.types;

    res.render("pokemon", { pokemon: pokemon });
  } catch (e) {
    res.send(e);
  }
});

// The server will run on the which we'll pass here.
// The server can be started with 'npm start' in the terminal
app.listen(8000, () => {
  console.log(`Listening to 8000`);
});
