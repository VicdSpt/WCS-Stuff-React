interface Pokemon {
  name: string;
  imgSrc?: string;
  number: string;
  level: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  listPokemon: Pokemon[];
}

function NavBar({ setPokemonName, listPokemon }: NavBarProps) {

    const testEffectPokemon = (PokemonName: string) => {
        setPokemonName(PokemonName)

        if(PokemonName === "Pikachu"){
            alert("Pikaaa pikachuuu !!!")
        }
    }

  return (
    <nav>
      {listPokemon.map((onePokemonFromTheList) => (
        <button
          key={onePokemonFromTheList.number}
          onClick={() => testEffectPokemon(onePokemonFromTheList.name)}
        >
          {onePokemonFromTheList.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
