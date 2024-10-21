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
      <p className="text-lg font-medium">{header}</p>
      <div className="flex flex-wrap gap-x-4 lg:gap-8 justify-center">
        {pokemon.map((poke, i) => {
          const id = getId(poke.url);
          return (
            <Link
              key={i}
              to={`/Pokedex/Pokemon/${id}`}
              onClick={() => window.scrollTo({ top: 0 })}
              className="relative w-36 sm:w-40 md:w-44 lg:w-48 min-[1700px]:w-52 p-4 pt-0 text-white hover:scale-105 transition-all"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 bg-neutral-800 w-full h-1/2 rounded-full transition-all" />
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              />
              <h1 className="text-sm truncate px-2">{format(poke.name)}</h1>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default List;
