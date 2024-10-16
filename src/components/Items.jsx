import React, { useEffect, useState } from "react";
import Item from "./Item";
import Search from "../assets/Search.svg?react";

const Items = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [range, setRange] = useState([0, 2180]);
  const keyRanges = [
    { key: "A", range: [0, 59] },
    { key: "B", range: [59, 164] },
    { key: "C", range: [164, 257] },
    { key: "D", range: [257, 658] },
    { key: "E", range: [658, 703] },
    { key: "F", range: [703, 774] },
    { key: "G", range: [774, 861] },
    { key: "H", range: [861, 914] },
    { key: "I", range: [914, 942] },
    { key: "J", range: [942, 952] },
    { key: "K", range: [952, 979] },
    { key: "L", range: [979, 1062] },
    { key: "M", range: [1062, 1183] },
    { key: "N", range: [1183, 1207] },
    { key: "O", range: [1207, 1232] },
    { key: "P", range: [1232, 1369] },
    { key: "Q", range: [1369, 1378] },
    { key: "R", range: [1378, 1484] },
    { key: "S", range: [1484, 1680] },
    { key: "T", range: [1680, 2065] },
    { key: "U", range: [2065, 2072] },
    { key: "V", range: [2072, 2088] },
    { key: "W", range: [2088, 2127] },
    { key: "X", range: [2127, 2154] },
    { key: "Y", range: [2154, 2170] },
    { key: "Z", range: [2170, 2180] },
    { key: "All", range: [0, 2180] },
  ];

  const format = (str) => {
    if (str.replace(/\d/g, "").length == 2) {
      return str.slice(0, 2).toUpperCase() + str.slice(2);
    }
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/item/?limit=2180`)
      .then((res) => res.json())
      .then((json) => {
        const { results } = json;
        const sorted = results.sort((a, b) => a.name.localeCompare(b.name));
        setItems(sorted.slice(range[0], range[1]));
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
    setItems(
      data.filter((item) =>
        format(item.name)
          .toLocaleLowerCase()
          .includes(debouncedSearch.toLocaleLowerCase())
      )
    );
  }, [debouncedSearch]);

  useEffect(() => {
    setItems(data.slice(range[0], range[1]));
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
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setItem(item.name)}
              className="py-2 px-6 bg-neutral-800 rounded-full hover:scale-105 transition-all select-none"
            >
              {format(item.name)}
            </button>
          ))}
        </div>
      </section>
      <Item item={item} setItem={setItem} />
    </main>
  );
};

export default Items;
