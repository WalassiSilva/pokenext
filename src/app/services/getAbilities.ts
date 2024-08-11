
export async function getAbilities(id: string) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/ability/${id}/`);
    if(!res.ok) {
      throw new Error("Failed to fetch abilities");
    }
    return res.json();
  } catch (error) {
    console.log(error);    
  }
}
