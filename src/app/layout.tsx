import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { PokemonsContextProvider } from "@/contexts/pokemons-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokeNext",
  description: "PokeApi next projetc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <PokemonsContextProvider>
          <Header />
          {children}
        </PokemonsContextProvider>
      </body>
    </html>
  );
}
