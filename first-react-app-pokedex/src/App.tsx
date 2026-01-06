import "./App.css";
import PokemonCard from "./components/PokemonCard";

// import MyTitle from "./MyTitle";

const listPokemon = [
  {
    name: "Bulbasaur",
    imageSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
    imageSrc: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F151.webp&w=640&q=75",
  }
];

function App() {
  return (
    <div>
      <PokemonCard 
        pokemon={listPokemon[0]}
      />
      <PokemonCard 
        pokemon={listPokemon[1]}
      />
    </div>
  );
}

export default App;