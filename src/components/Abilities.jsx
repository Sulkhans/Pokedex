import React, { useEffect, useState } from "react";
import Search from "../assets/Search.svg?react";
import Ability from "./Ability";

const Abilities = () => {
  const [data, setData] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [ability, setAbility] = useState("");
  const [search, setSearch] = useState("");

  const format = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/ability?limit=307`)
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
      <div className="relative group self-center mt-6 sm:mr-6 sm:mt-0 sm:self-end">
        <Search className="w-5 h-5 absolute group-hover:fill-neutral-500 right-3 top-[0.8rem] fill-neutral-400 transition-all" />
        <input
          value={search}
          onChange={handleSearch}
          placeholder="Search"
          className="w-64 p-3 bg-transparent text-neutral-700 group-hover:placeholder:text-neutral-500 font-medium transition-all"
          maxLength={15}
        />
      </div>
      <section className="m-6 text-neutral-700 font-medium">
        <div className="grid grid-cols-2 py-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-7">
          {abilities.map((item, i) => (
            <p
              key={i}
              onClick={() => setAbility(item.name)}
              className="p-2 text-center text-sm transition-all cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap"
            >
              {format(item.name)}
            </p>
          ))}
        </div>
        <Ability ability={ability} setAbility={setAbility} />
      </section>
    </main>
  );
};

export default Abilities;
