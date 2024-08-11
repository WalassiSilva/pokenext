"use client";

import { PokemonType } from "@/app/components/pokelist/LoadPokemons";
import { PokemonCard } from "@/app/components/pokemon-card";
import { createContext, useState } from "react";

interface PokemonsContextProviderProps {
  children: React.ReactNode;
}

export const PokemonsContext = createContext({
  search: "",
  type: "",
  pokemons: {} as any,
  setPokemons: (value: any) => {} ,
  setSearch: (value: string) => {},
  setType: (value: string) => {},
});

export function PokemonsContextProvider({
  children,
}: PokemonsContextProviderProps) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [pokemons, setPokemons] = useState<PokemonType[] >();

  return (
    <PokemonsContext.Provider
      value={{
        type,
        setType,
        search,
        setSearch,
        pokemons,
        setPokemons,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}
