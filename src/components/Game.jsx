import { useEffect, useState } from "react";

//Requirements
//Single number: score
//Array: awards
//Object: upgrade values

export default function Game() {
  const [score, setScore] = useState(0);
  //award state here
  const [upgrades, setUpgrades] = useState({
    clickIncrementor: 1,
    clickUpgradeCost: 10,
    timeIncrementor: 1000000,
    timeUpgradeCost: 10,
  });

  const {
    clickIncrementor,
    clickUpgradeCost,
    timeIncrementor,
    timeUpgradeCost,
  } = upgrades;

  function incrementScore() {
    setScore((prev) => prev + clickIncrementor);
  }

  function incrementTimeScore() {
    setScore((prev) => prev + timeIncrementor);
  }

  function upgradeClicker() {
    if (score < clickUpgradeCost) {
      alert("Not enough score");
      return;
    }

    setScore((prev) => prev - clickUpgradeCost);

    setUpgrades({
      ...upgrades,
      clickIncrementor: clickIncrementor * 2,
      clickUpgradeCost: clickUpgradeCost * 2,
    });
  }

  useEffect(() => {
    const intervalId = setInterval(incrementTimeScore, 1000);
    return () => clearInterval(intervalId);
  });

  console.log(upgrades);

  return (
    <>
      <div>
        <h1>{score}</h1>
        <button onClick={incrementScore} id="clicker">
          Click me
        </button>
        <div className="upgradeDiv">
          <p>Upgrade Clicker</p>
          <button onClick={upgradeClicker} id="upgrade-clicker">
            Upgrade
          </button>
        </div>
        <div className="upgradeDiv">
          <p>Upgrade Clicker</p>
          <button id="upgrade-timer">Upgrade</button>
        </div>
        <div className="awardsDiv">
          <ul>{/* awards go here */}</ul>
        </div>
      </div>
    </>
  );
}
