import React, { useEffect, useState } from "react";
import Search from "../assets/Search.svg?react";
import Close from "../assets/Close.svg?react";

const Items = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [target, setTarget] = useState("");
  const [item, setItem] = useState({});

  const format = (str) => {
    if (str.replace(/\d/g, "").length == 2) {
      return str.slice(0, 2).toUpperCase() + str.slice(2);
    }
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/item/?limit=1963`)
      .then((res) => res.json())
      .then((json) => {
        const { results } = json;
        setItems(results.sort((a, b) => a.name.localeCompare(b.name)));
        setData(results.sort((a, b) => a.name.localeCompare(b.name)));
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/item/${target}`)
      .then((res) => res.json())
      .then((json) => setItem(json))
      .catch((err) => console.error("Error fetching data:", err));
  }, [target]);

  useEffect(() => {
    setItems(
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
          {items.map((item, i) => (
            <h1
              key={i}
              className="px-4 py-3 bg-neutral-200 rounded-md text-center hover:bg-neutral-300 transition-all cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap"
              onClick={() => setTarget(item.name)}
            >
              {format(item.name)}
            </h1>
          ))}
        </div>
      </section>
      {target && (
        <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="bg-neutral-300 rounded-md p-6 flex flex-col gap-4 text-xl shadow-md border-2 border-neutral-600 w-80 sm:w-[36rem]">
            <Close
              className="absolute w-6 h-6 top-4 right-4 cursor-pointer fill-neutral-600 hover:fill-neutral-700"
              onClick={() => setTarget("")}
            />
            <div className="flex items-center gap-6">
              {item.name && <h1>{format(item.name)}</h1>}
              {item.sprites && (
                <img src={item.sprites.default} className="w-8" />
              )}
            </div>
            {item.effect_entries && (
              <p>
                {item.effect_entries.length != 0 &&
                  item.effect_entries[0].effect}
              </p>
            )}
            {item.category && <p>Category: {format(item.category.name)}</p>}
            <p>Price: {item.cost || "-"}</p>
          </div>
        </section>
      )}
    </main>
  );
};

export default Items;
