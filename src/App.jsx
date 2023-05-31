import "./App.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonList from "./components/PokemonList";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import { getBasicPokemonDetails } from "./utils/getPokemonApi";
import { useRef } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [originalPokemonList, setOriginalPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

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

      <div className="w-[85%] mx-[auto]">
        <div className="flex flex-col justify-center lg:mr-[340px] md:mr-[8px] sm:mr-[8px]">
          <Search
            pokemonList={pokemonList}
            setPokemonList={setPokemonList}
            originalPokemonList={originalPokemonList}
          />
          <PokemonList
            pokemonList={pokemonList}
            setSelectedPokemon={setSelectedPokemon}
          />
        </div>

        <div className="sm:hidden md:hidden lg:block">
          <PokemonInfo
            pokemonId={selectedPokemon ? selectedPokemon.id : null}
            setSelectedPokemon={setSelectedPokemon}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
