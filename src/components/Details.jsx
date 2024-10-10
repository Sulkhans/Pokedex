import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { colors } from "../colors.js";
import Shiny from "../assets/Shiny.svg?react";
import Arrow from "../assets/Arrow.svg?react";
import Loading from "./Loading.jsx";
import Ability from "./Ability.jsx";
import Move from "./Move.jsx";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [info, setInfo] = useState({});
  const [shiny, setShiny] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ability, setAbility] = useState("");
  const [move, setMove] = useState("");

  const getId = (url) => url.replace(/\D/g, "").slice(1);
  const format = (name) =>
    name
      .split("-")
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join(" ");

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then(
        ({ abilities, species, stats, types, moves, name, height, weight }) => {
          stats[0].stat.name = "HP";
          stats[1].stat.name = "ATK";
          stats[2].stat.name = "DEF";
          stats[3].stat.name = "SPA";
          stats[4].stat.name = "SPD";
          stats[5].stat.name = "SPE";
          name = format(name);
          setPokemon({
            abilities,
            species,
            stats,
            types,
            moves,
            name,
            height,
            weight,
          });
        }
      )
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => res.json())
      .then((json) => {
        const genera = json.genera.filter(
          (item) => item.language.name === "en"
        );
        const flavor = json.flavor_text_entries.filter(
          (item) => item.language.name === "en"
        );
        setInfo({
          genera: genera[0].genus,
          varieties: json.varieties,
          entry: flavor[flavor.length - 1].flavor_text,
          evolution: json.evolution_chain.url,
        });
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (info.evolution) {
      fetch(info.evolution)
        .then((res) => res.json())
        .then(({ chain }) => {
          let evolution = [];
          evolution.push(chain.species);
          chain.evolves_to.forEach((i) => {
            evolution.push(i.species);
            if (i.evolves_to.length > 0) {
              i.evolves_to.forEach((j) => evolution.push(j.species));
            }
          });
          setPokemon((prev) => ({
            ...prev,
            evolution: evolution,
          }));
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setLoading(false);
        });
    }
  }, [info]);

  return loading ? (
    <Loading />
  ) : (
    <main className="flex flex-col md:flex-row justify-center mt-4 m-auto text-neutral-800 md:h-[calc(100dvh-5.5rem)] xl:container">
      <div className="flex flex-col w-full overflow-y-auto scroll-hide lg:max-w-xl 2xl:max-w-2xl min-[1920px]:text-lg">
        <div className="relative flex flex-col justify-between px-6 w-full">
          {id <= 1025 && (
            <div className="absolute flex gap-2 z-20 left-5 top-0">
              {id != 1 && (
                <Link
                  to={`/Pokedex/Pokemon/${Number(id) - 1}`}
                  onClick={() => setLoading(true)}
                >
                  <Arrow className="w-9 h-9 rotate-90 fill-neutral-300 hover:fill-neutral-800 transition-all" />
                </Link>
              )}
              {id != 1025 && (
                <Link
                  to={`/Pokedex/Pokemon/${Number(id) + 1}`}
                  onClick={() => setLoading(true)}
                >
                  <Arrow className="w-9 h-9 -rotate-90 fill-neutral-300 hover:fill-neutral-800 transition-all" />
                </Link>
              )}
            </div>
          )}
          <button
            className="absolute right-5 top-0 z-20 w-9 h-9 flex justify-center items-center group transition-all"
            onClick={() => setShiny(!shiny)}
          >
            <Shiny
              className={`w-5 h-5 group-hover:fill-amber-400 duration-500 transition-all
              ${shiny ? "fill-amber-400" : "fill-neutral-300"}`}
            />
          </button>
          <div className="w-72 2xl:w-[26rem] p-10 pb-2 md:p-6 md:py-0 self-center">
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
          <div className="flex flex-col justify-between font-medium gap-2">
            <div className="flex flex-col justify-center">
              <p className="text-3xl">{pokemon.name}</p>
              <p className="text-neutral-600">
                #{id.toString().padStart(4, 0)}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6 2xl:gap-12 px-6 max-w-lg m-auto min-[1920px]:max-w-xl">
            <div className="flex gap-2 justify-center mt-4">
              {pokemon.types &&
                pokemon.types.map((item, i) => (
                  <p
                    key={i}
                    className={`px-4 w-1/2 py-1 text-sm uppercase rounded-md text-center text-white tracking-wider
                    ${colors[item.type.name]}`}
                  >
                    {item.type.name}
                  </p>
                ))}
            </div>
            <div>
              <p className="text-xl text-center font-medium mb-2">
                {info.genera}
              </p>
              <p className="text-sm">{info.entry}</p>
            </div>
            <div className="flex justify-between">
              <div className="text-center w-1/2">
                <p className="font-medium">Height</p>
                <p>{pokemon.height / 10} m</p>
              </div>
              <div className="text-center w-1/2">
                <p className="font-medium">Weight</p>
                <p>{pokemon.weight / 10} kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 2xl:gap-10 pt-4 px-6 md:p-0 w-full overflow-y-auto scroll-hide max-w-2xl 2xl:max-w-3xl">
        <div className="rounded-md flex flex-col items-center justify-evenly">
          <p className="text-lg font-medium text-center mb-2">Stats</p>
          <div className="flex text-center justify-between w-full max-w-xs">
            {pokemon.stats &&
              pokemon.stats.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <p>{item.base_stat}</p>
                  <p className="text-xs font-medium">
                    {format(item.stat.name)}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div>
          <p className="text-lg text-center mb-2 font-medium">Abilities</p>
          <div className="flex m-auto max-w-xs text-center">
            {pokemon.abilities &&
              pokemon.abilities.map((item, i) => (
                <p
                  key={i}
                  onClick={() => setAbility(item.ability.name)}
                  className="text-sm w-full cursor-pointer"
                >
                  {format(item.ability.name)}
                </p>
              ))}
          </div>
        </div>
        {pokemon.evolution && pokemon.evolution.length > 1 && (
          <div className="w-full flex flex-col font-medium mt-2">
            <p className="text-lg font-medium text-center mb-2">Evolutions</p>
            <div className="flex flex-wrap gap-4 lg:gap-8 justify-center text-center">
              {pokemon.evolution.map((item, i) => {
                const id = getId(item.url);
                return (
                  <Link
                    key={i}
                    to={`/Pokedex/Pokemon/${id}`}
                    onClick={() => window.scrollTo({ top: 0 })}
                    className="w-24 lg:w-32 2xl:w-44 hover:scale-105 transition-all"
                  >
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    />
                    <p className="text-sm">{format(item.name)}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        {info.varieties && info.varieties.length > 1 && (
          <div className="w-full flex flex-col font-medium mt-2">
            <p className="text-lg font-medium text-center mb-2">Varieties</p>
            <div className="flex flex-wrap gap-4 lg:gap-8 pb-2 text-center justify-center">
              {info.varieties.map((item, i) => {
                const id = getId(item.pokemon.url);
                return (
                  <Link
                    key={i}
                    to={`/Pokedex/Pokemon/${id}`}
                    onClick={() => window.scrollTo({ top: 0 })}
                    className="w-24 lg:w-32 2xl:w-44 hover:scale-105 transition-all"
                  >
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    />
                    <p className="text-sm">{format(item.pokemon.name)}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        {pokemon.moves && pokemon.moves.length > 0 && (
          <div className="flex flex-col items-center mb-4">
            <p className="text-lg text-center mb-4 font-medium">Moves</p>
            <div className="grid gap-6 grid-cols-2 max-w-md sm:grid-cols-3 xl:grid-cols-4 xl:max-w-lg 2xl:max-w-xl text-center text-sm w-full overflow-y-auto max-h-64 min-[1920px]:max-h-96 scroll-hide overflow-ellipsis whitespace-nowrap">
              {pokemon.moves.map((item, i) => (
                <p
                  key={i}
                  onClick={() => setMove(item.move.name)}
                  className="cursor-pointer"
                >
                  {format(item.move.name)}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
      <Ability ability={ability} setAbility={setAbility} />
      <Move move={move} setMove={setMove} />
    </main>
  );
};

export default Details;
