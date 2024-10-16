import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../colors.js";
import Loading from "./Loading";
import Close from "../assets/Close.svg?react";

const Move = ({ move, setMove }) => {
  const [details, setDetails] = useState(null);
  const format = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

  useEffect(() => {
    if (move) {
      setDetails(null);
      fetch(`https://pokeapi.co/api/v2/move/${move}`)
        .then((res) => res.json())
        .then(
          ({
            name,
            accuracy,
            type,
            power,
            damage_class,
            pp,
            effect_entries,
            learned_by_pokemon,
          }) => {
            const effect =
              effect_entries.length > 0
                ? effect_entries.filter(
                    (item) => item.language.name === "en"
                  )[0].effect
                : null;
            setDetails({
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
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full lg:max-w-5xl md:max-h-[270px] transition-all duration-700 text-neutral-700 font-medium z-30
      ${!move && "translate-y-full"} `}
    >
      <div className="min-h-[7rem] mx-4 p-4 pb-0 lg:m-0 rounded-t-md bg-white text-neutral-800 border-2 border-b-0 border-neutral-700">
        {details ? (
          <div className="relative">
            <Close
              onClick={() => setMove("")}
              className="w-6 h-6 absolute -right-2 -top-2 fill-neutral-700 cursor-pointer"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <div>
                <h1 className="text-xl xl:text-2xl mb-4">
                  {format(details.name)}
                </h1>
                <div className="grid grid-cols-2 gap-4 md:mb-2 w-60">
                  <p>Type</p>
                  <p
                    className={`px-4 py-1 text-sm uppercase rounded-md text-center text-white tracking-wider
                    ${colors[details.type]}`}
                  >
                    {details.type}
                  </p>
                  <p>Power</p>
                  <p>{details.power || "-"}</p>
                  <p>Class</p>
                  <p>{format(details.class)}</p>
                  <p>Accuracy</p>
                  <p>{details.accuracy || "-"}</p>
                  <p>PP</p>
                  <p>{details.pp}</p>
                </div>
              </div>
              {details.pokemon && (
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 m-auto w-full py-3 max-h-48 md:max-h-80 2xl:max-h-96 overflow-y-auto scroll-hide">
                  {details.pokemon.map((item, i) => (
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
                        className="w-16 xl:w-20 m-auto"
                      />
                      <p className="text-center text-sm mt-2 line-clamp-1">
                        {format(item.name)}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Move;
