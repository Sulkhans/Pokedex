import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { colors } from "../colors.js";
import Shiny from "../assets/Shiny.svg?react";
import logo from "../assets/logo.png";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [info, setInfo] = useState({});
  const [shiny, setShiny] = useState(false);

  const format = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace("-", " ");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((json) => {
        const { abilities, species, sprites, stats, types } = json;
        setPokemon({
          abilities,
          species,
          sprites,
          stats,
          types,
          name: format(json.name),
        });
      })
      .catch((err) => console.error("Error fetching data:", err));

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => res.json())
      .then((json) => {
        const genera = json.genera.filter(
          (item) => item.language.name === "en"
        );
        const varieties = json.varieties.filter(
          (item) => item.is_default === false
        );
        setInfo({ genera: genera[0], varieties });
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [id]);

  return (
    <main className="flex flex-col sm:flex-row sm:items-stretch justify-center items-center mt-4">
      <div className="relative flex flex-col justify-between bg-gradient-to-b from-white from-50% to-neutral-200 to-95% ... overflow-x-clip px-6 w-full">
        <button
          className="absolute right-5 top-5 z-20"
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
          <h3 className="text-neutral-400">#{id.toString().padStart(4, 0)}</h3>
          <img
            src={logo}
            className="w-48 absolute -bottom-12 -right-12 opacity-40 hidden sm:block"
          />
        </div>
      </div>
      <div className="bg-neutral-200 flex flex-col w-full px-6 py-4">
        <div className="flex gap-2 items-center justify-center bg-neutral-300 p-4 rounded-md">
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
          <h2 className="text-2xl text-center">
            {info.genera && info.genera.genus}
          </h2>
        </div>
        <div className="mt-6 bg-neutral-300 p-4 rounded-md">
          <h3 className="text-2xl text-center">Abilities</h3>
          <div className="flex flex-col">
            {pokemon.abilities &&
              pokemon.abilities.map((obj, i) => (
                <p
                  key={i}
                  className={`${
                    obj.is_hidden && "bg-neutral-400"
                  } rounded-md text-lg p-2`}
                >
                  {format(obj.ability.name)}
                </p>
              ))}
          </div>
        </div>
        <div className="mt-6 bg-neutral-300 p-4 rounded-md">
          <h2 className="text-2xl text-center mb-2">Base stats</h2>
          <div className="flex text-center justify-evenly mt-4">
            {pokemon.stats &&
              pokemon.stats.map((obj, i) => (
                <div key={i} className="flex flex-col items-center w-9">
                  <div
                    className="flex items-end justify-center mb-2 bg-neutral-400"
                    style={{ height: "255px" }}
                  >
                    <div
                      className="bg-neutral-500"
                      style={{
                        width: "2rem",
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
      {info.varieties && info.varieties.length !== 0 && (
        <div className="bg-neutral-200 flex flex-col w-full px-6 py-4">
          <div className="p-4 bg-neutral-300 rounded-md">
            <h1 className="text-2xl text-center mb-4">Other forms</h1>
            <div className="flex flex-col gap-4">
              {info.varieties.map((item, i) => {
                const id = item.pokemon.url.slice(-6, -1);
                return (
                  <Link
                    key={i}
                    to={`/Pokedex/Pokemon/${id}`}
                    onClick={() => window.scrollTo({ top: 0 })}
                    className="flex flex-col flex-wrap items-center p-4 rounded-md bg-[#bbbbbb] hover:bg-neutral-400 transition-all"
                  >
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                      className="w-72"
                    />
                    <h2 className="text-xl">{format(item.pokemon.name)}</h2>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Details;
