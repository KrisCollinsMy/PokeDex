import "./App.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div className="bg-[#F6F8FC] w-full h-full flex flex-col">
      <img
        src="/public/pokeball-icon.png"
        alt="Pokeball Icon"
        className="absolute -top-20 -left-40"
      />
        <PokemonList />
        <PokemonInfo />
    </div>
  );
}

export default App;
