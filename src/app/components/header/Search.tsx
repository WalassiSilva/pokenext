"use client";
import { getPokemon } from "@/app/services/getPokemon";
import React, { useEffect, useState } from "react";
import { PokemonCard } from "../pokemon-card";
import { PokemonType } from "../pokelist/LoadPokemons";
import { usePokemonFilter } from "@/hooks/usePokemonFilter";
import { getPokemons } from "@/app/services/getPokemons";

export default function Search() {
  // const [value, setValue] = useState("");
  const [pokemon, setPokemon] = useState<PokemonType | null>();

  const { type, setType, pokemons, limit, setPokemons, search, setSearch } = usePokemonFilter();

  useEffect(() => {
    const getPokemonData = async () => {
      const pokemonData = await getPokemons(limit);
      if (pokemonData) {
        const results = await Promise.all(
          pokemonData.map(async (pokemon) => {
            return await getPokemon(pokemon.name);
          })
        );
        setPokemons([...results]);
      }
    };
    getPokemonData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemons(limit);

      if (type === "none") {
        setPokemons(data);
        return;
      }

      if (data) {
        const filtered = data?.filter((pokemon) => {
          return (
            pokemon.types[0].type.name.includes(type) ||
            pokemon.types[1]?.type.name.includes(type)
          );
        });
        setPokemons(filtered);
      }
    };
    fetchData();
  }, [type]);

  // useEffect(() => {
  //   if (value === "") {
  //     setPokemons(pokemons);
  //     return;
  //   }
  //   setPokemons(() =>
  //     pokemons.filter((pokemon:PokemonType) => pokemon.name.includes(value.toLowerCase()))
  //   );
  // }, [value]);

  function submitHandle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (search) {
      const fetchData = async () => {
        const data = await getPokemon(search);
        setSearch("");
        setPokemon(data);
      };
      fetchData();
    }
  }
  function filterHandle(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setType(value);
  }
  const searchedPokemons = pokemons?.filter((pokemon: PokemonType) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  function clearHandle() {
    setPokemon(null);
    // setPokemons(pokemons);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <>
      <form onSubmit={submitHandle}>
        <div className="flex flex-col justify-center items-center gap-4 px-2 py-4 gradient-custom">
          <div className="flex items-center">
            <input
              value={search}
              onChange={handleInputChange}
              type="text"
              placeholder="Insert Pokemon number or Id "
              className="bg-zinc-800 rounded-lg p-2 placeholder:text-xs outline-none"
            />
            <button
              onClick={clearHandle}
              className="flex justify-center items-center -ml-10 bg-red-600 rounded-lg h-10 w-10 hover:bg-red-400 transition  ease-in-out"
            >
              ✖
            </button>
          </div>

          <select
            className="bg-zinc-800 rounded-lg p-2 placeholder:text-xs *:capitalize"
            onChange={filterHandle}
          >
            <option value="none">Select a type</option>
            <option className="bg-[#729f3f]" value="bug">
              Bug
            </option>
            <option className="bg-[#707070]" value="dark">
              Dark
            </option>
            <option className="bg-[#53a4cf]" value="dragon">
              Dragon
            </option>
            <option className="bg-[#eed535]" value="electric">
              Electric
            </option>
            <option className="bg-[#fdb9e9]" value="fairy">
              Fairy
            </option>
            <option className="bg-[#d56723]" value="fighting">
              Fighting
            </option>
            <option className="bg-[#fd7d24]" value="fire">
              Fire
            </option>
            <option className="bg-[#bdb9b8]" value="flying">
              Flying
            </option>
            <option className="bg-[#7b62a3]" value="ghost">
              Ghost
            </option>
            <option className="bg-[#9bcc50]" value="grass">
              Grass
            </option>
            <option className="bg-[#ab9842]" value="ground">
              Ground
            </option>
            <option className="bg-[#51c4e7]" value="ice">
              Ice
            </option>
            <option className="bg-[#a4acaf]" value="normal">
              Normal
            </option>
            <option className="bg-[#b97fc9]" value="poison">
              Poison
            </option>
            <option className="bg-[#f366b9]" value="psychic">
              Psychic
            </option>
            <option className="bg-[#a38c21]" value="rock">
              Rock
            </option>
            <option className="bg-[#9eb7b8]" value="steel">
              Steel
            </option>
            <option className="bg-[#4592c4]" value="water">
              Water
            </option>
          </select>

          {/* <TypeSelect filterHandle={filterHandle}/> */}
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
