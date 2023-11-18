import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { colors } from "../colors.js";

const Move = () => {
  const { name } = useParams();
  const [move, setMove] = useState({});

  const format = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/move/${name}`)
      .then((res) => res.json())
      .then((json) => {
        const flavor_text = json.flavor_text_entries.filter(
          (item) => item.language.name === "en"
        );
        setMove({
          ...json,
          flavor_text: flavor_text[flavor_text.length - 1],
        });
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <main className="rounded-md flex flex-col p-4 gap-4 lg:flex-row">
      <section className="lg:w-1/3">
        <div className="bg-neutral-200 rounded-md p-6 flex gap-6 text-xl">
          <div className="grid grid-cols-2 items-center gap-6">
            <h1>Move</h1>
            <p>{format(name)}</p>
            <h1>Type</h1>
            <p
              className={`${
                colors[move.type && move.type.name]
              } px-4 py-1 text-lg uppercase rounded-md text-center text-white tracking-wider`}
            >
              {move.type && move.type.name}
            </p>
            <h1>Power</h1>
            <p>{move.power || "-"}</p>
            <h1>Category</h1>
            <p>{move.damage_class && format(move.damage_class.name)}</p>
            <h1>Accuracy</h1>
            <p>{move.accuracy || "-"}</p>
            <h1>PP</h1>
            <p>{move.pp}</p>
          </div>
        </div>
        <div className="bg-neutral-200 rounded-md p-4 mt-4">
          <h1 className="text-2xl mb-2">Effect</h1>
          <p className="text-lg">
            {move.flavor_text && move.flavor_text.flavor_text}
          </p>
          {move.effect_chance && (
            <h1 className="mt-2 text-lg">
              Chance: {move.effect_chance && move.effect_chance}%
            </h1>
          )}
        </div>
      </section>
      <section>
        <div className="bg-neutral-200 rounded-md p-4">
          <h1 className="text-2xl mb-2 text-center">Learned by Pokemon</h1>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {move.learned_by_pokemon &&
              move.learned_by_pokemon.map((item, i) => {
                const id = item.url.replace(/\D/g, "").slice(1);
                return (
                  <Link
                    key={i}
                    to={`/Pokedex/Pokemon/${id}`}
                    className="flex items-center px-4 py-3 rounded-md bg-neutral-200 hover:bg-neutral-300 transition-all"
                  >
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                      className="w-12"
                    />
                    <h1 className="indent-3 text-lg overflow-hidden overflow-ellipsis whitespace-nowrap">
                      {format(item.name)}
                    </h1>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Move;
