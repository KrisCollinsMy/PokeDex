import { filterIdFromSpeciesURL } from "../utils/apiUtils";
import {
  getPokemonInfo,
  getPokemonDescription,
  getPokemonEvolutionChain,
} from "../utils/getPokemonApi";
import { useEffect, useState } from "react";
import typeColors from "../utils/data";
import { handlePromise } from "../utils/apiUtils";
import { PropTypes } from "prop-types";

const PokemonInfo = ({ pokemonId }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [pokemonDescription, setPokemonDescription] = useState(null);
  const [pokemonEvolutionChain, setPokemonEvolutionChain] = useState(null);

  useEffect(() => {
    if (pokemonId) {
      handlePromise(() => getPokemonInfo(pokemonId), setPokemonInfo);
      handlePromise(
        () => getPokemonDescription(pokemonId),
        setPokemonDescription
      );
      handlePromise(
        () => getPokemonEvolutionChain(pokemonId),
        setPokemonEvolutionChain
      );
    }
  }, [pokemonId]);

  const getImageUrl = () => {
    if (pokemonInfo == null) return "../no-pokemon-selected-image.png";

    return pokemonInfo.id >= 650
      ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          pokemonInfo.id +
          ".png"
      : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" +
          pokemonInfo.id +
          ".gif";
  };

  let firstFlavorText = true;

  return (
    <>
      <div id="current-pokemon-responsive-background"></div>
      <div
        id="current-pokemon-responsive-close"
        className={pokemonInfo ? "block" : "hide"}
        onClick={() => {
          //hide pokemon info animation
          document
            .getElementById("current-pokemon-container")
            .classList.remove("slide-in");
          document
            .getElementById("current-pokemon-container")
            .classList.add("slide-out");

          setTimeout(function () {
            //hide close button
            document
              .getElementById("current-pokemon-responsive-close")
              .classList.add("hide");

            //hide pokemon info background
            document.getElementById(
              "current-pokemon-container-background"
            ).style.display = "none";
          }, 280);
        }}
      >
        <img src="../close-icon.png" />
      </div>
      <div id="current-pokemon-container-background" className="bg-black">
        <div id="current-pokemon-container" className="container column center">
          <img
            id="current-pokemon-image"
            alt="current pokemon image"
            src={getImageUrl()}
            style={{
              ...(pokemonInfo && {
                marginBottom: "3rem",
                transform: "scale(2.5)",
              }),
            }}
          />

          <div
            id="current-pokemon-info"
            className={pokemonInfo ? null : "hide"}
          >
            <span id="current-pokemon-id" className="font-size-12 bold">
              N° {pokemonInfo ? pokemonInfo.id : null}
            </span>

            <h3
              id="current-pokemon-name"
              className="capitalize font-bold m-[5px] text-[1.5em]"
            >
              {pokemonInfo ? pokemonInfo.name : null}
            </h3>

            <div className="flex flex-row gap-2 justify-center my-[0.2rem]">
              {pokemonInfo
                ? pokemonInfo.types.map((types, index) => (
                    <div
                      className="rounded-[5px] py-[3px] px-[7px] font-semibold text-[14px] opacity-[0.8] capitalize"
                      style={{ backgroundColor: typeColors[types.type.name] }}
                      key={index}
                    >
                      {types.type.name}
                    </div>
                  ))
                : null}
            </div>

            <h4 className="font-bold mt-[1em] text-[1em]">Pokedex Entry</h4>

            {pokemonDescription
              ? pokemonDescription.flavor_text_entries.map(
                  (flavor_texts, index) => {
                    if (flavor_texts.language.name == "en" && firstFlavorText) {
                      firstFlavorText = false;
                      return (
                        <span
                          id="current-pokemon-description"
                          className="mx-[0.6em] leading-tight"
                          key={index}
                        >
                          {flavor_texts.flavor_text}
                        </span>
                      );
                    }
                  }
                )
              : null}

            <div className="row center mt-[0.8em]">
              <div className="width-100 column center margin-5">
                <h4 className="font-bold">Height</h4>
                <div
                  id="current-pokemon-height"
                  className="pokemon-info-variable-container"
                >
                  {pokemonInfo ? pokemonInfo.height : null}m
                </div>
              </div>
              <div className="width-100 column center margin-5">
                <h4 className="font-bold">Weight</h4>
                <div
                  id="current-pokemon-weight"
                  className="pokemon-info-variable-container"
                >
                  {pokemonInfo ? pokemonInfo.weight : null}kg
                </div>
              </div>
            </div>

            <div className="column my-[0.5rem]">
              <h4 className="font-bold">Abilities</h4>
              <div className="row">
                {pokemonInfo
                  ? pokemonInfo.abilities
                      .slice(0, 2)
                      .map((pokemonAbility, index) => (
                        <div
                          className="pokemon-info-variable-container capitalize"
                          key={index}
                        >
                          {pokemonAbility.ability.name}
                        </div>
                      ))
                  : null}
              </div>
            </div>

            <h4 className="font-bold">Stats</h4>
            <div className="row center">
              <div className="current-pokemon-stats-container column">
                <div
                  className="current-pokemon-stats-name"
                  style={{ background: "#DF2140" }}
                >
                  HP
                </div>
                <h5
                  id="current-pokemon-stats-hp"
                  className="font-semibold text-sm"
                >
                  {pokemonInfo ? pokemonInfo.stats[0].base_stat : null}
                </h5>
              </div>
              <div className="current-pokemon-stats-container column">
                <div
                  className="current-pokemon-stats-name"
                  style={{ background: "#FF994D" }}
                >
                  ATK
                </div>
                <h5
                  id="current-pokemon-stats-atk"
                  className="font-semibold text-sm"
                >
                  {pokemonInfo ? pokemonInfo.stats[1].base_stat : null}
                </h5>
              </div>
              <div className="current-pokemon-stats-container column">
                <div
                  className="current-pokemon-stats-name"
                  style={{ background: "#eecd3d" }}
                >
                  DEF
                </div>
                <h5
                  id="current-pokemon-stats-def"
                  className="font-semibold text-sm"
                >
                  {pokemonInfo ? pokemonInfo.stats[2].base_stat : null}
                </h5>
              </div>
              <div className="current-pokemon-stats-container column">
                <div
                  className="current-pokemon-stats-name"
                  style={{ background: "#85DDFF" }}
                >
                  SpA
                </div>
                <h5
                  id="current-pokemon-stats-spa"
                  className="font-semibold text-sm"
                >
                  {pokemonInfo ? pokemonInfo.stats[3].base_stat : null}
                </h5>
              </div>
              <div className="current-pokemon-stats-container column">
                <div
                  className="current-pokemon-stats-name"
                  style={{ background: "#96da83" }}
                >
                  SpD
                </div>
                <h5
                  id="current-pokemon-stats-spd"
                  className="font-semibold text-sm"
                >
                  {pokemonInfo ? pokemonInfo.stats[4].base_stat : null}
                </h5>
              </div>
              <div className="current-pokemon-stats-container column">
                <div
                  className="current-pokemon-stats-name"
                  style={{ background: "#FB94A8" }}
                >
                  SPD
                </div>
                <h5
                  id="current-pokemon-stats-speed"
                  className="font-semibold text-sm"
                >
                  {pokemonInfo ? pokemonInfo.stats[5].base_stat : null}
                </h5>
              </div>
              <div
                className="current-pokemon-stats-container column"
                style={{ background: "#88AAEA" }}
              >
                <div
                  className="current-pokemon-stats-name"
                  style={{ background: "#7195DC" }}
                >
                  TOT
                </div>
                <h5
                  id="current-pokemon-stats-total"
                  className="font-semibold text-sm"
                >
                  {pokemonInfo
                    ? pokemonInfo.stats[0].base_stat +
                      pokemonInfo.stats[1].base_stat +
                      pokemonInfo.stats[2].base_stat +
                      pokemonInfo.stats[3].base_stat +
                      pokemonInfo.stats[4].base_stat +
                      pokemonInfo.stats[5].base_stat
                    : null}
                </h5>
              </div>
            </div>

            <div
              id="current-pokemon-evolution-chain-container"
              className="my-[0.8em]"
            >
              {pokemonEvolutionChain &&
              pokemonEvolutionChain.chain.evolves_to &&
              pokemonEvolutionChain.chain.evolves_to.length != 0 ? (
                <h4 className="font-bold">Evolution</h4>
              ) : null}
              <div className="row center">
                {pokemonEvolutionChain &&
                pokemonEvolutionChain.chain.evolves_to &&
                pokemonEvolutionChain.chain.evolves_to.length != 0 ? (
                  <>
                    <img
                      id="current-pokemon-evolution-0"
                      className="current-pokemon-evolution-image"
                      alt="first pokemon evolution"
                      onClick={() => {
                        pokemonId = filterIdFromSpeciesURL(
                          pokemonEvolutionChain.chain.species.url
                        );

                        handlePromise(
                          () => getPokemonInfo(pokemonId),
                          setPokemonInfo
                        );
                      }}
                      src={
                        pokemonEvolutionChain
                          ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                            filterIdFromSpeciesURL(
                              pokemonEvolutionChain.chain.species.url
                            ) +
                            ".png"
                          : "../pokeball-icon.png"
                      }
                    />

                    <div
                      id="current-pokemon-evolution-level-0"
                      className="current-pokemon-evolution-level-container font-size-12 bold"
                    >
                      {pokemonEvolutionChain.chain.evolves_to[0]
                        .evolution_details[0].min_level
                        ? "Lv." +
                          pokemonEvolutionChain.chain.evolves_to[0]
                            .evolution_details[0].min_level
                        : "?"}
                    </div>
                    <img
                      id="current-pokemon-evolution-1"
                      className="current-pokemon-evolution-image"
                      alt="minimum evolution level"
                      onClick={() => {
                        pokemonId = filterIdFromSpeciesURL(
                          pokemonEvolutionChain.chain.evolves_to[0].species.url
                        );

                        handlePromise(
                          () => getPokemonInfo(pokemonId),
                          setPokemonInfo
                        );
                      }}
                      src={
                        pokemonEvolutionChain
                          ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                            filterIdFromSpeciesURL(
                              pokemonEvolutionChain.chain.evolves_to[0].species
                                .url
                            ) +
                            ".png"
                          : "../pokeball-icon.png"
                      }
                    />
                  </>
                ) : null}
                {pokemonEvolutionChain &&
                pokemonEvolutionChain.chain.evolves_to.length != 0 &&
                pokemonEvolutionChain.chain.evolves_to[0]?.evolves_to.length !=
                  0 ? (
                  <>
                    <div
                      id="current-pokemon-evolution-level-1"
                      className="current-pokemon-evolution-level-container font-size-12 bold"
                    >
                      {pokemonEvolutionChain &&
                      pokemonEvolutionChain.chain.evolves_to[0]?.evolves_to[0]
                        ?.evolution_details[0]?.min_level
                        ? "Lv." +
                          pokemonEvolutionChain.chain.evolves_to[0]
                            .evolves_to[0].evolution_details[0].min_level
                        : "?"}
                    </div>
                    <img
                      id="current-pokemon-evolution-2"
                      className="current-pokemon-evolution-image"
                      alt="second evolution image"
                      onClick={() => {
                        pokemonId = filterIdFromSpeciesURL(
                          pokemonEvolutionChain.chain.evolves_to[0]
                            .evolves_to[0].species.url
                        );

                        handlePromise(
                          () => getPokemonInfo(pokemonId),
                          setPokemonInfo
                        );
                      }}
                      src={
                        pokemonEvolutionChain &&
                        pokemonEvolutionChain.chain.evolves_to[0]?.evolves_to[0]
                          ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                            filterIdFromSpeciesURL(
                              pokemonEvolutionChain.chain.evolves_to[0]
                                ?.evolves_to[0]?.species.url
                            ) +
                            ".png"
                          : "../pokeball-icon.png"
                      }
                    />
                  </>
                ) : null}
              </div>
            </div>
          </div>

          {pokemonInfo ? null : (
            <div id="current-pokemon-empty">
              <span className="font-size-18">
                Select a Pokemon
                <br />
                to display here.
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

PokemonInfo.propTypes = {
  pokemonId: PropTypes.number,
};

export default PokemonInfo;
