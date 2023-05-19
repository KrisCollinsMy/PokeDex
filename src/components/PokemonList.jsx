import { useState, useEffect } from "react";

const typeColors = {
    'normal': '#BCBCAC',
    'fighting': '#BC5442',
    'flying': '#669AFF',
    'poison': '#AB549A',
    'ground': '#DEBC54',
    'rock': '#BCAC66',
    'bug': '#ABBC1C',
    'ghost': '#6666BC',
    'steel': '#ABACBC',
    'fire': '#FF421C',
    'water': '#2F9AFF',
    'grass': '#78CD54',
    'electric': '#FFCD30',
    'psychic': '#FF549A',
    'ice': '#78DEFF',
    'dragon': '#7866EF',
    'dark': '#785442',
    'fairy': '#FFACFF',
    'shadow': '#0E2E4C'
};

async function fetchData(url) {
  try {
    // Make an asynchronous API request
    const response = await fetch(url);
    const jsonData = await response.json();

    // Update the component state with the received data
    return jsonData;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

const Card = ({ pokemonDetails }) => {
  return (
    <div id="pokemon-card" className="cursor-pointer min-w-[200px] relative border-2 pt-[40px] mt-[60px] px-[15px] pb-[15px] bg-white rounded-[1rem] shadow border-white p-2 flex flex-col justify-center items-center">
      <img
      id="pokemon-image"
        className="absolute -top-[55px] w-[100px] h-[100px]"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`}
        alt={pokemonDetails.name}
      />
      <span className="m-0 p-0 font-bold text-[13px] text-[#8F9396]">N° {pokemonDetails.id}</span>
      <h3 className="capitalize font-bold m-[5px] text-[1.17em]">{pokemonDetails.name}</h3>
      <div className="flex flex-row gap-2">
        {pokemonDetails.types
          ? pokemonDetails.types.map((type, index) => (
              <div className="rounded-[5px] py-[3px] px-[7px] font-semibold text-[14px] opacity-[0.8] capitalize" style={{backgroundColor: typeColors[type] }} key={index}>{type}</div>
            ))
          : null}
      </div>
    </div>
  );
};

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    //fetch pokemon id, names and types
    async function getBasicPokemonDetails() {
      const pokemonIdAndNames = await fetchData(
        "https://pokeapi.co/api/v2/pokemon/?limit=898"
      );

      let updatedPokemonList = [""];
      //fill pokemon id and name in pokemonList
      for (let i = 0; i < pokemonIdAndNames.results.length; i++) {
        updatedPokemonList.push({
          id: i + 1,
          name: pokemonIdAndNames.results[i].name,
          types: [],
        });
      }

      //fill pokemon types in updatedPokemonList
      for (let j = 0; j < 18; j++) {
        const pokemonTypes = await fetchData(
          "https://pokeapi.co/api/v2/type/" + (j + 1)
        );

        let pokemonWithType = pokemonTypes.pokemon;

        for (let k = 0; k < pokemonWithType.length; k++) {
          let pokemonIdWithType = pokemonWithType[k].pokemon.url
            .replace("https://pokeapi.co/api/v2/pokemon/", "")
            .replace("/", "");

          if (updatedPokemonList[pokemonIdWithType]) {
            updatedPokemonList[pokemonIdWithType].types.push(pokemonTypes.name);
          }
        }
      }
      setPokemonList(updatedPokemonList);
    }

    getBasicPokemonDetails().catch(console.error);
  }, []);

  return (
    <div className="w-3/4 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
      {pokemonList ? (
        pokemonList.map((pokemon, index) => {
          if (index === 0) {
            return null;
          }
          return <Card key={index} pokemonDetails={pokemon} />;
        })
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default PokemonList;
