import typeColors from "../utils/data";
import { PropTypes } from "prop-types";

const PokemonCard = ({ pokemonDetails, setSelectedPokemon }) => {
  return (
    <div
      className="pokemon-card cursor-pointer min-w-[200px] sm:w-[100px] md:w-[200px] lg:w-[230px] relative border-2 pt-[40px] mt-[60px] mx-[10px] px-[15px] pb-[15px] bg-white rounded-[1rem] shadow border-white p-2 flex flex-col grow justify-center items-center"
      onClick={() => {
        //set pokemon details
        setSelectedPokemon(pokemonDetails);

        //show pokemon info
        document
          .getElementById("current-pokemon-container")
          .classList.remove("hide");

        //show pokemon info background
        document.getElementById("current-pokemon-container").style.display =
          "flex";

        document.getElementById(
          "current-pokemon-container-background"
        ).style.display = "block";

        //set background color
        pokemonDetails
          ? (document.getElementById(
              "current-pokemon-container-background"
            ).style.backgroundColor = typeColors[pokemonDetails.types[0]])
          : null;

        //show close button
        document
          .getElementById("current-pokemon-responsive-close")
          .classList.remove("hide");

        //show pokemon info animation
        document
          .getElementById("current-pokemon-container")
          .classList.add("slide-in");
        document
          .getElementById("current-pokemon-container")
          .classList.remove("slide-out");
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

PokemonCard.propTypes = {
  pokemonDetails: PropTypes.object,
  setSelectedPokemon: PropTypes.func,
};

export default PokemonCard;
