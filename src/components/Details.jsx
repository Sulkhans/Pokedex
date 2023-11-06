import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { colors } from "../colors.js";
import Shiny from "../assets/Shiny.svg?react";
import logo from "../assets/logo.png";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [shiny, setShiny] = useState(false);

  const format = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace("-", " ");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((json) => {
        setPokemon({
          ...json,
          name: format(json.name),
        });
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <main className="flex flex-col sm:flex-row sm:items-stretch justify-center items-center">
      <div className="relative flex flex-col justify-between bg-gradient-to-b from-white from-50% to-neutral-200 to-95% ... overflow-hidden px-6 w-full">
        <button
          className="absolute right-3 top-3 z-20"
          onClick={() => setShiny(!shiny)}
        >
          <Shiny className="w-7 h-7 fill-amber-400" />
        </button>
        <div className="w-72 z-10 self-center m-4">
          {shiny ? (
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`}
            />
          ) : (
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            />
          )}
        </div>
        <div>
          <h1 className="text-4xl relative z-10">{pokemon.name}</h1>
          <h2 className="text-neutral-400">#{id.toString().padStart(4, 0)}</h2>
          <img
            src={logo}
            className="w-48 absolute -bottom-12 -right-12 opacity-40 hidden sm:block"
          />
        </div>
      </div>
      <div className="bg-neutral-200 rounded-md flex flex-col w-full px-6 py-4">
        <div className="flex gap-2 items-center">
          {pokemon.types &&
            pokemon.types.map((obj, i) => (
              <p
                className={`${
                  colors[obj.type.name]
                } px-4 py-1 text-lg uppercase rounded-md text-center text-white tracking-wider`}
                key={i}
              >
                {obj.type.name}
              </p>
            ))}
        </div>
        <div className="mt-6 bg-neutral-300 p-4 rounded-md">
          <h3 className="text-2xl">Abilities</h3>
          <div>
            {pokemon.abilities &&
              pokemon.abilities.map((obj, i) => (
                <p
                  key={i}
                  className={`${
                    obj.is_hidden && "bg-neutral-400"
                  } text-lg px-2`}
                >
                  {format(obj.ability.name)}
                </p>
              ))}
          </div>
        </div>
        <div>
          <h3>Base stats</h3>
          <div className="flex text-center justify-center mt-2">
            {pokemon.stats &&
              pokemon.stats.map((obj, i) => (
                <div key={i} className="flex flex-col items-center w-9">
                  <div
                    className="flex items-end justify-center bg-neutral-300 mb-2"
                    style={{ height: "255px" }}
                  >
                    <div
                      className="bg-neutral-500"
                      style={{
                        width: "30px",
                        height: `${obj.base_stat}px`,
                      }}
                    />
                  </div>
                  <p>{obj.base_stat}</p>
                  <p className="text-xs">{format(obj.stat.name)}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
