import Image from "next/image";
import Link from "next/link";

type PokemonCardProps = {
  name: string;
  id: number | string;
  sprite: string;
  types: [];
};

export function PokemonCard({ pokemon }: any) {
  const indexColor: string = pokemon.types[0].type.name;
  const setColor: string = typeColors[indexColor];

  return (
    <div className="relative group  transition-all duration-300 ">
      <div
        className={`absolute -inset-1 group-hover:bg-gradient-to-b from-red-600 from-50% to-50% to-white blur
         rounded-lg  group-hover:opacity-100 transition-all duration-500 !important`}
      ></div>

      <Link
        href={`/pokemon-details/${pokemon.id}`}
        className="relative w-52 h-72 rounded-lg border-2 flex flex-col overflow-hidden outline-none border-none group-hover"
      >
        <Image
          priority
          src={pokemon.sprites.other["official-artwork"].front_default}
          width={200}
          height={200}
          alt="pokemon sprite"
          className={`w-auto max-w-full flex flex-1 mx-auto ${setColor} `}
        />
        <div className="bg-slate-700 px-2 ">
          <div className="flex justify-between font-semibold">
            <p>{pokemon.name.toUpperCase()}</p>
            <p># {pokemon.id}</p>
          </div>
          <ul className=" flex justify-center gap-4 py-2 ">
            {pokemon.types.map(
              (item: { type: { name: string } }, i: number) => (
                <li
                  key={i}
                  className={` py-2 rounded-lg w-20 font-bold text-center 
            ${typeColors[item.type.name]}`}
                >
                  {item.type.name}
                </li>
              )
            )}
          </ul>
        </div>
      </Link>
    </div>
  );
}
export const typeColors: any = {
  bug: "bg-[#729f3f]",
  dark: "bg-[#707070]",
  dragon: "bg-gradient-to-b from-[#53a4cf] from-50% to-50% to-[#f16e57]",
  electric: "bg-[#eed535]",
  fairy: "bg-[#fdb9e9]",
  fighting: "bg-[#d56723]",
  fire: "bg-[#fd7d24]",
  flying: "bg-gradient-to-b from-[#3dc7ef] from-50% to-50% to-[#bdb9b8]",
  ghost: "bg-[#7b62a3]",
  grass: "bg-[#9bcc50]",
  ground: "bg-gradient-to-b from-[#f7de3f] from-50% to-50% to-[#ab9842]",
  ice: "bg-[#51c4e7]",
  normal: "bg-[#a4acaf]",
  poison: "bg-[#b97fc9]",
  psychic: "bg-[#f366b9]",
  rock: "bg-[#a38c21]",
  steel: "bg-[#9eb7b8]",
  water: "bg-[#4592c4]",
};
