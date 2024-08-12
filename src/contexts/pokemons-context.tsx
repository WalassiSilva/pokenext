"use client";

import { PokemonType } from "@/app/components/pokelist/LoadPokemons";
import { createContext, useState } from "react";

interface PokemonsContextProviderProps {
  children: React.ReactNode;
}

export const PokemonsContext = createContext({
  search: "",
  type: "",
  limit: 0,
  pokemons: {} as any,
  setPokemons: (value: any) => {},
  setSearch: (value: string) => {},
  setType: (value: string) => {},
  setLimit: (value: number) => {},
});

export function PokemonsContextProvider({
  children,
}: PokemonsContextProviderProps) {
  const [type, setType] = useState("");
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState<PokemonType[]>();

  return (
    <PokemonsContext.Provider
      value={{
        limit,
        type,
        search,
        pokemons,
        setType,
        setLimit,
        setSearch,
        setPokemons,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}
