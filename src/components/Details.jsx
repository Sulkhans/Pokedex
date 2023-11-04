import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((json) => {
        setPokemon({
          ...json,
          name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
        });
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <main>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        className="w-48 sm:w-32 md:w-36 lg:w-40"
      />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`}
        className="w-48 sm:w-32 md:w-36 lg:w-40"
      />
      <h1>{pokemon.name}</h1>
      <h2>#{id.toString().padStart(4, 0)}</h2>
      <div>
        <h3>Type:</h3>
        {pokemon.types &&
          pokemon.types.map((obj, i) => <p key={i}>{obj.type.name}</p>)}
      </div>
      <div>
        <h3>Abilities:</h3>
        {pokemon.abilities &&
          pokemon.abilities.map((obj, i) => (
            <p key={i} className={`${obj.is_hidden ? "text-green-600" : ""}`}>
              {obj.ability.name}
            </p>
          ))}
      </div>
      <div>
        <h3>Stats:</h3>
        {pokemon.stats &&
          pokemon.stats.map((obj, i) => (
            <p key={i}>
              {obj.stat.name}: {obj.base_stat}
            </p>
          ))}
      </div>
    </main>
  );
};

export default Details;
