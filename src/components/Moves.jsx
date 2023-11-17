import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../assets/Search.svg?react";

const Moves = () => {
  const [data, setData] = useState([]);
  const [moves, setMoves] = useState([]);
  const [search, setSearch] = useState("");

  const format = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/move?limit=922`)
      .then((res) => res.json())
      .then((json) => {
        const { results } = json;
        setMoves(results.sort((a, b) => a.name.localeCompare(b.name)));
        setData(results.sort((a, b) => a.name.localeCompare(b.name)));
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    setMoves(
      data.filter((item) =>
        format(item.name)
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      )
    );
  }, [search]);

  const handleSearch = (event) => setSearch(event.target.value);

  return (
    <main className="flex flex-col">
      <div className="relative self-center mt-6 sm:mr-6 sm:mt-0 sm:self-end">
        <Search className="w-5 h-5 absolute top-[0.8rem] right-3 fill-neutral-400" />
        <input
          value={search}
          onChange={handleSearch}
          placeholder="Search"
          className="bg-neutral-200 w-72 rounded-md p-3 outline-none hover:fill-neutral-600 hover:bg-neutral-300 transition-all"
          maxLength={15}
        />
      </div>
      <section className="m-6 rounded-md">
        <div className="grid grid-cols-1 py-2 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {moves.map((item, i) => (
            <Link
              to={`/Pokedex/Move/${item.name}`}
              key={i}
              className="px-4 py-3 bg-neutral-200 rounded-md text-center hover:bg-neutral-300 transition-all"
            >
              {format(item.name)}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Moves;
