const Moves = ({ moves, setMove }) => {
  const format = (name) =>
    name
      .split("-")
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join(" ");

  return (
    <section className="flex flex-col items-center w-full max-w-xs sm:max-w-md md:max-w-2xl text-center min-[1600px]:max-w-5xl">
      <p className="text-lg mb-2 font-medium min-[1600px]:text-xl">Moves</p>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-white text-sm min-[1600px]:text-lg w-full max-h-64 overflow-y-auto scroll-hide">
        {moves.map((item, i) => (
          <button
            key={i}
            onClick={() => setMove(item.move.name)}
            className="py-2 rounded-full bg-neutral-800"
          >
            {format(item.move.name)}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Moves;
