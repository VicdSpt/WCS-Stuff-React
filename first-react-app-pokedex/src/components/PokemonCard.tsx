
function PokemonCard({pokemon}) {

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
