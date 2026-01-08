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
  return (
    <nav>
      {listPokemon.map((onePokemonFromTheList) => (
        <button
          key={onePokemonFromTheList.number}
          onClick={() => setPokemonName(onePokemonFromTheList.name)}
        >
          {onePokemonFromTheList.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
