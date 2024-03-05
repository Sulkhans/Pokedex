import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/Menu.svg?react";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);

  return (
    <header className="static">
      <div className="h-11 flex items-center justify-end bg-[#be2c0b]">
        <Link
          to="/Pokedex/"
          className="flex h-8 w-36 absolute top-5 left-7 sm:left-10"
        >
          <img src={logo} />
          <h1 className="text-2xl ml-1 tracking-wider font-medium text-white">
            Pokedex
          </h1>
        </Link>
        <button
          className="cursor-pointer mr-6"
          onClick={() => setMenuOn(!menuOn)}
        >
          <Menu className="h-5 w-5 fill-white" />
        </button>
      </div>
      <div className="flex">
        <div className="w-48 sm:w-56 h-7 bg-[#be2c0b]" />
        <div
          style={{
            borderLeft: "1.75rem solid #be2c0b",
            borderBottom: "1.75rem solid transparent",
          }}
        />
        <nav
          className={`absolute right-0 flex flex-col shadow-2xl sm:text-lg bg-neutral-200 text-center z-50
          ${menuOn ? "flex" : "hidden"}`}
          onClick={() => setMenuOn(false)}
        >
          <Link
            to="/Pokedex/Pokemon"
            className="px-6 py-4 hover:bg-neutral-300 transition-all"
          >
            Pokemon
          </Link>
          <Link
            to="/Pokedex/Item"
            className="px-6 py-4 hover:bg-neutral-300 transition-all"
          >
            Items
          </Link>
          <Link
            to="/Pokedex/Ability"
            className="px-6 py-4 hover:bg-neutral-300 transition-all"
          >
            Abilities
          </Link>
          <Link
            to="/Pokedex/Move"
            className="px-6 py-4 hover:bg-neutral-300 transition-all"
          >
            Moves
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
