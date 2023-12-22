import React from "react";
// hooki
import { useState } from "react";

// komponenty
import Logo from "../atoms/Logo";
import Search from "../molecules/Search";
import Actions from "../molecules/Actions";
import Categories from "./Categories";
import HamburgerButton from "../atoms/HamburgerButton";

export default function Header() {
  const [isHidden, setIsHidden] = useState(true);

  const mobileMenuHandler = () => {
    setIsHidden(!isHidden);
  };
  return (
    <header className="flex justify-between px-2 py-2 bg-white">
      <HamburgerButton onClick={mobileMenuHandler} />

      {/* Mobilne menu kategorii */}
      <div
        className={
          isHidden ? "hidden transtion-all" : "md:hidden transition-all"
        }
      >
        <div className="absolute z-10 top-14 left-0">
          <Categories />
        </div>
      </div>
      {/* Mobilne menu kategorii -> Koniec */}

      <Logo />

      <Search />

      <Actions />
    </header>
  );
}
