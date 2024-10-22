import { Link } from "react-router-dom";

const List = ({ header, pokemon }) => {
  const getId = (url) => url.replace(/\D/g, "").slice(1);
  const format = (name) =>
    name
      .split("-")
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join(" ");

  return (
    <section className="flex flex-col justify-center text-center">
      <p className="text-lg font-medium min-[1600px]:text-xl">{header}</p>
      <div className="flex flex-wrap gap-x-4 lg:gap-8 justify-center xl:max-w-6xl min-[1600px]:max-w-7xl">
        {pokemon.map((poke, i) => {
          const id = getId(poke.url);
          return (
            <Link
              key={i}
              to={`/Pokedex/Pokemon/${id}`}
              onClick={() => window.scrollTo({ top: 0 })}
              className="relative w-36 sm:w-40 md:w-44 lg:w-48 min-[1700px]:w-52 p-4 pt-0 sm:pt-2 text-white hover:scale-105 transition-all select-none"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 bg-neutral-800 w-full h-1/2 rounded-full transition-all" />
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                draggable={false}
              />
              <h1 className="text-sm truncate px-2 min-[1600px]:text-base">
                {format(poke.name)}
              </h1>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default List;
