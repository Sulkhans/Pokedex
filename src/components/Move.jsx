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
    <main className=" rounded-md flex flex-col gap-4 p-4">
      <section className="bg-neutral-200 rounded-md p-6 flex text-xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-6">
          <h1 className="text-2xl">Move</h1>
          <h2 className="text-xl py-1">{format(name)}</h2>
          <h1 className="text-2xl">Type</h1>
          <p
            className={`${
              colors[move.type && move.type.name]
            } px-4 py-1 text-lg uppercase rounded-md text-center text-white tracking-wider`}
          >
            {move.type && move.type.name}
          </p>
          <h1 className="text-2xl">Power</h1>
          <p>{move.power}</p>
          <h1 className="text-2xl">Category</h1>
          <p>{move.damage_class && format(move.damage_class.name)}</p>
          <h1 className="text-2xl">Accuracy</h1>
          <p>{move.accuracy}</p>
          <h1 className="text-2xl">PP</h1>
          <p>{move.pp}</p>
        </div>
      </section>
      <section className="bg-neutral-200 rounded-md p-4">
        <h1 className="text-2xl mb-2">Effect</h1>
        <p className="text-lg">
          {move.flavor_text && move.flavor_text.flavor_text}
        </p>
        <h1 className="mt-2 text-lg">
          Chance: {move.effect_chance && move.effect_chance}
        </h1>
      </section>
    </main>
  );
};

export default Move;
