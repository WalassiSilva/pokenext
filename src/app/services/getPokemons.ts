export async function getPokemons(limit: number) {
  try {
    const urls = await getPokemonsUrl(limit=151, 0);
    const requests = urls.map(async (url: string) => {
      const response = await fetch(url);
      return response.json();
    });
    const pokemonList = await Promise.all(requests);
    return pokemonList;
  } catch (error) {
    console.log(error);
  }
}

async function getPokemonsUrl(limit: number, offset: number) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await res.json();
  const urlsList = data.results.map((item:any) => item.url);

  return urlsList;
}
