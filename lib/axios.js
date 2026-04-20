import axios from 'axios';

// Instancia compartida para todas las llamadas a la PokeAPI.
const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 10000,
});

export default pokeApi;
