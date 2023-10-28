import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/Menu.svg?react";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);

  return (
    <header>
      <div className="h-11 flex items-center justify-end px-6 text-white bg-[#e3350d]">
        <div className="flex h-8 absolute top-5 left-11">
          <img src={logo} />
          <h1 className="text-2xl ml-1 tracking-wider">Pokédex</h1>
        </div>
        <button className="cursor-pointer" onClick={() => setMenuOn(!menuOn)}>
          <Menu className="h-5 w-5 fill-white" />
        </button>
      </div>
      <div className="flex">
        <div className="w-56 h-7 bg-[#e3350d]" />
        <div
          style={{
            borderLeft: "2rem solid #e3350d",
            borderBottom: "28px solid transparent",
          }}
        />
        <nav
          className={`absolute right-0 flex flex-col bg-neutral-200 
          ${menuOn ? "flex" : "hidden"}`}
        >
          <Link className="px-4 py-3 hover:bg-neutral-300">Pokemon</Link>
          <Link className="px-4 py-3 hover:bg-neutral-300">Items</Link>
          <Link className="px-4 py-3 hover:bg-neutral-300">Moves</Link>
          <Link className="px-4 py-3 hover:bg-neutral-300">Locations</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
