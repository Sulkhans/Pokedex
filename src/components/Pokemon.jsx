import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Search from "../assets/Search.svg?react";
import Sort from "../assets/Sort.svg?react";

const Pokemon = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(20);
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1010")
      .then((res) => res.json())
      .then((json) => {
        const response = json.results.map((poke, index) => ({
          ...poke,
          id: index + 1,
          name:
            poke.name.charAt(0).toUpperCase() +
            poke.name.slice(1).replace("-", " "),
        }));
        setData(response);
        setPokemon(response);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    setPokemon(
      data.filter(
        (poke) =>
          poke.name.toLowerCase().includes(search.toLowerCase()) ||
          poke.id.toString().includes(search)
      )
    );
  }, [search]);

  const handleSearch = (event) => setSearch(event.target.value);
  const handleLoad = () => setNum((prevNum) => prevNum + 20);

  return (
    <main className="flex flex-col sm:mx-12">
      <section className="flex justify-center my-6 sm:mt-0 gap-x-2 sm:justify-end sm:mx-12 ">
        <Sort
          className="h-12 w-12 p-1 rounded-md bg-neutral-200 fill-neutral-400 rotate-180 hover:fill-neutral-600 hover:bg-neutral-300 transition-all cursor-pointer"
          onClick={() => setPokemon([...pokemon].sort((a, b) => a.id - b.id))}
        />
        <Sort
          className="h-12 w-12 p-1 rounded-md bg-neutral-200 fill-neutral-400 hover:fill-neutral-600 hover:bg-neutral-300 transition-all cursor-pointer"
          onClick={() => setPokemon([...pokemon].sort((a, b) => b.id - a.id))}
        />
        <div className="relative">
          <Search className="w-5 h-5 absolute right-3 top-[0.8rem] fill-neutral-400 " />
          <input
            value={search}
            onChange={handleSearch}
            placeholder="Search"
            className="bg-neutral-200 rounded-md w-56 p-3 outline-none hover:fill-neutral-600 hover:bg-neutral-300 transition-all"
            maxLength={15}
          />
        </div>
      </section>
      <section className="flex flex-wrap justify-center gap-6 md:gap-x-10 2xl:mx-40">
        {pokemon.slice(0, num).map((poke) => (
          <Link
            to={`/Pokedex/Pokemon/${poke.id}`}
            key={poke.id}
            className="p-4 rounded-md hover:scale-105 transition-all bg-gradient-to-b from-white from-50% to-neutral-200 to-95% ... overflow-hidden relative target"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
              className="w-28 mb-2 sm:w-32 md:w-36 lg:w-40 relative z-10"
            />
            <img
              src={logo}
              className="w-32 absolute -bottom-8 -right-10 opacity-40 pokeball"
            />
            <h1 className="text-xl relative">{poke.name}</h1>
            <h2 className="text-xs text-neutral-400">
              #{poke.id.toString().padStart(4, 0)}
            </h2>
          </Link>
        ))}
      </section>
      <div className="flex justify-center">
        <button
          onClick={handleLoad}
          className="rounded-md px-6 py-2 m-12 tracking-wide text-[#be2c0b] text-lg border-2 border-[#be2c0b] hover:text-white hover:bg-[#be2c0b] transition-all"
        >
          Load more
        </button>
      </div>
    </main>
  );
};

export default Pokemon;
