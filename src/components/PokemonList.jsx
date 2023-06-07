import PokemonCard from "./PokemonCard";
import { PropTypes } from "prop-types";

const PokemonList = ({ pokemonList, setSelectedPokemon }) => {
  return (
    <div id="pokemon-list-container" className="w-[95%] flex flex-wrap justify-center m-[auto] mt-[7rem] mb-[3rem] mx-[1rem">
      {pokemonList ? (
        pokemonList.map((pokemon, index) => {
          if (index === 0) {
            return null;
          }
          return (
            <PokemonCard
              key={index}
              pokemonDetails={pokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
          );
        })
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

PokemonList.propTypes = {
  pokemonList: PropTypes.array,
  setSelectedPokemon: PropTypes.func,
};

export default PokemonList;
