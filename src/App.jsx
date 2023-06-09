import "./App.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonList from "./components/PokemonList";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import { getBasicPokemonDetails } from "./utils/getPokemonApi";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [originalPokemonList, setOriginalPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonLoadedListIndex, setPokemonLoadedListIndex] = useState(0);

  useEffect(() => {
    getBasicPokemonDetails()
      .then((result) => {
        // set the result of the resolved promise
        setOriginalPokemonList(result);
        //set the first 24 pokemon
        setPokemonList(result.slice(0, 25));
        //set the starting point index for the next 24 pokemon to be loaded
        setPokemonLoadedListIndex(24)
      })
      .catch((error) => {
        // Handle any errors that occurred during the promise execution
        console.error(error);
      });
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      const scrollHeight =
        (document.documentElement && document.documentElement.scrollHeight) ||
        document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const isScrolledToBottom =
        Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (isScrolledToBottom) {
        console.log("scrolled to bottom");
        //show an additional 24 pokemon in the pokemon list
        setPokemonList(
          originalPokemonList.slice(
            0,
            pokemonLoadedListIndex + 25
          )
        );
        //set the starting point index for the next 24 pokemon to be loaded
        setPokemonLoadedListIndex(pokemonLoadedListIndex + 24);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="bg-[#F6F8FC] w-full h-full">
      <img
        src="../pokeball-icon.png"
        alt="Pokeball Icon"
        className="absolute -top-20 -left-40"
      />

      <div
        id="pokemonSearchSection"
        className="sm:w-[100%] lg:w-[85%] mx-[auto]"
      >
        <div className="flex flex-col justify-center lg:mr-[340px] md:mr-[8px] sm:mr-[8px]">
          <Search
            setPokemonList={setPokemonList}
            originalPokemonList={originalPokemonList}
          />
          <PokemonList
            pokemonList={pokemonList}
            setSelectedPokemon={setSelectedPokemon}
          />
        </div>

        <div className="sm:block md:hidden lg:block">
          <PokemonInfo
            pokemonId={selectedPokemon ? selectedPokemon.id : null}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
