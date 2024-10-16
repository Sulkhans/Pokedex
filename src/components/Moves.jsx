import React, { useEffect, useState } from "react";
import Move from "./Move.jsx";
import Search from "../assets/Search.svg?react";

const Moves = () => {
  const [data, setData] = useState([]);
  const [moves, setMoves] = useState([]);
  const [move, setMove] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [range, setRange] = useState([0, 919]);
  const keyRanges = [
    { key: "#", range: [0, 1] },
    { key: "A", range: [1, 46] },
    { key: "B", range: [46, 107] },
    { key: "C", range: [107, 162] },
    { key: "D", range: [162, 214] },
    { key: "E", range: [214, 241] },
    { key: "F", range: [241, 305] },
    { key: "G", range: [305, 337] },
    { key: "H", range: [337, 382] },
    { key: "I", range: [382, 407] },
    { key: "J", range: [407, 412] },
    { key: "K", range: [412, 417] },
    { key: "L", range: [417, 447] },
    { key: "M", range: [447, 526] },
    { key: "N", range: [526, 541] },
    { key: "O", range: [541, 553] },
    { key: "P", range: [553, 614] },
    { key: "Q", range: [614, 618] },
    { key: "R", range: [618, 659] },
    { key: "S", range: [659, 811] },
    { key: "T", range: [811, 872] },
    { key: "U", range: [872, 875] },
    { key: "V", range: [875, 886] },
    { key: "W", range: [886, 913] },
    { key: "X", range: [913, 914] },
    { key: "Y", range: [914, 915] },
    { key: "Z", range: [915, 919] },
    { key: "All", range: [0, 919] },
  ];

  const format = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/move?limit=919`)
      .then((res) => res.json())
      .then((json) => {
        const { results } = json;
        const sorted = results.sort((a, b) => a.name.localeCompare(b.name));
        setMoves(sorted.slice(range[0], range[1]));
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
    setMoves(
      data.filter((item) =>
        format(item.name)
          .toLocaleLowerCase()
          .includes(debouncedSearch.toLocaleLowerCase())
      )
    );
  }, [debouncedSearch]);

  useEffect(() => {
    setMoves(data.slice(range[0], range[1]));
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
          {moves.map((item, i) => (
            <button
              key={i}
              onClick={() => setMove(item.name)}
              className="py-2 px-6 bg-neutral-800 rounded-full hover:scale-105 transition-all select-none"
            >
              {format(item.name)}
            </button>
          ))}
        </div>
      </section>
      <Move move={move} setMove={setMove} />
    </main>
  );
};

export default Moves;
