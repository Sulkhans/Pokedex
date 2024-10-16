import React, { useEffect, useState } from "react";
import Search from "../assets/Search.svg?react";
import Ability from "./Ability";

const Abilities = () => {
  const [data, setData] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [ability, setAbility] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [range, setRange] = useState([0, 367]);
  const keyRanges = [
    { key: "A", range: [0, 15] },
    { key: "B", range: [15, 29] },
    { key: "C", range: [29, 52] },
    { key: "D", range: [52, 72] },
    { key: "E", range: [72, 80] },
    { key: "F", range: [80, 98] },
    { key: "G", range: [98, 112] },
    { key: "H", range: [112, 128] },
    { key: "I", range: [128, 145] },
    { key: "J", range: [145, 147] },
    { key: "K", range: [147, 149] },
    { key: "L", range: [149, 163] },
    { key: "M", range: [163, 188] },
    { key: "N", range: [188, 195] },
    { key: "O", range: [195, 202] },
    { key: "P", range: [202, 231] },
    { key: "Q", range: [231, 235] },
    { key: "R", range: [235, 249] },
    { key: "S", range: [249, 317] },
    { key: "T", range: [317, 341] },
    { key: "U", range: [341, 345] },
    { key: "V", range: [345, 350] },
    { key: "W", range: [350, 365] },
    { key: "Z", range: [365, 367] },
    { key: "All", range: [0, 367] },
  ];
  const format = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/ability?limit=367`)
      .then((res) => res.json())
      .then((json) => {
        const { results } = json;
        const sorted = results.sort((a, b) => a.name.localeCompare(b.name));
        setAbilities(sorted.slice(range[0], range[1]));
        setData(sorted);
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
    setAbilities(
      data.filter((item) =>
        format(item.name)
          .toLocaleLowerCase()
          .includes(debouncedSearch.toLocaleLowerCase())
      )
    );
  }, [debouncedSearch]);

  useEffect(() => {
    setAbilities(data.slice(range[0], range[1]));
  }, [range]);

  return (
    <main>
      <section>
        <div className="flex items-center justify-end gap-x-2 pt-8 min-[375px]:pt-2 sm:pr-3 bg-neutral-800 select-none">
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
            {keyRanges.map((item) => (
              <button
                key={item.key}
                onClick={() => setRange(item.range)}
                className={`p-2 text-neutral-200 transition-all cursor-pointer
                ${
                  (range[0] !== item.range[0] || range[1] !== item.range[1]) &&
                  "opacity-50 hover:opacity-75"
                }`}
              >
                {item.key}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="m-6 sm:m-8 xl:m-12 min-[1700px]:m-20 text-white text-sm text-center md:text-base min-[1700px]:text-lg">
        <div className="flex flex-wrap gap-4 m-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl min-[1700px]:max-w-[100rem]">
          {abilities.map((item, i) => (
            <button
              key={i}
              onClick={() => setAbility(item.name)}
              className="py-2 px-6 bg-neutral-800 rounded-full hover:scale-105 transition-all select-none"
            >
              {format(item.name)}
            </button>
          ))}
        </div>
      </section>
      <Ability ability={ability} setAbility={setAbility} />
    </main>
  );
};

export default Abilities;
