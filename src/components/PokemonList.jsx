import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { getBasicPokemonDetails } from "../utils/getPokemon";

const PokemonList = ({ pokemonList}) => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[5px] col-span-6 mt-[40px]">
      {pokemonList ? (
        pokemonList.map((pokemon, index) => {
          if (index === 0) {
            return null;
          }
          return <PokemonCard key={index} pokemonDetails={pokemon} />;
        })
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default PokemonList;
