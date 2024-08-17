import { PokemonCard } from "@/app/components/pokemon-card";
import { getAbilities } from "@/app/services/getAbilities";
import { getPokemon } from "@/app/services/getPokemon";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const pokemonData = await getPokemon(params.id);
  const pokemonAbilities = await Promise.all(
    pokemonData.abilities.map(
      async (ability: { ability: { name: string } }) => {
        return await getAbilities(ability.ability.name);
      }
    )
  );
  const abilityDetails = pokemonAbilities.map((item, i) => {
    return (
      <details key={i} className="bg-gray-500 p-2">
        <summary className="font-bold cursor-pointer ">{item.name}</summary>
        {item.effect_entries.map(
          (
            effectItem: { language: { name: string }; effect: string },
            i: number
          ) => {
            if (effectItem.language.name.includes("en")) {
              return <p key={i}>{effectItem.effect}</p>;
            }
          }
        )}
      </details>
    );
  });

  return (
    <div className="flex flex-col gap-5 *:capitalize relative mt-28">
      <div className="flex px-2 mx-auto">
        <PokemonCard pokemon={pokemonData} />
      </div>
      <div className="flex gap-4 mx-auto *:rounded-md ">
        <div className="bg-gray-500 p-2">
          <span className="font-bold">Height:</span> {+pokemonData.height / 10}m
        </div>
        <div className="bg-gray-500 p-2">
          <span className="font-bold">Weight:</span> {+pokemonData.weight / 10}
          kg
        </div>
      </div>
      <div className="bg-white/40 dark:bg-black/40 shadow-lg py-8 min-h-96 mx-4 md:mx-[20%] lg:mx-[30%] rounded-lg">
        <div className="flex gap-4 flex-col *:rounded-md px-10">
          <h3 className="font-bold text-xl">Abilities</h3>
          {abilityDetails}
        </div>
        <div className="absolute top-1/3 -translate-y-1/2 left-3 flex justify-between border rounded-full p-1 bg-white dark:bg-black">
          <Link
            href={`/pokemon-details/${
              params.id === "1" ? 1025 : +params.id - 1
            }`}
          >
            <ChevronLeft />
          </Link>
        </div>
        <div className="absolute top-1/3 -translate-y-1/2 right-3 flex justify-between border rounded-full p-1 bg-white  dark:bg-black">
          <Link
            href={`/pokemon-details/${
              params.id === "1025" ? 1 : +params.id + 1
            }`}
          >
            <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
