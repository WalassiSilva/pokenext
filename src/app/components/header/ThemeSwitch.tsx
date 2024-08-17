"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="/pokeball.png"
        alt="Pokeball"
        width={48}
        height={48}
        title="Pokeball"
      />
    );

  if (resolvedTheme === "dark") {
    return <button>
      <Image src="/ultraball.png" alt="Pokeball" width={48} height={48} onClick={() => setTheme("light")} />
    </button>;
  }

  if (resolvedTheme === "light") {
    return <button>
      <Image src="/pokeball.png" alt="Pokeball" width={48} height={48} onClick={() => setTheme("dark")} />
    </button>;
  }
}
