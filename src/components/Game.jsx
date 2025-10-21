import { useEffect, useState } from "react";
import Upgrade from "./Upgrade";
import ScoreClick from "./ScoreClick";
import Awards from "./Awards";

export default function Game() {
  const [score, setScore] = useState(0);
  const [upgrades, setUpgrades] = useState({
    clickIncrementor: 1,
    clickUpgradeCost: 10,
    timeIncrementor: 1,
    timeUpgradeCost: 10,
  });

  //descructure variables from upgrades object
  const { clickIncrementor, timeIncrementor } = upgrades;

  //give click score
  function incrementScore() {
    setScore((prev) => prev + clickIncrementor);
  }

  //give time score
  function incrementTimeScore() {
    setScore((prev) => prev + timeIncrementor);
  }

  //give upgrades
  function upgrade(type) {
    const upgradeCostKey = `${type}UpgradeCost`;
    const incrementorKey = `${type}Incrementor`;

    const currentCost = upgrades[upgradeCostKey];
    const currentIncrementor = upgrades[incrementorKey];

    if (score < currentCost) {
      alert("Not enough score");
      return;
    }

    setScore((prev) => prev - currentCost);

    setUpgrades({
      ...upgrades,
      [incrementorKey]: currentIncrementor * 2,
      [upgradeCostKey]: currentCost * 2,
    });
  }

  //give time score
  useEffect(() => {
    const intervalId = setInterval(incrementTimeScore, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="game-container">
      <ScoreClick handleClick={incrementScore} score={score} />
      <Upgrade
        upgrades={upgrades}
        handleUpgrade={() => upgrade("click")}
        type="click"
      />
      <Upgrade
        upgrades={upgrades}
        handleUpgrade={() => upgrade("time")}
        type="time"
      />
      <Awards score={score} />
    </div>
  );
}
