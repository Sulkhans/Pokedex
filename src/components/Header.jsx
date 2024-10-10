import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/Menu.svg?react";
import logo from "../assets/logo.png";
import Pokedex from "../assets/Pokedex.png";
import Item from "../assets/Item.png";
import Move from "../assets/Move.png";
import Ability from "../assets/Lure.png";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);
  return (
    <header className="static select-none">
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
          className="cursor-pointer mr-6 outline-none"
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
      </div>
      <nav
        className={`fixed bg-[#fcfcfc] pl-3 pr-2 py-4 gap-4 rounded-l-md border-2 border-r-0 border-neutral-700 right-0 top-1/2 -translate-y-1/2 text-sm flex flex-col font-medium text-center text-neutral-700 transition-all duration-1000 z-50
        ${!menuOn && "translate-x-24"}`}
        onClick={() => setMenuOn(false)}
      >
        <Link to={`/Pokedex/Pokemon`}>
          <img src={Pokedex} className="w-10 2xl:w-12 m-auto" />
          Pokemon
        </Link>
        <Link to={`/Pokedex/Move`}>
          <img src={Move} className="w-10 2xl:w-12 m-auto" />
          Moves
        </Link>
        <Link to={`/Pokedex/Ability`}>
          <img src={Ability} className="w-10 2xl:w-12 m-auto" />
          Abilities
        </Link>
        <Link to={`/Pokedex/Item`}>
          <img src={Item} className="w-10 2xl:w-12 m-auto" />
          Items
        </Link>
      </nav>
    </header>
  );
};

export default Header;
