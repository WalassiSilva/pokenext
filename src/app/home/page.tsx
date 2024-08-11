
import Search from "../components/header/Search";
import LoadPokemons from "../components/pokelist/LoadPokemons";

export default function Page() {
  const limit = 5;
  return (
    <div>
      
      <Search />
      <LoadPokemons limit={limit} />
    </div>
  );
}
