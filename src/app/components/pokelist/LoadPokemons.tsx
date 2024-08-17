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
  const { pokemons, setPokemons, limit, search } = usePokemonFilter();

  const [limitControl, setLimitControl] = useState(10);
  const filteredPokemons = pokemons?.slice(0, limitControl);
  const searchedPokemons = pokemons?.filter((pokemon: PokemonType) =>
    pokemon?.name.toLowerCase().includes(search.toLowerCase())
  );

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
    <div className="my-4 mx-auto relative mt-24">
      <button
        className=" z-10 fixed bg-blue-400  size-16 right-1/2 translate-x-1/2 bottom-4 font-black rounded-full shadow-lg hover:shadow-white hover:bg-blue-600 "
        onClick={() => handleClick()}
      >
        <Image src={"/pokeball.png"} alt="pokeball" width={64} height={64} className="hover:animate-spin"/>
      </button>
      <div className=" flex flex-wrap gap-5 p-5 justify-center">
        {filteredPokemons && search.length === 0 ? (
          filteredPokemons.map((poke: PokemonType, i: number) => (
            <PokemonCard key={i} pokemon={poke}></PokemonCard>
          ))
        ) : searchedPokemons && search.length !== 0 ? (
          searchedPokemons.map((poke: PokemonType, index: number) => (
            <PokemonCard key={index} pokemon={poke}></PokemonCard>
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
