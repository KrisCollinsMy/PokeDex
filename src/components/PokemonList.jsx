import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { getBasicPokemonDetails } from "../utils/getPokemon";

const PokemonList = ({ pokemonList}) => {
  return (
    <div className="w-[95%] flex flex-wrap justify-center m-[auto] mt-[7rem] mb-[3rem]">
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
