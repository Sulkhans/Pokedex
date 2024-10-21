import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { colors } from "../../data/colors.js";
import Shiny from "../../assets/Shiny.svg?react";
import Arrow from "../../assets/Arrow.svg?react";
import Pokeball from "../../assets/Pokeball.png";
import Loading from "../Loading.jsx";
import Ability from "../Ability.jsx";
import Move from "../Move.jsx";
import Damage from "./Damage.jsx";
import List from "./List.jsx";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [shiny, setShiny] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ability, setAbility] = useState("");
  const [move, setMove] = useState("");

  const format = (name) =>
    name
      .split("-")
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join(" ");
  const cry = () => {
    const cry = new Audio(
      `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`
    ).play();
    cry.play();
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const pokemonRes = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}/`
        );
        const pokemonData = await pokemonRes.json();

        const speciesRes = await fetch(pokemonData.species.url);
        const speciesData = await speciesRes.json();

        const evolutionRes = await fetch(speciesData.evolution_chain.url);
        const evolutionData = await evolutionRes.json();

        const processedData = processData(
          pokemonData,
          speciesData,
          evolutionData
        );
        setPokemon(processedData);
        // cry();
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [id]);

  const processData = (pokemonData, speciesData, evolutionData) => {
    const { name, abilities, stats, types, moves, height, weight } =
      pokemonData;
    const { genera, flavor_text_entries, varieties } = speciesData;
    const { chain } = evolutionData;

    const statNames = ["HP", "ATK", "DEF", "SPA", "SPD", "SPE"];
    stats.forEach((stat, index) => {
      stat.stat.name = statNames[index];
    });
    const entries = flavor_text_entries.filter((e) => e.language.name === "en");
    let evolution = [];
    evolution.push(chain.species);
    chain.evolves_to.forEach((i) => {
      evolution.push(i.species);
      if (i.evolves_to.length > 0) {
        i.evolves_to.forEach((j) => evolution.push(j.species));
      }
    });

    return {
      name: format(name),
      height: height / 10,
      weight: weight / 10,
      types: types.map((t) => t.type.name),
      abilities: abilities.map((a) => a.ability.name),
      stats,
      moves,
      genera: genera.find((g) => g.language.name === "en").genus,
      entry: entries[entries.length - 1].flavor_text,
      varieties: varieties.map((item) => item.pokemon),
      evolutions: evolution,
    };
  };

  return (
    <>
      <div>
        <div>
          <div className="h-20 md:h-14 flex justify-center items-end bg-neutral-800" />
          <div className="text-center m-auto flex justify-center bg-transparent">
            <div className="triangle-left" />
            <div className="min-w-[8rem] bg-neutral-800 text-white">
              <h1 className="-mt-9 mb-1 text-2xl sm:landscape:text-[26px]">
                {pokemon.name}
              </h1>
              <h2 className="text-sm">
                {pokemon.name && `#${id.toString().padStart(4, 0)}`}
              </h2>
            </div>
            <div className="triangle-right" />
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <main className="mt-6 mx-4 grid grid-rows-1 lg:grid-cols-3 gap-8">
              <section className="flex flex-col justify-center gap-4 text-center row-[2]">
                <div className="text-center font-medium">
                  <p className="mb-2">Type</p>
                  <div className="flex gap-2 justify-center">
                    {pokemon.types &&
                      pokemon.types.map((type, i) => (
                        <p
                          key={i}
                          className={`py-1.5 px-6 text-sm uppercase rounded-full text-center text-white tracking-wider
                          ${colors[type]}`}
                        >
                          {type}
                        </p>
                      ))}
                  </div>
                </div>
                <div>
                  <p className="text-center font-medium mb-2">Abilities</p>
                  <div className="flex flex-wrap justify-center gap-2 text-center text-sm text-white">
                    {pokemon.abilities &&
                      pokemon.abilities.map((ability, i) => (
                        <button
                          key={i}
                          onClick={() => setAbility(ability)}
                          className="py-1.5 px-6 bg-neutral-800 rounded-full hover:scale-105 transition-all select-none"
                        >
                          {format(ability)}
                        </button>
                      ))}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-evenly font-medium">
                  <p className="mb-2">Base stats</p>
                  <div className="flex justify-evenly w-full max-w-xs">
                    {pokemon.stats &&
                      pokemon.stats.map((item, i) => (
                        <div key={i}>
                          <p>{item.base_stat}</p>
                          <p className="text-xs">{format(item.stat.name)}</p>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="flex justify-center gap-10 self-center">
                  <div>
                    <p className="font-medium">Height</p>
                    <p>{pokemon.height} m</p>
                  </div>
                  <div>
                    <p className="font-medium">Weight</p>
                    <p>{pokemon.weight} kg</p>
                  </div>
                </div>
              </section>

              <section className="flex flex-col items-center gap-2 lg:gap-4 text-center">
                <div className="relative w-full max-w-[300px] xl:max-w-[380px] aspect-square select-none">
                  <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50">
                    <img
                      src={Pokeball}
                      draggable={false}
                      //className="animate-spin-slow"
                    />
                  </div>
                  {shiny ? (
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`}
                      draggable={false}
                      className="p-10"
                    />
                  ) : (
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                      draggable={false}
                      className="p-10"
                    />
                  )}
                </div>
                <div>
                  <div className="flex justify-center mb-6">
                    <div className="flex gap-2">
                      {id != 1 && (
                        <Link to={`/Pokedex/Pokemon/${Number(id) - 1}`}>
                          <Arrow className="w-9 h-9 rotate-90 fill-neutral-800 transition-all" />
                        </Link>
                      )}
                      <button
                        className="w-9 h-9 flex justify-center items-center group transition-all"
                        onClick={() => setShiny(!shiny)}
                      >
                        <Shiny
                          className={`w-5 h-5 group-hover:fill-amber-400 duration-500 transition-all
                          ${shiny ? "fill-amber-400" : "fill-neutral-800"}`}
                        />
                      </button>
                      {id != 1025 && (
                        <Link to={`/Pokedex/Pokemon/${Number(id) + 1}`}>
                          <Arrow className="w-9 h-9 -rotate-90 fill-neutral-800 transition-all" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-xl text-center font-medium mb-2">
                    {pokemon.genera}
                  </p>
                  <p className="text-sm max-w-sm">{pokemon.entry}</p>
                </div>
              </section>

              <section className="flex flex-col items-center">
                {pokemon.types && (
                  <Damage type={pokemon.types.sort().join("-")} />
                )}
              </section>
            </main>

            <main className="mt-8 mb-12 mx-4 flex flex-col gap-10">
              {pokemon.evolutions && pokemon.evolutions.length > 1 && (
                <List header={"Evolution chain"} pokemon={pokemon.evolutions} />
              )}
              {pokemon.varieties && pokemon.varieties.length > 1 && (
                <List header={"Varieties"} pokemon={pokemon.varieties} />
              )}
              <section className="flex justify-center w-full">
                {pokemon.moves && pokemon.moves.length > 0 && (
                  <div className="flex flex-col items-center w-full max-w-xs bg-neutral-800 p-4 pt-3 rounded-lg text-white text-center">
                    <p className="text-lg mb-4 font-medium">Moves</p>
                    <div className="grid gap-2 grid-cols-2 max-w-md sm:grid-cols-3 xl:grid-cols-4 xl:max-w-lg 2xl:max-w-xl text-center text-sm w-full overflow-y-auto max-h-64 min-[1920px]:max-h-96 scroll-hide overflow-ellipsis whitespace-nowrap">
                      {pokemon.moves.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => setMove(item.move.name)}
                          className="py-2 rounded-full bg-neutral-700"
                        >
                          {format(item.move.name)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            </main>
          </>
        )}
      </div>
      <Ability ability={ability} setAbility={setAbility} />
      <Move move={move} setMove={setMove} />
    </>
  );
};

export default Details;
