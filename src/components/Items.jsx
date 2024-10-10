import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Search from "../assets/Search.svg?react";
import Close from "../assets/Close.svg?react";

const Items = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [details, setDetails] = useState(null);
  const [search, setSearch] = useState("");

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
    if (item) {
      setDetails(null);
      fetch(`https://pokeapi.co/api/v2/item/${item}`)
        .then((res) => res.json())
        .then(({ name, category, effect_entries, cost, sprites }) => {
          const effect =
            effect_entries.length > 0 ? effect_entries[0].effect : null;
          setDetails({
            name,
            category: category.name,
            effect: effect,
            cost,
            sprite: sprites.default,
          });
        })
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [item]);

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
          {items.map((item, i) => (
            <p
              key={i}
              onClick={() => setItem(item.name)}
              className="p-2 text-center text-sm transition-all cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap"
            >
              {format(item.name)}
            </p>
          ))}
        </div>
        <div
          className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full lg:max-w-5xl transition-all duration-700
          ${!item && "translate-y-full"} `}
        >
          <div className="min-h-[7rem] mx-4 p-4 lg:m-0 rounded-t-md shadow-xl bg-[#fcfcfc] text-neutral-700 border-2 border-b-0 border-neutral-700">
            {details ? (
              <div className="flex flex-col gap-2 relative">
                <Close
                  onClick={() => setItem("")}
                  className="w-6 h-6 absolute -right-2 -top-2 fill-neutral-700 cursor-pointer"
                />
                <div className="flex items-center gap-2">
                  <h1 className="leading-[30px]">{format(details.name)}</h1>
                  {details.sprite && <img src={details.sprite} />}
                </div>
                <p>Category: {format(details.category)}</p>
                {details.effect && <p>{details.effect}</p>}
                {details.cost !== 0 && <p>Price: {details.cost}</p>}
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Items;
