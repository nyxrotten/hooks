import './App.css';
import useFetchCharacters from './hooks/useFecthCharacters';


function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const endPointPokemon = useFetchCharacters(urlPokemon)
  const endPointRick = useFetchCharacters(urlRick)

  const { data, loading, error } = useFetchCharacters(urlPokemon);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  
  return (
    <>
     <div>
      <h2>Data from PokemonAPI</h2>
      <h3>{endPointPokemon.data.name}</h3>
      <img src={endPointPokemon.data.sprites.front_default}/>
      <h2>Data from Rick&Morty API</h2>
      <h3>{endPointRick.data.name}</h3>
      <img src={endPointRick.data.image}/>
    </div>
    </>
  );
}

export default App;
