
// const API_KEY = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;
// const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`;


export const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=0`);
    const data = await response.json();
    return data.results;
}
