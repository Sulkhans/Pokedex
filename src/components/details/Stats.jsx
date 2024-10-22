import { colors } from "../../data/colors.js";

const Stats = ({ types, abilities, stats, weight, height, setAbility }) => {
  const format = (name) =>
    name
      .split("-")
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join(" ");

  return (
    <section className="flex flex-col gap-4 text-center row-[2] lg:row-[1] lg:mb-36 max-w-xs min-[1600px]:max-w-none min-[1600px]:gap-6">
      <div className="text-center font-medium">
        <p className="mb-2 min-[1600px]:text-xl">Type</p>
        <div className="flex gap-2 justify-center">
          {types &&
            types.map((type, i) => (
              <p
                key={i}
                className={`py-1.5 px-6 text-sm min-[1600px]:text-lg uppercase rounded-full text-center text-white tracking-wider
                ${colors[type]}`}
              >
                {type}
              </p>
            ))}
        </div>
      </div>
      <div>
        <p className="text-center font-medium mb-2 min-[1600px]:text-xl">
          Abilities
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-center text-sm text-white">
          {abilities &&
            abilities.map((ability, i) => (
              <button
                key={i}
                onClick={() => setAbility(ability)}
                className="py-1.5 px-6  bg-neutral-800 rounded-full hover:scale-105 transition-all select-none min-[1600px]:text-lg"
              >
                {format(ability)}
              </button>
            ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly font-medium">
        <p className="mb-2 min-[1600px]:text-xl">Base stats</p>
        <div className="flex justify-evenly w-full max-w-xs gap-6 min-[1600px]:max-w-none min-[1600px]:gap-8">
          {stats &&
            stats.map((item, i) => (
              <div key={i}>
                <p className="text-lg min-[1600px]:text-xl">{item.base_stat}</p>
                <p className="text-sm min-[1600px]:text-base">
                  {format(item.stat.name)}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-center gap-10 self-center font-medium">
        <div>
          <p className="min-[1600px]:text-xl">Height</p>
          <p className="min-[1600px]:text-lg">{height} m</p>
        </div>
        <div>
          <p className="min-[1600px]:text-xl">Weight</p>
          <p className="min-[1600px]:text-lg">{weight} kg</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
