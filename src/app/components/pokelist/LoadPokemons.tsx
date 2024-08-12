"use client";
import { getPokemons } from "@/app/services/getPokemons";
import React, { useEffect, useState } from "react";
import { PokemonCard } from "../pokemon-card";
import { usePokemonFilter } from "@/hooks/usePokemonFilter";
import Image from "next/image";

export type PokemonType = {
  id: string;
  sprites: string;
  name: string;
  types: string[];
};

export default function LoadPokemons() {
  // const [limitValue, setLimitValue] = useState(20);
  // const [pokemons, setPokemons] = useState<PokemonType[] | undefined>([]);
  const { pokemons, setPokemons, setLimit, limit } = usePokemonFilter();

  const [limitControl, setLimitControl] = useState(10);
  const filteredPokemons = pokemons?.slice(0, limitControl);

  function handleClick() {
    setLimitControl((prev) => prev + 10);
  }

  useEffect(() => {
    async function fetchPokemon() {
      const data = await getPokemons(limit);
      setPokemons(data);
    }
    fetchPokemon();
  }, [limit]);
  return (
    <div className="my-4 mx-auto relative">
      <button
        className=" z-10 fixed bg-blue-400 p-2 size-10 right-1/2 translate-x-1/2 bottom-4 font-black rounded-full hover:bg-blue-600 "
        onClick={() => handleClick()}
      >
        +
      </button>
      <div className=" flex flex-wrap gap-5 p-5 justify-center">
        {filteredPokemons ? (
          filteredPokemons.map((poke: PokemonType, i: number) => (
            <PokemonCard key={i} pokemon={poke}></PokemonCard>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center gap-40">
            <p>Loading Pokemons...</p>
            <Image
              src={"/pokeball.png"}
              alt="pokeball"
              width={48}
              height={48}
              className="animate-spin"
            />
          </div>
        )}
      </div>
    </div>
  );
}
