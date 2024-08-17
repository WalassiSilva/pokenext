"use client";
import Search from "./Search";
import NavItem from "./NavItem";
import { ThemeSwitch } from "./ThemeSwitch";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Header() {
  return (
    <>
      <header className={``}>
        <Nav />
      </header>
    </>
  );
}

export function Nav() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;

    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-100%",
        },
        visible: {
          y: "0%",
        },
      }}
      className="fixed top-3 z-10 w-full justify-center px-5 md:px-[10%] lg:px-[20%] "
    >
      <nav className="flex justify-between sm:gap-4 md:gap-3 rounded-3xl bg-black p5 *:px-2 md:*:px-7 *:py-2 *:rounded-lg">
        <NavItem />
        <Search />

        <ThemeSwitch />
      </nav>
    </motion.div>
  );
}
