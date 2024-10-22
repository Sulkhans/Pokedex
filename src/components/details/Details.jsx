import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading.jsx";
import Ability from "../Ability.jsx";
import Move from "../Move.jsx";
import Damage from "./Damage.jsx";
import List from "./List.jsx";
import Entry from "./Entry.jsx";
import Stats from "./Stats.jsx";
import Head from "./Head.jsx";
import Moves from "./Moves.jsx";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [ability, setAbility] = useState("");
  const [move, setMove] = useState("");

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
        cry();
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
      name: name,
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
      <Head id={id} name={pokemon.name} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <main className="mx-4 my-2 grid grid-rows-1 lg:grid-cols-3 place-items-center gap-8 lg:landscape:min-h-[calc(100vh-164px)]">
            <Stats
              types={pokemon.types}
              abilities={pokemon.abilities}
              stats={pokemon.stats}
              weight={pokemon.weight}
              height={pokemon.height}
              setAbility={setAbility}
            />
            <Entry
              id={id}
              genera={pokemon.genera}
              entry={pokemon.entry}
              cry={cry}
            />
            <Damage type={pokemon.types.sort().join("-")} />
          </main>
          <main className="mt-8 mb-12 mx-4 md:mb-8 flex flex-col items-center gap-10">
            {pokemon.evolutions.length > 1 && (
              <List header={"Evolution chain"} pokemon={pokemon.evolutions} />
            )}
            {pokemon.varieties.length > 1 && (
              <List header={"Specie varieties"} pokemon={pokemon.varieties} />
            )}
            {pokemon.moves.length > 0 && (
              <Moves moves={pokemon.moves} setMove={setMove} />
            )}
          </main>
        </>
      )}
      <Ability ability={ability} setAbility={setAbility} />
      <Move move={move} setMove={setMove} />
    </>
  );
};

export default Details;
