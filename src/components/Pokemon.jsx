import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../assets/Search.svg?react";
import Sort from "../assets/Sort.svg?react";

const Pokemon = () => {
  const [data, setData] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
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
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

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
  }, [search, sorted, range]);

  return (
    <main className="flex flex-col gap-4">
      <section className="flex flex-col gap-4 mx-5 sm:mx-6 mt-6 sm:mt-0">
        <div className="flex items-center gap-x-4 justify-end select-none">
          <Sort
            className="h-5 w-5 fill-neutral-500 -scale-x-100 hover:fill-neutral-700 transition-all cursor-pointer"
            onClick={() => setSorted((prev) => !prev)}
          />
          <div className="relative group">
            <Search className="w-5 h-5 absolute group-hover:fill-neutral-700 right-3 top-[0.8rem] fill-neutral-500 transition-all" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-40 sm:w-56 p-3 bg-transparent font-medium text-neutral-700 placeholder:text-neutral-500 group-hover:placeholder:text-neutral-700 transition-all placeholder:transition-all"
              maxLength={15}
            />
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto min-[724px]:justify-end text-center text-sm font-medium scroll-hide">
          {regions.map((region) => (
            <div
              key={region.name}
              onClick={() => setRange(region.range)}
              className={`p-2 hover:text-neutral-700 transition-all cursor-pointer 
              ${
                range[0] === region.range[0] && range[1] === region.range[1]
                  ? "text-neutral-700 font-semibold"
                  : "text-neutral-500"
              }`}
            >
              {region.name}
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-wrap justify-center gap-4 sm:gap-6 sm:mx-10 xl:mx-20">
        {pokemon.map((poke) => (
          <Link
            to={`/Pokedex/Pokemon/${poke.id}`}
            key={poke.id}
            className="hover:scale-105 font-medium basis-40 md:basis-44 lg:basis-48 p-4 rounded-md transition-all"
          >
            <img
              loading="lazy"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
              className="m-auto w-28 mb-2 sm:w-32 md:w-36 lg:w-40"
              draggable={false}
            />
            <h1 className="text-neutral-700 line-clamp-1">{poke.name}</h1>
            <h2 className="text-xs text-neutral-500">
              #{poke.id.toString().padStart(4, 0)}
            </h2>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Pokemon;
