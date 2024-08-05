
import LoadPokemons from "../components/pokelist/LoadPokemons";

export default function Page() {
  const limit = 5;
  return (
    <div>
      <LoadPokemons limit={limit} />
    </div>
  );
}
