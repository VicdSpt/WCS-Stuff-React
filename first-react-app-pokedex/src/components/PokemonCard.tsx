const listPokemon = [
  {
    name: "Bulbasaur",
    imageSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];

function PokemonCard() {
  const pokemon = listPokemon[0];  // will show bulbasaur
//   const pokemon = listPokemon[1]; // will show Mew and ???

  return (
    <figure>
      {pokemon.imageSrc !== undefined ? (
        <img src={pokemon.imageSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
