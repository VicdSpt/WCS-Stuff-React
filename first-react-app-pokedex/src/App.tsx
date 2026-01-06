import "./App.css";
import PokemonCard from "./components/PokemonCard";

// import MyTitle from "./MyTitle";

const listPokemon = [
  {
    name: "Bulbasaur",
    imageSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    number: "0001",
    level: "Level: 1",
  },
  {
    name: "Ivysaur ",
    imageSrc:
      "https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/250px-0002Ivysaur.png",
    number: "0002",
    level: "Level: 1",
  },
  {
    name: "Mew",
    imageSrc:
      "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F151.webp&w=640&q=75",
    number: "0151",
    level: "Level: 1",
  },
];

function App() {
  return (
    <div>
      <PokemonCard pokemon={listPokemon[0]} />
      <PokemonCard pokemon={listPokemon[1]} />
      <PokemonCard pokemon={listPokemon[2]} />
    </div>
  );
}

export default App;
