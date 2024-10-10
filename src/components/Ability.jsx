import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Close from "../assets/Close.svg?react";

const Ability = ({ ability, setAbility }) => {
  const [details, setDetails] = useState(null);
  const format = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

  useEffect(() => {
    if (ability) {
      setDetails(null);
      fetch(`https://pokeapi.co/api/v2/ability/${ability}`)
        .then((res) => res.json())
        .then(({ name, effect_entries, pokemon }) => {
          const effect =
            effect_entries.length > 0
              ? effect_entries.filter((item) => item.language.name === "en")[0]
                  .effect
              : null;
          setDetails({ name, effect: effect, pokemon });
        })
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [ability]);
  return (
    <div
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full lg:max-w-5xl transition-all duration-700 text-neutral-700 font-medium z-40
      ${!ability && "translate-y-full"} `}
    >
      <div className="min-h-[7rem] mx-4 p-4 pb-0 lg:m-0 rounded-t-md shadow-xl bg-[#fcfcfc] text-neutral-700 border-2 border-b-0 border-neutral-700">
        {details ? (
          <div className="relative">
            <Close
              onClick={() => setAbility("")}
              className="w-6 h-6 absolute -right-2 -top-2 fill-neutral-700 cursor-pointer"
            />
            <div className="flex flex-col gap-2 max-h-96 overflow-y-auto scroll-hide">
              <h1 className="text-lg">{format(details.name)}</h1>
              {details.effect && <p>{details.effect}</p>}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 py-3">
                {details.pokemon.map((item, i) => (
                  <Link
                    key={i}
                    to={`/Pokedex/Pokemon/${item.pokemon.url
                      .replace(/\D/g, "")
                      .slice(1)}`}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.pokemon.url
                        .replace(/\D/g, "")
                        .slice(1)}.png`}
                      className="w-16 xl:w-24 m-auto"
                    />
                    <p className="text-center text-sm mt-2 line-clamp-1">
                      {format(item.pokemon.name)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Ability;
