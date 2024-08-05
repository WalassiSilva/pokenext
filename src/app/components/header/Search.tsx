"use client";
import { getPokemon } from "@/app/services/getPokemon";
import React, { useState } from "react";
import { PokemonCard } from "../pokemon-card";
import { PokemonType } from "../pokelist/LoadPokemons";

export default function Search() {
  const [value, setValue] = useState("");
  const [pokemon, setPokemon] = useState<PokemonType | null>();

  function submitHandle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value) {
      const fetchData = async () => {
        const data = await getPokemon(value);

        setPokemon(data);
        setValue("");
      };
      fetchData();
    }
  }

  function clearHandle() {
    setPokemon(null);
  }

  return (
    <>
      <form onSubmit={submitHandle}>
        <div className="flex justify-between px-2 py-4 gradient-custom">
          <div className="flex items-center">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Insert Pokemon number or Id "
              className="bg-zinc-800 rounded-lg p-2 placeholder:text-xs outline-none"
            />
            <button
              onClick={clearHandle}
              className="flex justify-center items-center -ml-5 bg-red-600 rounded-lg h-full w-10 hover:bg-red-400 transition ease-in-out"
            >
              ✖
            </button>
          </div>
          <select className="bg-zinc-800 rounded-lg p-2 placeholder:text-xs *:capitalize">
            <option value="">Select a type</option>
            <option value="bug">bug</option>
            <option value="dark">dark</option>
            <option value="dragon">dragon</option>
            <option value="electric">electric</option>
            <option value="fairy">fairy</option>
            <option value="fighting">fighting</option>
            <option value="fire">fire</option>
            <option value="flying">flying</option>
            <option value="ghost">ghost</option>
            <option value="grass">grass</option>
            <option value="ground">ground</option>
            <option value="ice">ice</option>
            <option value="normal">normal</option>
            <option value="poison">poison</option>
            <option value="psychic">psychic</option>
            <option value="rock">rock</option>
            <option value="steel">steel</option>
            <option value="water">water</option>
          </select>
        </div>
      </form>
      {pokemon && (
        <div className="p-5 flex justify-center">
          <PokemonCard pokemon={pokemon} />
        </div>
      )}
    </>
  );
}
