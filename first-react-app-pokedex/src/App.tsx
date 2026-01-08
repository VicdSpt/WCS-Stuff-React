import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const listPokemon = [
  {
    name: "Bulbasaur",
    imageSrc:
      "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png",
    number: "0001",
    level: "Level: 1",
  },
  {
    name: "Ivysaur",
    imageSrc:
      "https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/250px-0002Ivysaur.png",
    number: "0002",
    level: "Level: 1",
  },
  {
    name: "Venusaur",
    imageSrc:
      "https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/250px-0003Venusaur.png",
    number: "0003",
    level: "Level: 1",
  },
  {
    name: "Charmander",
    imageSrc:
      "https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/250px-0004Charmander.png",
    number: "0004",
    level: "Level: 1",
  },
  {
    name: "Charmeleon",
    imageSrc:
      "https://archives.bulbagarden.net/media/upload/thumb/0/05/0005Charmeleon.png/250px-0005Charmeleon.png",
    number: "0005",
    level: "Level: 1",
  },
  {
    name: "Charizard",
    imageSrc:
      "https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/250px-0006Charizard.png",
    number: "0006",
    level: "Level: 1",
  },
  {
    name: "Pikachu",
    imageSrc:
      "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/250px-0025Pikachu.png",
    number: "0025",
    level: "Level: 1",
  },
  {
    name: "Mew",
    imageSrc:
      "https://archives.bulbagarden.net/media/upload/thumb/9/9a/0151Mew.png/250px-0151Mew.png",
    number: "0151",
    level: "Level: 1",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("Bulbasaur");
  const pokemon = listPokemon.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon === undefined) {
    throw new Error("Invalid Pokemon name");
  }

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <nav>
        {listPokemon.map((pokemon) => (
          <button key={pokemon.number} onClick={() => setPokemonName(pokemon.name)}>{pokemon.name}</button>
        ))}
      </nav>
    </div>
  );
}

export default App;