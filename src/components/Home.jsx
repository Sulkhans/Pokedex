import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-neutral-200">
      <div className="bg-[#e3350d] h-[32rem] w-80 rounded-md shadow-xl shadow-neutral-500 relative">
        <div className="bg-[#be2c0b] h-12 rounded-t-md" />
        <div className=" absolute top-4 left-7 flex justify-center items-center w-14 h-14 rounded-full bg-neutral-300">
          <div className="w-11 h-11 rounded-full bg-blue-500" />
        </div>
        <div className="flex gap-2 absolute top-3 left-24">
          <div className="h-3 w-3 rounded-full shadow-inner bg-red-600" />
          <div className="h-3 w-3 rounded-full shadow-inner bg-yellow-400" />
          <div className="h-3 w-3 rounded-full shadow-inner bg-lime-600" />
        </div>
        <div className="flex">
          <div className="bg-[#be2c0b] h-10 w-2/5" />
          <div
            style={{
              borderLeft: "2.5rem solid #be2c0b",
              borderBottom: "2.5rem solid transparent",
            }}
          />
        </div>
        <main className="m-7">
          <div className="bg-neutral-300 h-60 rounded-md p-5">
            <nav className="bg-sky-400 h-full p-2 flex flex-col gap-2 overflow-y-scroll text-white text-lg">
              <Link
                to="/Pokedex/Pokemon"
                className=" hover:bg-neutral-300 px-4 py-3 bg-[#c32f27] rounded-sm"
              >
                Pokemon
              </Link>
              <Link
                to="/Pokedex/Items"
                className=" hover:bg-neutral-300 px-4 py-3 bg-black rounded-sm"
              >
                Items
              </Link>
              <Link
                to="/Pokedex/Moves"
                className=" hover:bg-neutral-300 px-4 py-3 bg-black rounded-sm"
              >
                Moves
              </Link>
              <Link
                to="/Pokedex/Locations"
                className=" hover:bg-neutral-300 px-4 py-3 bg-black rounded-sm"
              >
                Locations
              </Link>
              <Link
                to="/Pokedex/Locations"
                className=" hover:bg-neutral-300 px-4 py-3 bg-black rounded-sm"
              >
                Locations
              </Link>
            </nav>
          </div>
          <div>
            <div className="flex gap-5 mt-5 justify-center">
              <div className="h-3 w-14 rounded-full bg-[#be2c0b]" />
              <div className="h-3 w-14 rounded-full bg-sky-950" />
            </div>
            <div className="flex gap-7">
              <div className="w-11 h-11 rounded-full bg-neutral-900" />
              <div className="w-24 bg-[#4fad60] rounded-md mt-7 mr-7" />
              <div className="relative mt-3">
                <div className="h-16 w-6 bg-neutral-900 rounded-md" />
                <div className="h-6 w-16 absolute top-5 -left-5 bg-neutral-900 rounded-md" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
