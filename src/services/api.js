export const getPokemon = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=15&offset=0`
  );
  const data = await response.json();
  return data.results;
};

export const searchPokemonQuery = async (query) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
  const data = await response.json();
  return data.forms;
};

export const getPokemonSprites = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`);
  const data = await response.json();
  return data.sprites.front_default;
};
