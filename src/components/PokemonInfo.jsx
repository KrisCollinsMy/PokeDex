const PokemonInfo = () => {
  return (
    <>
      <div id="current-pokemon-responsive-background" className="hide"></div>
      <div
        id="current-pokemon-responsive-close"
        className="hide"
        onClick="closePokemonInfo()"
      >
        <img src="../close-icon.png" />
      </div>

      <div id="current-pokemon-container" className="col-span-1">
        <img
          id="current-pokemon-image"
          src="../no-pokemon-selected-image.png"
        />

        <div id="current-pokemon-info" className="hide">
          <span id="current-pokemon-id" className="font-size-12 bold">
            #213
          </span>

          <h2 id="current-pokemon-name">Pikachu</h2>

          <div id="current-pokemon-types" className="row center"></div>

          <h4>Pokedex Entry</h4>
          <span id="current-pokemon-description"></span>

          <div className="row center">
            <div className="width-100 column center margin-5">
              <h4>Height</h4>
              <div
                id="current-pokemon-height"
                className="pokemon-info-variable-container"
              ></div>
            </div>
            <div className="width-100 column center margin-5">
              <h4>Weight</h4>
              <div
                id="current-pokemon-weight"
                className="pokemon-info-variable-container"
              ></div>
            </div>
          </div>

          <div className="column">
            <h4>Abilities</h4>
            <div className="row">
              <div
                id="current-pokemon-abilitiy-0"
                className="pokemon-info-variable-container"
              ></div>
              <div
                id="current-pokemon-abilitiy-1"
                className="pokemon-info-variable-container"
              ></div>
            </div>
          </div>

          <h4>Stats</h4>
          <div className="row center">
            <div className="current-pokemon-stats-container column">
              <div
                className="current-pokemon-stats-name"
                style={{background: '#DF2140'}}
              >
                HP
              </div>
              <h5 id="current-pokemon-stats-hp">84</h5>
            </div>
            <div className="current-pokemon-stats-container column">
              <div
                className="current-pokemon-stats-name"
                style={{background: "#FF994D"}}
              >
                ATK
              </div>
              <h5 id="current-pokemon-stats-atk">84</h5>
            </div>
            <div className="current-pokemon-stats-container column">
              <div
                className="current-pokemon-stats-name"
                style={{background: "#eecd3d"}}
              >
                DEF
              </div>
              <h5 id="current-pokemon-stats-def">84</h5>
            </div>
            <div className="current-pokemon-stats-container column">
              <div
                className="current-pokemon-stats-name"
                style={{background: "#85DDFF"}}
              >
                SpA
              </div>
              <h5 id="current-pokemon-stats-spa">84</h5>
            </div>
            <div className="current-pokemon-stats-container column">
              <div
                className="current-pokemon-stats-name"
                style={{background: "#96da83"}}
              >
                SpD
              </div>
              <h5 id="current-pokemon-stats-spd">84</h5>
            </div>
            <div className="current-pokemon-stats-container column">
              <div
                className="current-pokemon-stats-name"
                style={{background: "#FB94A8"}}
              >
                SPD
              </div>
              <h5 id="current-pokemon-stats-speed">84</h5>
            </div>
            <div
              className="current-pokemon-stats-container column"
              style={{background: "#88AAEA"}}
            >
              <div
                className="current-pokemon-stats-name"
                style={{background: "#7195DC"}}
              >
                TOT
              </div>
              <h5 id="current-pokemon-stats-total">84</h5>
            </div>
          </div>

          <div id="current-pokemon-evolution-chain-container">
            <h4>Evolution</h4>
            <div className="row center">
              <img
                id="current-pokemon-evolution-0"
                className="current-pokemon-evolution-image"
                src="../pokeball-icon.png"
              />
              <div
                id="current-pokemon-evolution-level-0"
                className="current-pokemon-evolution-level-container font-size-12 bold"
              >
                Lv. 16
              </div>
              <img
                id="current-pokemon-evolution-1"
                className="current-pokemon-evolution-image"
                src="../pokeball-icon.png"
              />
              <div
                id="current-pokemon-evolution-level-1"
                className="current-pokemon-evolution-level-container font-size-12 bold"
              >
                Lv. 36
              </div>
              <img
                id="current-pokemon-evolution-2"
                className="current-pokemon-evolution-image"
                src="../pokeball-icon.png"
              />
            </div>
          </div>
        </div>

        <div id="current-pokemon-empty">
          <span className="font-size-18">
            Select a Pokemon
            <br />
            to display here.
          </span>
        </div>
      </div>
    </>
  );
};

export default PokemonInfo;
