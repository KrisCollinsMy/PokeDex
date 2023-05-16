import { useEffect } from "react";

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

// const Card = ({ id, name, types }) => {
//   return (
//     <div>
//       <h3>{name}</h3>
      
//     </div>
//   );
// };

const PokemonList = () => {
  useEffect(() => {
    //fetch pokemon id, names and types
    async function getBasicPokemonDetails() {
      const pokemonIdAndNames = await fetchData(
        "https://pokeapi.co/api/v2/pokemon/?limit=898"
      );

      let pokemonList = [""];

      //fill pokemon id and name in pokemonList
      for (let i = 0; i < pokemonIdAndNames.results.length; i++) {
        pokemonList.push({
          id: i + 1,
          name: pokemonIdAndNames.results[i].name,
          types: [],
        });
      }

      //fill pokemon types in pokemonList
      for (let i = 0; i < 18; i++) {
        const pokemonTypes = await fetchData(
          "https://pokeapi.co/api/v2/type/" + (i + 1)
        );

        let pokemonWithType = pokemonTypes.pokemon;

        for (let i = 0; i < pokemonWithType.length; i++) {
          let pokemonIdWithType = pokemonWithType[i].pokemon.url
            .replace("https://pokeapi.co/api/v2/pokemon/", "")
            .replace("/", "");

          if (pokemonList[pokemonIdWithType]) {
            pokemonList[pokemonIdWithType].types.push(pokemonTypes.name);
          }
        }
      }
      return pokemonList;
    }
  }, []);

  return <></>;
};

export default PokemonList;
