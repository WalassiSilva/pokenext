"use client";
import { usePokemonFilter } from "@/hooks/usePokemonFilter";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

export default function NavItem() {
  const { setPokemons, setType, setSearch, pokemons } = usePokemonFilter();

  function handleReset() {
    setPokemons(pokemons);
    setSearch("");
    setType("none");
  }
  return (
    <Link href={"/"} onClick={handleReset} className="flex items-center justify-center">
      <FaHome className="text-white size-14"  />
    </Link>
  );
}
