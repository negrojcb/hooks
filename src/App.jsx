import { use } from "react";
import useFecthCharacters from "./hooks/useFecthCharacters";
import Character from "./components/Character";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const urlPokemon = "https://pokeapi.co/api/v2/pokemon/12";
  const urlRick = "https://rickandmortyapi.com/api/character/1";

  const {
    data: pokemon,
    error: errorPokemon,
    loading: loadingPokemon,
  } = useFecthCharacters(urlPokemon);
  const {
    data: rick,
    error: errorRick,
    loading: loadingRick,
  } = useFecthCharacters(urlRick);

  return (
    <>
      <Character
        character={pokemon}
        error={errorPokemon}
        loading={loadingPokemon}
        name={pokemon?.name}
        img={pokemon?.sprites?.front_default}
      />
      <Character
        character={rick}
        error={errorRick}
        loading={loadingRick}
        name={rick?.name}
        img={rick?.image}
      />
    </>
  );
}

export default App;
