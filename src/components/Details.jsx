import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { colors } from "../colors.js";
import Shiny from "../assets/Shiny.svg?react";
import logo from "../assets/logo.png";
import Arrow from "../assets/sort.svg?react";

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
    <main className="flex flex-col sm:items-stretch justify-center items-center mt-4">
      <div className="flex flex-col w-full sm:flex-row sm:p-6 sm:gap-6">
        <div className="relative flex flex-col justify-between bg-gradient-to-b from-white from-50% to-neutral-200 to-95% ... overflow-hidden px-6 w-full sm:rounded-md sm:p-6 lg:w-2/3">
          <div className="absolute flex gap-4 z-20 left-5 top-0">
            {id != 1 && (
              <Link to={`/Pokedex/Pokemon/${Number(id) - 1}`}>
                <Arrow className="w-9 h-9 rotate-90 bg-neutral-200 fill-neutral-400 hover:fill-neutral-600 hover:bg-neutral-300 rounded-md transition-all" />
              </Link>
            )}
            {id != 1010 && (
              <Link to={`/Pokedex/Pokemon/${Number(id) + 1}`}>
                <Arrow className="w-9 h-9 -rotate-90 bg-neutral-200 fill-neutral-400 hover:fill-neutral-600 hover:bg-neutral-300 rounded-md transition-all" />
              </Link>
            )}
          </div>
          <button
            className="absolute right-5 top-0 z-20 w-9 h-9 flex justify-center items-center bg-neutral-200 hover:bg-neutral-300 rounded-md transition-all"
            onClick={() => setShiny(!shiny)}
          >
            <Shiny className="w-6 h-6 fill-yellow-400" />
          </button>
          <div className="w-80 p-2 z-10 self-center">
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
            <h3 className="text-neutral-400">
              #{id.toString().padStart(4, 0)}
            </h3>
            <img
              src={logo}
              className="w-48 absolute -bottom-12 -right-12 opacity-40 hidden sm:block"
            />
          </div>
        </div>
        <div className="bg-neutral-200 flex flex-col w-full gap-6 px-6 py-4 justify-center sm:rounded-md">
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
          <div className="bg-neutral-300 p-4 rounded-md">
            <h2 className="text-2xl text-center">
              {info.genera && info.genera.genus}
            </h2>
          </div>
          <div className="bg-neutral-300 p-4 rounded-md">
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
        </div>
      </div>
      <div className="bg-neutral-200 w-full sm:w-auto sm:mx-6 sm:rounded-md">
        <div className="bg-neutral-300 m-6 p-4 rounded-md flex flex-col items-center">
          <h2 className="text-2xl text-center my-1">Base stats</h2>
          <div className="flex text-center mt-4 justify-evenly w-full sm:w-1/2">
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
        <div className="bg-neutral-200 flex flex-col w-full px-6 py-4 sm:m-6 sm:w-auto sm:rounded-md">
          <div className="p-4 bg-neutral-300 rounded-md">
            <h1 className="text-2xl text-center">Other forms</h1>
            <div className="flex flex-col flex-wrap gap-4 sm:flex-row justify-center">
              {info.varieties.map((item, i) => {
                const id = item.pokemon.url.slice(-6, -1);
                return (
                  <Link
                    key={i}
                    to={`/Pokedex/Pokemon/${id}`}
                    onClick={() => window.scrollTo({ top: 0 })}
                    className="flex flex-col flex-wrap items-center p-4 m-4 rounded-md bg-[#bbbbbb] hover:bg-neutral-400 transition-all"
                  >
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                      className="w-56 p-4"
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
