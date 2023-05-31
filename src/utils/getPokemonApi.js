import { fetchData } from "./apiUtils";

export async function getBasicPokemonDetails() {
  //fetch pokemon id, names and types
  const pokemonIdAndNames = await fetchData(
    "https://pokeapi.co/api/v2/pokemon/?limit=898"
  );

  let updatedPokemonList = [""];
  //fill pokemon id and name
  for (let i = 0; i < pokemonIdAndNames.results.length; i++) {
    updatedPokemonList.push({
      id: i + 1,
      name: pokemonIdAndNames.results[i].name,
      types: [],
    });
  }

  //fill pokemon types
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
  return updatedPokemonList;
}

export async function getPokemonInfo(pokemonId) {
  const pokemonInfo = await fetchData(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonId
  );

  return pokemonInfo;
}

export async function getPokemonDescription(pokemonId) {
  const pokemonDescription = await fetchData(
    "https://pokeapi.co/api/v2/pokemon-species/" + pokemonId
  );

  return pokemonDescription;
}

export async function getPokemonEvolutionChain(pokemonId) {
  const pokemonDescription = await getPokemonDescription(pokemonId);
  const evolutionChain = await fetchData(
    pokemonDescription.evolution_chain.url
  );

  return evolutionChain;
}