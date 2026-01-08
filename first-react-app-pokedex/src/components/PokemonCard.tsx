interface PokemonCardProps {
  pokemon: {
    name: string;
    imageSrc: string;
    number: string;
    level: string;
  };
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <figure className="pokemon-card">
      {pokemon.imageSrc !== undefined ? (
        <img src={pokemon.imageSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>#{pokemon.number} - {pokemon.name} - {pokemon.level}</figcaption>
    </figure>
  );
}

export default PokemonCard;
