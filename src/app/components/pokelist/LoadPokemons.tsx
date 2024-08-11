"use client";
import { getPokemons } from "@/app/services/getPokemons";
import React, { useEffect, useState } from "react";
import { PokemonCard } from "../pokemon-card";
import { usePokemonFilter } from "@/hooks/usePokemonFilter";

export type PokemonType = {
  id: string;
  sprites: string;
  name: string;
  types: string[];
};

export default function LoadPokemons({ limit }: { limit: number }) {
  const [limitValue, setLimitValue] = useState(20);
  // const [pokemons, setPokemons] = useState<PokemonType[] | undefined>([]);
  const {pokemons, setPokemons} =  usePokemonFilter();

  function handleClick(limit: number) {
    setLimitValue(limit + 10);
    return limitValue;
  }

  useEffect(() => {
    async function fetchPokemon() {
      const data = await getPokemons(limitValue);
      setPokemons(data);
    }
    fetchPokemon();
  }, [limit, limitValue]);
  return (
    <div className="my-4 mx-auto relative">
      <button
        className=" z-10 fixed bg-blue-400 p-2 size-10 right-1/2 translate-x-1/2 bottom-4 font-black rounded-full hover:bg-blue-600 "
        onClick={() => handleClick(limitValue)}
      >
        +
      </button>
      <div className=" flex flex-wrap gap-5 p-5 justify-center">
        { pokemons &&  pokemons.map((poke, i) => (
          <PokemonCard key={i} pokemon={poke}></PokemonCard>
        ))}
      </div>
    </div>
  );
}
