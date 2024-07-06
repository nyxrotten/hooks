import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  

const Axios = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(urlPokemon)
        .then((res) => {
            setData(res.data)
        })
    }, []) 
  console.log(data.name)
}
  
  return (
    <>
    <p>{Axios()}</p>
    </>
  );
}

export default App;
