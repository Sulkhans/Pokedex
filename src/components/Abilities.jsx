import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../assets/Search.svg?react";

const Abilities = () => {
  const [data, setData] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [search, setSearch] = useState("");

  const format = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/ability?limit=303`)
      .then((res) => res.json())
      .then((json) => {
        const { results } = json;
        setAbilities(results.sort((a, b) => a.name.localeCompare(b.name)));
        setData(results.sort((a, b) => a.name.localeCompare(b.name)));
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    setAbilities(
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
        <div className="grid grid-cols-2 py-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-7">
          {abilities.map((item, i) => (
            <Link
              to={`/Pokedex/Ability/${item.name}`}
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

export default Abilities;
