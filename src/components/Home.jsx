import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="h-[100dvh] flex justify-center items-center bg-neutral-100">
      <div className="bg-[#e3350d] h-[32rem] w-80 rounded-md shadow-xl shadow-neutral-500 relative bg-gradient-to-b from-[#e3350d] to-[#be2c0b] ... 2xl:scale-125">
        <div className="bg-[#be2c0b] h-12 rounded-t-md" />
        <div className=" absolute top-4 left-7 flex justify-center items-center w-14 h-14 rounded-full bg-neutral-300">
          <div className="w-11 h-11 rounded-full bg-sky-700" />
        </div>
        <div className="flex gap-2 absolute top-3 left-24">
          <div className="h-3 w-3 rounded-full shadow-inner bg-red-600" />
          <div className="h-3 w-3 rounded-full shadow-inner bg-yellow-400" />
          <div className="h-3 w-3 rounded-full shadow-inner bg-lime-600" />
        </div>
        <div className="flex">
          <div className="bg-[#be2c0b] h-10 w-2/5 shadow-md" />
          <div
            style={{
              borderLeft: "2.5rem solid #be2c0b",
              borderBottom: "2.5rem solid transparent",
            }}
          />
        </div>
        <main className="m-7">
          <div className="bg-neutral-300 h-64 rounded-md p-4">
            <Link
              to="/Pokedex/Pokemon"
              className="h-full bg-neutral-900 group flex justify-center items-center hover:bg-sky-500 transition-all duration-700"
            >
              <img
                src={logo}
                className="w-24 opacity-5 group-hover:opacity-50 transition-all duration-700"
              />
            </Link>
          </div>
          <div>
            <div className="flex gap-4 mt-4 justify-center">
              <div className="h-3 w-14 rounded-full bg-red-600 shadow-sm" />
              <div className="h-3 w-14 rounded-full bg-sky-900 shadow-sm" />
            </div>
            <div className="flex gap-7">
              <div className="w-11 h-11 rounded-full bg-neutral-900 shadow-xl" />
              <div className="w-24 rounded-md mt-7 mr-7 bg-green-600 shadow-sm" />
              <div className="relative mt-3">
                <div className="h-16 w-6 bg-neutral-900 rounded-md shadow-xl" />
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
