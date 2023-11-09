import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Hidden from "../assets/hidden.svg?react";

const Ability = () => {
  const { name } = useParams();
  const [ability, setAbility] = useState({});

  const format = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace("-", " ");

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
    <main className="m-4 bg-neutral-200 rounded-md flex flex-col gap-4 p-4">
      <section className="bg-neutral-300 rounded-md p-4">
        <h1 className="text-2xl mb-2">Ability</h1>
        <h2 className="text-lg">{format(name)}</h2>
      </section>
      <section className="bg-neutral-300 rounded-md p-4">
        <h1 className="text-2xl mb-2">Effect</h1>
        <p className="text-lg">{ability.effect && ability.effect.effect}</p>
      </section>
      <section className="bg-neutral-300 rounded-md p-4">
        <h1 className="text-2xl mb-2 text-center">
          Pokemon with {format(name)}
        </h1>
        <div className="flex flex-wrap gap-4 p-2 justify-center">
          {ability.pokemon &&
            ability.pokemon.map((item, i) => (
              <Link
                key={i}
                to={`/Pokedex/Pokemon/${item.pokemon.url
                  .replace(/\D/g, "")
                  .slice(1)}`}
                className="bg-[#c4c4c4] rounded-md hover:bg-neutral-400 p-4 relative transition-all"
              >
                {item.is_hidden && (
                  <Hidden className="w-6 h-6 absolute right-4 fill-neutral-500" />
                )}
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.pokemon.url
                    .replace(/\D/g, "")
                    .slice(1)}.png`}
                  className="w-48"
                />
                <h1 className="text-center mt-2 text-lg">
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
