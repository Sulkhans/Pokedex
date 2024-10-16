import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Close from "../assets/Close.svg?react";

const Item = ({ item, setItem }) => {
  const [details, setDetails] = useState(null);
  const format = (str) => {
    if (str.replace(/\d/g, "").length == 2) {
      return str.slice(0, 2).toUpperCase() + str.slice(2);
    }
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");
  };

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

  return (
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
  );
};

export default Item;
