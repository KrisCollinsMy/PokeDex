import PokemonInfo from "./PokemonInfo";

const typeColors = {
  normal: "#BCBCAC",
  fighting: "#BC5442",
  flying: "#669AFF",
  poison: "#AB549A",
  ground: "#DEBC54",
  rock: "#BCAC66",
  bug: "#ABBC1C",
  ghost: "#6666BC",
  steel: "#ABACBC",
  fire: "#FF421C",
  water: "#2F9AFF",
  grass: "#78CD54",
  electric: "#FFCD30",
  psychic: "#FF549A",
  ice: "#78DEFF",
  dragon: "#7866EF",
  dark: "#785442",
  fairy: "#FFACFF",
  shadow: "#0E2E4C",
};

const PokemonCard = ({ pokemonDetails, setSelectedPokemon }) => {
  return (
    <div
      id="pokemon-card"
      className="cursor-pointer min-w-[150px] w-[240px] relative border-2 pt-[40px] mt-[60px] mx-[10px] px-[15px] pb-[15px] bg-white rounded-[1rem] shadow border-white p-2 flex flex-col grow justify-center items-center"
      onClick={() => {
        setSelectedPokemon(pokemonDetails);
      }}
    >
      <img
        id="pokemon-image"
        className="absolute -top-[55px] w-[100px] h-[100px]"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`}
        alt={pokemonDetails.name}
      />
      <span className="m-0 p-0 font-bold text-[13px] text-[#8F9396]">
        N° {pokemonDetails.id}
      </span>
      <h3 className="capitalize font-bold m-[5px] text-[1.17em]">
        {pokemonDetails.name}
      </h3>
      <div className="flex flex-row gap-2">
        {pokemonDetails.types
          ? pokemonDetails.types.map((type, index) => (
              <div
                className="rounded-[5px] py-[3px] px-[7px] font-semibold text-[14px] opacity-[0.8] capitalize"
                style={{ backgroundColor: typeColors[type] }}
                key={index}
              >
                {type}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default PokemonCard;
