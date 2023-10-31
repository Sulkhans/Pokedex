import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [num, setNum] = useState(20);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1017")
      .then((res) => res.json())
      .then((json) => {
        setPokemon(
          json.results.map((poke, index) => ({
            ...poke,
            id: index + 1,
            name: poke.name.charAt(0).toUpperCase() + poke.name.slice(1),
          }))
        );
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [num]);

  return (
    <main>
      <section className="flex flex-wrap justify-center">
        {pokemon.slice(0, num).map((poke) => (
          <div key={poke.id}>
            <h1>{poke.name}</h1>
            <h2>#{poke.id.toString().padStart(4, 0)}</h2>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
              className="w-28"
              loading="lazy"
            />
          </div>
        ))}
      </section>
      <button onClick={() => setNum((prevNum) => prevNum + 20)}>load</button>
    </main>
  );
};

export default Pokemon;
