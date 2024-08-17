import { Suspense } from "react";
import Search from "../components/header/Search";
import LoadPokemons from "../components/pokelist/LoadPokemons";

export default function Page() {
  return (
    <div className="md:px-[10%] lg:px-[18%]">
      <Suspense
        fallback={
          <div className="text-center text-white w-full h-screen">
            Loading...
          </div>
        }
      >
        <LoadPokemons />
      </Suspense>
    </div>
  );
}
