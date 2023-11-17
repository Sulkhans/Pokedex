import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/Menu.svg?react";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);

  return (
    <header className="static">
      <div className="h-11 flex items-center justify-end bg-[#be2c0b]">
        <Link to="/Pokedex/" className="flex h-8 w-36 absolute top-5 left-11">
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
        <div className="w-56 h-7 bg-[#be2c0b]" />
        <div
          style={{
            borderLeft: "1.75rem solid #be2c0b",
            borderBottom: "1.75rem solid transparent",
          }}
        />
        <nav
          className={`absolute right-0 flex flex-col bg-neutral-200 z-50
          ${menuOn ? "flex" : "hidden"}`}
        >
          <Link
            to="/Pokedex/Pokemon"
            className="px-4 py-3 hover:bg-neutral-300"
          >
            Pokemon
          </Link>
          <Link to="/Pokedex/Items" className="px-4 py-3 hover:bg-neutral-300">
            Items
          </Link>
          <Link to="/Pokedex/Moves" className="px-4 py-3 hover:bg-neutral-300">
            Moves
          </Link>
          <Link
            to="/Pokedex/Locations"
            className="px-4 py-3 hover:bg-neutral-300"
          >
            Locations
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
