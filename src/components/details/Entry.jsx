import { useState } from "react";
import { Link } from "react-router-dom";
import Shiny from "../../assets/Shiny.svg?react";
import Arrow from "../../assets/Arrow.svg?react";
import Pokeball from "../../assets/Pokeball.png";

const Entry = ({ id, genera, entry, cry }) => {
  const [shiny, setShiny] = useState(false);
  return (
    <section className="flex flex-col items-center gap-2 lg:gap-4 text-center">
      <div className="relative w-full max-w-[300px] xl:max-w-[380px] min-[1600px]:max-w-[500px] aspect-square select-none">
        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50">
          <img src={Pokeball} draggable={false} className="animate-spin-slow" />
        </div>
        {shiny ? (
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`}
            draggable={false}
            onClick={cry}
            className="p-10 cursor-pointer"
          />
        ) : (
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            draggable={false}
            onClick={cry}
            className="p-10 cursor-pointer"
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
        <p className="text-xl text-center font-medium mb-2 min-[1600px]:text-2xl">
          {genera}
        </p>
        <p className="text-sm max-w-sm lg:max-w-none min-[1600px]:text-lg">
          {entry}
        </p>
      </div>
    </section>
  );
};

export default Entry;
