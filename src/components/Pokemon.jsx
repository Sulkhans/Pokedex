import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../assets/Search.svg?react";
import Sort from "../assets/Sort.svg?react";

const Pokemon = () => {
  const [data, setData] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sorted, setSorted] = useState(true);
  const [range, setRange] = useState([0, 1025]);
  const regions = [
    { name: "Kanto", range: [0, 151] },
    { name: "Johto", range: [151, 251] },
    { name: "Hoenn", range: [251, 386] },
    { name: "Sinnoh", range: [386, 493] },
    { name: "Unova", range: [493, 649] },
    { name: "Kalos", range: [649, 721] },
    { name: "Alola", range: [721, 809] },
    { name: "Galar", range: [809, 905] },
    { name: "Paldea", range: [905, 1025] },
    { name: "National", range: [0, 1025] },
  ];

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1025")
      .then((res) => res.json())
      .then((json) => {
        const response = json.results.map((poke, index) => ({
          ...poke,
          id: index + 1,
          name:
            poke.name.charAt(0).toUpperCase() +
            poke.name.slice(1).replace(/-/g, " "),
        }));
        setData(response);
        setPokemon(response);
        setRange([0, 1025]);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timeout);
  }, [search]);

  useEffect(() => {
    const res = data
      .slice(range[0], range[1])
      .filter(
        (poke) =>
          poke.name.toLowerCase().includes(search.toLowerCase()) ||
          poke.id.toString().includes(search)
      );
    setPokemon(
      sorted ? res.sort((a, b) => a.id - b.id) : res.sort((a, b) => b.id - a.id)
    );
  }, [range, debouncedSearch, sorted]);

  return (
    <main>
      <section>
        <div className="flex items-center justify-end gap-x-2 pt-8 min-[420px]:pt-2 sm:pr-3 bg-neutral-800 select-none">
          <Sort
            className="h-5 w-5 fill-neutral-200 -scale-x-100 transition-all cursor-pointer"
            onClick={() => setSorted((prev) => !prev)}
          />
          <div className="relative">
            <Search className="w-5 h-5 absolute right-3 top-[0.8rem] fill-neutral-200 transition-all" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-40 sm:w-56 p-3 bg-transparent text-neutral-200 placeholder:text-neutral-200 group-hover:placeholder:text-neutral-300 transition-all placeholder:transition-all"
              maxLength={15}
            />
          </div>
        </div>
        <div className="flex bg-neutral-800 md:bg-transparent min-[604px]:justify-end text-center text-sm scroll-hide">
          <div
            className="hidden md:block"
            style={{
              borderRight: "40px solid #262626",
              borderBottom: "40px solid transparent",
            }}
          />
          <div className="flex overflow-x-auto bg-neutral-800 pb-1 px-1 sm:px-3">
            {regions.map((region) => (
              <button
                key={region.name}
                onClick={() => setRange(region.range)}
                className={`p-2 text-neutral-200 transition-all cursor-pointer
                ${
                  (range[0] !== region.range[0] ||
                    range[1] !== region.range[1]) &&
                  "opacity-50 hover:opacity-75"
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="flex justify-center mt-2 mb-6">
        <div className="w-full grid place-items-center sm:gap-y-2 2xl:gap-y-4 grid-cols-2 min-[560px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 min-[1700px]:grid-cols-6 min-[350px]:max-w-xs min-[425px]:max-w-sm min-[560px]:max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl min-[1700px]:max-w-[100rem]">
          {pokemon.map((poke) => (
            <Link
              to={`/Pokedex/Pokemon/${poke.id}`}
              key={poke.id}
              className="relative min-h-[184px] w-36 sm:w-40 md:w-44 lg:w-48 min-[1700px]:w-52 p-4 text-white hover:scale-105 transition-all"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 bg-neutral-800 w-full h-1/2 rounded-full transition-all" />
              <img
                loading="lazy"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                className="m-auto w-full aspect-square"
                draggable={false}
              />
              <h1 className="line-clamp-1 text-center">{poke.name}</h1>
              <h2 className="text-xs opacity-70 text-center">
                #{poke.id.toString().padStart(4, 0)}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Pokemon;
