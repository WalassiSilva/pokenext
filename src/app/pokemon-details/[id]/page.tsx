import { PokemonCard } from "@/app/components/pokemon-card";
import { getPokemon } from "@/app/services/getPokemon";

export default async function Page({ params }: { params: { id: string } }) {
  const pokemonData = await getPokemon(params.id);

  return (
    <div className="flex gap-5 *:capitalize">
      <div className="flex px-2">
        <PokemonCard pokemon={pokemonData} />
      </div>
      <div className="flex gap-4 flex-col *:rounded-md">
        <div className="bg-gray-500 p-2">
          <span className="font-bold">Height:</span> {pokemonData.height}{" "}
        </div>
        <div className="bg-gray-500 p-2">
          <span className="font-bold">Weight:</span> {pokemonData.weight}
        </div>
      </div>
      <div className="flex gap-4 flex-col *:rounded-md">
        {pokemonData.abilities.map((item: { ability: { name: string } }) => (
          <div key={Math.random()} className="bg-gray-500 p-2">
            {item.ability.name}
          </div>
        ))}
      </div>
    </div>
  );
}
