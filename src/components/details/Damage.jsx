import React from "react";
import { damageTaken } from "../../data/damages.js";
import { colors } from "../../data/colors.js";

const Damage = ({ type }) => {
  const multiplayers = ["0x", "0.25x", "0.5x", "2x", "4x"];
  return (
    <section className="flex flex-col items-center lg:mb-36">
      <div className="max-w-xs text-center font-medium rounded-lg min-[1600px]:max-w-sm">
        <p className="mb-2 min-[1600px]:text-xl">Damage Taken</p>
        <div className="w-full flex flex-col gap-2">
          {multiplayers.map((multiplayer) => (
            <div
              key={multiplayer}
              className="grid grid-cols-[70px_1fr] min-[1600px]:grid-cols-[90px_1fr] items-center py-2 pr-3 rounded-lg bg-neutral-800 min-w-[300px]"
            >
              <p className="place-self-center text-white min-[1600px]:text-lg">
                {multiplayer}
              </p>
              <div className="flex flex-wrap gap-2">
                {damageTaken[type][multiplayer].map((damageType) => (
                  <p
                    key={damageType}
                    className={`${colors[damageType]} py-1.5 px-4 text-sm min-[1600px]:text-lg min-[1600px]:py-2 uppercase rounded-full text-white tracking-wider`}
                  >
                    {damageType}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Damage;
