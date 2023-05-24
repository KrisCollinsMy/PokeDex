import "./App.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonList from "./components/PokemonList";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import { getBasicPokemonDetails } from "./utils/getPokemon";
import { useRef } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [originalPokemonList, setOriginalPokemonList] = useState([]);

  useEffect(() => {
    getBasicPokemonDetails()
      .then((result) => {
        // set the result of the resolved promise
        setOriginalPokemonList(result);
        setPokemonList(result);
      })
      .catch((error) => {
        // Handle any errors that occurred during the promise execution
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-[#F6F8FC] w-full h-full">
      <img
        src="/public/pokeball-icon.png"
        alt="Pokeball Icon"
        className="absolute -top-20 -left-40"
      />

      <div className="w-[90%] flex flex-row mx-[auto] justify-center">
        <Search pokemonList={pokemonList} setPokemonList={setPokemonList} originalPokemonList={originalPokemonList}/>
        <PokemonList pokemonList={pokemonList}/>
        
        {/* <PokemonInfo/> */}
      </div>
    </div>
  );
}

export default App;
