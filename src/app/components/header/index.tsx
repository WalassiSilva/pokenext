import Image from "next/image";
import Link from "next/link";
import Search from "./Search";

export default function Header() {
  return (
    <>
      <header>
        <nav className="flex justify-between bg-[#0e0e0e] items-center">
          <Link href={"/"}>
            <Image
              src={"/pokeball.png"}
              alt="Pokeball"
              width={48}
              height={48}
              className="w-auto"
            />
          </Link>
          <div>
            <Image
              priority
              src={"/logo.webp"}
              alt="Pokemon Logo"
              width={130}
              height={48}
              className="w-auto"
            />
          </div>
          <Link href={"/"}>
            <Image
              src={"/pokeball.png"}
              alt="alterar tema"
              width={48}
              height={48}
              className="w-auto"
            />
          </Link>
        </nav>
        <Search />
      </header>
    </>
  );
}
