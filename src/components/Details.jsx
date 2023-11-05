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
    <main className="flex flex-col justify-center items-center m-6">
      <div className="relative w-fit flex flex-col justify-center bg-gradient-to-b from-white from-50% to-neutral-200 to-95% ... rounded-md overflow-hidden p-6">
        <button
          className="absolute right-3 top-3 z-20"
          onClick={() => setShiny(!shiny)}
        >
          <Shiny className="w-7 h-7 fill-amber-400" />
        </button>
        <div className="w-72  z-10">
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
          <h1 className="text-3xl">{pokemon.name}</h1>
          <h2 className="text-neutral-400">#{id.toString().padStart(4, 0)}</h2>
          <img
            src={logo}
            className="w-48 absolute -bottom-12 -right-12 opacity-40"
          />
        </div>
      </div>
      <div className="self-start">
        <div className="flex gap-2">
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
        <div>
          <h3>Abilities:</h3>
          <div>
            {pokemon.abilities &&
              pokemon.abilities.map((obj, i) => (
                <p
                  key={i}
                  className={`${obj.is_hidden ? "text-green-600" : ""}`}
                >
                  {format(obj.ability.name)}
                </p>
              ))}
          </div>
        </div>
        <div>
          <h3>Stats:</h3>
          {pokemon.stats &&
            pokemon.stats.map((obj, i) => (
              <p key={i}>
                {format(obj.stat.name)}: {obj.base_stat}
              </p>
            ))}
        </div>
      </div>
      {/* <div>
        {pokemon.moves &&
          pokemon.moves.map((obj, i) => <p key={i}>{obj.move.name}</p>)}
      </div> */}
    </main>
  );
};

export default Details;
