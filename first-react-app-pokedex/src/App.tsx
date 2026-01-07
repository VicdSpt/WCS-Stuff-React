import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

// import MyTitle from "./MyTitle";

const listPokemon = [
  {
    name: "Bulbasaur",
    imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    number: "0001",
    level: "Level: 1",
  },
  {
    name: "Ivysaur",
    imageSrc: "https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/250px-0002Ivysaur.png",
    number: "0002",
    level: "Level: 1",
  },
  {
    name: "Venusaur",
    imageSrc: "https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/250px-0003Venusaur.png",
    number: "0003",
    level: "Level: 1",
  },
  {
    name: "Mew",
    imageSrc: "https://archives.bulbagarden.net/media/upload/thumb/9/9a/0151Mew.png/250px-0151Mew.png",
    number: "0151",
    level: "Level: 1",
  },
];

function App() {

  const [pokemonName, setPokemonName] = useState("Bulbasaur")
  const pokemon = listPokemon.find((pokemon) => pokemon.name === pokemonName)

  if(pokemon === undefined){
    throw new Error("Invalid Pokemon name")
  }
  
  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <button onClick={() => setPokemonName("Bulbasaur")}>Bulbasaur</button>
      <button onClick={() => setPokemonName("Ivysaur")}>Ivysaur</button>
      <button onClick={() => setPokemonName("Venusaur")}>Ivysaur</button>
      <button onClick={() => setPokemonName("Mew")}>Mew</button>
    </div>
  );
}

export default App;
