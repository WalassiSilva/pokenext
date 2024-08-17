import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { PokemonsContextProvider } from "@/contexts/pokemons-context";
import { Providers } from "./providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-light-mobile dark:bg-dark-mobile lg:bg-light-mode lg:dark:bg-dark-mode bg-no-repeat bg-fixed bg-cover`}>
        <PokemonsContextProvider>
          <Providers>
            <Header />
            {children}
          </Providers>
        </PokemonsContextProvider>
      </body>
    </html>
  );
}
