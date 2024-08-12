import { Suspense } from "react";
import Search from "../components/header/Search";
import LoadPokemons from "../components/pokelist/LoadPokemons";

export default function Page() {
  return (
    <div>
      <Search />
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
