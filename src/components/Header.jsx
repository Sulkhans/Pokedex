import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/Menu.svg?react";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);
  return (
    <header className="select-none">
      <div className="h-11 flex items-center justify-end bg-[#be2c0b]">
        <Link
          to="/Pokedex/Pokemon"
          className="flex h-8 w-36 absolute top-5 left-7 sm:left-10 z-50"
        >
          <img src={logo} draggable={false} />
          <h1 className="text-2xl ml-1 tracking-wider font-medium text-white">
            Pokédex
          </h1>
        </Link>
        <button
          className="cursor-pointer mr-6 outline-none"
          onClick={() => setMenuOn(!menuOn)}
        >
          <Menu className="h-5 w-5 fill-white" />
        </button>
      </div>
      <div className="flex absolute">
        <div className="w-48 sm:w-56 h-7 bg-[#be2c0b]" />
        <div
          style={{
            borderLeft: "1.75rem solid #be2c0b",
            borderBottom: "1.75rem solid transparent",
          }}
        />
      </div>
      {menuOn && (
        <nav
          className="absolute right-0 top-13 bg-neutral-800 text-white flex flex-col text-center z-50"
          onClick={() => setMenuOn(false)}
        >
          <Link
            to={`/Pokedex/Pokemon`}
            className="py-4 px-6 hover:bg-neutral-900 transition-all"
          >
            Pokemon
          </Link>
          <Link
            to={`/Pokedex/Move`}
            className="py-4 px-6 hover:bg-neutral-900 transition-all"
          >
            Moves
          </Link>
          <Link
            to={`/Pokedex/Ability`}
            className="py-4 px-6 hover:bg-neutral-900 transition-all"
          >
            Abilities
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
