import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../data/colors.js";
import Loading from "./Loading";
import Close from "../assets/Close.svg?react";

const Move = ({ move, setMove }) => {
  const [data, setData] = useState(null);
  const format = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

  useEffect(() => {
    if (move) {
      setData(null);
      fetch(`https://pokeapi.co/api/v2/move/${move}`)
        .then((res) => res.json())
        .then(
          ({
            name,
            type,
            power,
            damage_class,
            accuracy,
            pp,
            flavor_text_entries,
            learned_by_pokemon,
          }) => {
            const effect =
              flavor_text_entries.length > 0
                ? flavor_text_entries.filter(
                    (item) => item.language.name === "en"
                  )[0].flavor_text
                : null;
            setData({
              name,
              accuracy,
              type: type.name,
              power,
              class: damage_class.name,
              pp,
              effect: effect,
              pokemon: learned_by_pokemon,
            });
          }
        )
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [move]);

  return (
    <div
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full md:max-w-4xl md:max-h-[800px] 2xl:max-w-5xl transition-all duration-700 text-neutral-800 font-medium z-30
      ${!move && "translate-y-full"} `}
    >
      <div className="min-h-[7rem] mx-4 p-4 pb-0 lg:m-0 rounded-t-md bg-white border-2 border-b-0 border-neutral-800">
        {data ? (
          <main className="relative">
            <Close
              onClick={() => setMove("")}
              className="w-6 h-6 absolute -right-2 -top-2 fill-neutral-800 cursor-pointer"
            />
            <div className="flex flex-col md:flex-row gap-4 md:gap-0">
              <section className="md:max-w-xs">
                <h1 className="text-xl xl:text-2xl col-span-2 mb-2">
                  {format(data.name)}
                </h1>
                <p className="col-span-2 mb-2.5">{data.effect}</p>
                <div className="grid grid-cols-2 gap-4 md:mb-2 w-60 items-center">
                  <p>Type</p>
                  <p
                    className={`px-4 py-1.5 text-sm uppercase rounded-full text-center text-white tracking-wider
                    ${colors[data.type]}`}
                  >
                    {data.type}
                  </p>
                  <p>Power</p>
                  <p>{data.power || "-"}</p>
                  <p>Class</p>
                  <p>{format(data.class)}</p>
                  <p>Accuracy</p>
                  <p>{data.accuracy || "-"}</p>
                  <p>PP</p>
                  <p>{data.pp}</p>
                </div>
              </section>
              {data.pokemon && (
                <section className="grid grid-cols-3 sm:grid-cols-4 2xl:grid-cols-5 gap-4 m-auto w-full py-3 max-h-56 md:max-h-80 2xl:max-h-96 overflow-y-auto scroll-hide select-none">
                  {data.pokemon.map((item, i) => (
                    <Link
                      key={i}
                      to={`/Pokedex/Pokemon/${item.url
                        .replace(/\D/g, "")
                        .slice(1)}`}
                    >
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.url
                          .replace(/\D/g, "")
                          .slice(1)}.png`}
                        loading="lazy"
                        draggable={false}
                        className="w-16 xl:w-24 m-auto aspect-square"
                      />
                      <p className="text-center text-sm mt-2 line-clamp-1">
                        {format(item.name)}
                      </p>
                    </Link>
                  ))}
                </section>
              )}
            </div>
          </main>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Move;
