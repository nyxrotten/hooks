import {useState, useEffect} from 'react';
import axios from 'axios';

const Axios = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/1')
        .then((res) => {
            setData(res)
        })
    })
}