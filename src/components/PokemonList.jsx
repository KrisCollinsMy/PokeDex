import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { getBasicPokemonDetails } from "../utils/getPokemonApi";

const PokemonList = ({ pokemonList, setSelectedPokemon }) => {
  return (
    <div className="w-[95%] flex flex-wrap justify-center m-[auto] mt-[7rem] mb-[3rem]">
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

export default PokemonList;
