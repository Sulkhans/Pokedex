import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../assets/Search.svg?react";
import Sort from "../assets/Sort.svg?react";

const Pokemon = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(20);
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [sorted, setSorted] = useState(true);
  const regions = [
    "Kanto",
    "Johto",
    "Hoenn",
    "Sinnoh",
    "Unova",
    "Kalos",
    "Alola",
    "Galar",
    "Paldea",
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
    setPokemon(
      data.filter(
        (poke) =>
          poke.name.toLowerCase().includes(search.toLowerCase()) ||
          poke.id.toString().includes(search)
      )
    );
  }, [search]);

  const handleSort = () => {
    if (sorted) {
      setPokemon([...pokemon].sort((a, b) => b.id - a.id));
    } else {
      setPokemon([...pokemon].sort((a, b) => a.id - b.id));
    }
    setSorted((prev) => !prev);
  };

  const handleRegion = (str) => {
    setSorted(true);
    switch (str) {
      case 1:
        setPokemon(data.slice(0, 151));
        break;
      case 2:
        setPokemon(data.slice(151, 251));
        break;
      case 3:
        setPokemon(data.slice(251, 386));
        break;
      case 4:
        setPokemon(data.slice(386, 493));
        break;
      case 5:
        setPokemon(data.slice(493, 649));
        break;
      case 6:
        setPokemon(data.slice(649, 721));
        break;
      case 7:
        setPokemon(data.slice(721, 809));
        break;
      case 8:
        setPokemon(data.slice(809, 905));
        break;
      case 9:
        setPokemon(data.slice(905, 1025));
        break;
      default:
        setPokemon(data);
        break;
    }
  };

  return (
    <main className="flex flex-col gap-4">
      <section className="flex items-center mx-5 mt-6 sm:mt-0 gap-x-4 justify-end sm:mx-6 select-none">
        <Sort
          className="h-5 w-5 fill-neutral-400 -scale-x-100 hover:fill-neutral-500 transition-all cursor-pointer"
          onClick={handleSort}
        />
        <div className="relative group">
          <Search className="w-5 h-5 absolute group-hover:fill-neutral-500 right-3 top-[0.8rem] fill-neutral-400 transition-all" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-40 sm:w-56 p-3 bg-transparent text-neutral-700 font-medium group-hover:placeholder:text-neutral-500 transition-all"
            maxLength={15}
          />
        </div>
      </section>
      <div className="flex gap-2 overflow-x-auto mx-5 md:justify-end md:mr-6 text-neutral-400 text-center text-sm font-medium scroll-hide">
        {regions.map((region, i) => (
          <div
            key={region}
            onClick={() => handleRegion(i + 1)}
            className="p-2 mb-2 hover:text-neutral-500 transition-all cursor-pointer"
          >
            {region}
          </div>
        ))}
      </div>
      <section className="flex flex-wrap justify-center mb-4 gap-4 sm:gap-6 md:gap-x-10 2xl:mx-40">
        {pokemon.slice(0, num).map((poke) => (
          <Link
            to={`/Pokedex/Pokemon/${poke.id}`}
            key={poke.id}
            className="hover:scale-105 font-medium basis-40 md:basis-44 lg:basis-48 p-4 rounded-md transition-all"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
              className="drop-shadow-md m-auto w-28 mb-2 sm:w-32 md:w-36 lg:w-40"
            />
            <h1 className="text-neutral-700 line-clamp-1">{poke.name}</h1>
            <h2 className="text-xs text-neutral-500">
              #{poke.id.toString().padStart(4, 0)}
            </h2>
          </Link>
        ))}
      </section>
      {pokemon.length > num && (
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setNum((prevNum) => prevNum + 20)}
            className="text-center font-medium text-neutral-400 hover:text-neutral-600 cursor-pointer transition-all"
          >
            Load more
          </button>
        </div>
      )}
    </main>
  );
};

export default Pokemon;
