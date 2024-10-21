import React from "react";
import { damageTaken } from "../../data/damages.js";
import { colors } from "../../data/colors.js";

const Damage = ({ type }) => {
  const multiplayers = ["0x", "0.25x", "0.5x", "2x", "4x"];
  return (
    <div className="max-w-xs text-center font-medium bg-neutral-800 p-4 pt-3 rounded-lg">
      <p className="mb-3 text-white">Damage Taken</p>
      <div className="w-full flex flex-col gap-2 mr-4">
        {multiplayers.map((multiplayer) => (
          <div
            key={multiplayer}
            className="grid grid-cols-[70px_1fr] items-center py-2 rounded-lg bg-neutral-700"
          >
            <p className="place-self-center text-white">{multiplayer}</p>
            <div className="flex flex-wrap gap-2">
              {damageTaken[type][multiplayer].map((damageType) => (
                <p
                  key={damageType}
                  className={`${colors[damageType]} py-1.5 px-4 text-sm uppercase rounded-full text-white tracking-wider`}
                >
                  {damageType}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Damage;
