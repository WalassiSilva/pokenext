"use client";
import { usePokemonFilter } from "@/hooks/usePokemonFilter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavItem() {
  const {setPokemons,setType, setSearch, pokemons} = usePokemonFilter();

  function handleReset() {
    setPokemons(pokemons);
    setSearch("");
    setType("none");
    
  }
  return (
    <Link href={"/"} onClick={handleReset}>
      <Image
        src={"/pokeball.png "}
        alt="Pokeball"
        width={48}
        height={48}
        className="w-auto"
      />
    </Link>
  );
}
