import { useState } from "react";
import { PropTypes } from "prop-types";

const Search = ({ setPokemonList, originalPokemonList }) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setPokemonName(value);

    let searchedPokemonList = [""];

    const currentList = originalPokemonList;

    currentList.map((pokemon) => {
      if (pokemon && pokemon.name.includes(value)) {
        searchedPokemonList.push(pokemon);
      }
    });

    value == "" && searchedPokemonList.length == 1
      ? setPokemonList(originalPokemonList)
      : setPokemonList(searchedPokemonList);
  };

  return (
    <div id="search-bar-container">
      <input
        id="search-input"
        value={pokemonName}
        onChange={handleChange}
        tabIndex={0}
        placeholder="Search your Pokemon"
      />
    </div>
  );
};

Search.propTypes = {
  setPokemonList: PropTypes.func,
  originalPokemonList: PropTypes.array,
};

export default Search;
