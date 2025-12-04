
// const API_KEY = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;
// const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`;
// https://pokeapi.co/api/v2/pokemon/ditto

export const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=0`);
    const data = await response.json();
    // console.log(data.results);
    return data.results;
}

export const searchPokemonQuery = async (query) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await response.json();
    return data.forms;
}

// set up fetch api for image sprites -------
// api function for pokemon id number
 export const getPokemonSprites = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`);
    const data = await response.json();
    // console.log(`getPokemonSprites api function: ${data.forms.name}`);
    return data.sprites.front_default;
 }


// api function for image sprites