import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Hidden from "../assets/hidden.svg?react";

const Ability = () => {
  const { name } = useParams();
  const [ability, setAbility] = useState({});

  const format = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/ability/${name}`)
      .then((res) => res.json())
      .then((json) => {
        const { generation, pokemon } = json;
        const effects = json.effect_entries.filter(
          (item) => item.language.name === "en"
        );
        setAbility({ effect: effects[0], generation, pokemon });
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <main className="rounded-md flex flex-col gap-4 p-4">
      <section className="bg-neutral-100 rounded-md p-4">
        <h1 className="text-2xl mb-2">Ability</h1>
        <h2 className="text-lg">{format(name)}</h2>
      </section>
      <section className="bg-neutral-100 rounded-md p-4">
        <h1 className="text-2xl mb-2">Effect</h1>
        <p className="text-lg">{ability.effect && ability.effect.effect}</p>
      </section>
      <section className="flex flex-col gap-4 bg-neutral-100 rounded-md p-4">
        <h1 className="text-2xl leading-6 text-center py-1">
          Pokemon with {format(name)}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center lg:flex flex-wrap justify-center gap-4">
          {ability.pokemon &&
            ability.pokemon.map((item, i) => (
              <Link
                key={i}
                to={`/Pokedex/Pokemon/${item.pokemon.url
                  .replace(/\D/g, "")
                  .slice(1)}`}
                className="rounded-md bg-neutral-200 bg-opacity-50 hover:scale-105 p-4 relative transition-all"
              >
                {item.is_hidden && (
                  <Hidden className="w-6 h-6 absolute right-4 fill-neutral-400 opacity-50" />
                )}
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.pokemon.url
                    .replace(/\D/g, "")
                    .slice(1)}.png`}
                  className="w-40 sm:p-2"
                />
                <h1 className="text-center mt-2 sm:text-lg line-clamp-1">
                  {format(item.pokemon.name)}
                </h1>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Ability;
