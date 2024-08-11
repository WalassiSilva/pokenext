import { PokemonsContext } from "@/contexts/pokemons-context";
import { useContext } from "react";

export function usePokemonFilter() {
  return useContext(PokemonsContext);
}
