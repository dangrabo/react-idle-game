import { useEffect, useState } from "react";

//Requirements
//Single number: score
//Array: awards
//Object: upgrade values

export default function Game() {
  const [score, setScore] = useState(0);
  const [awards, setAwards] = useState([]);
  const [awardTrack, setAwardTrack] = useState({
    bronze: false,
    silver: false,
    gold: false,
  })
  const [upgrades, setUpgrades] = useState({
    clickIncrementor: 1,
    clickUpgradeCost: 10,
    timeIncrementor: 0,
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

  function updateRewards() {
    if (score > 30 && !awardTrack.gold) {
      setAwards(prev => ['🥇', ...prev])
      setAwardTrack(prev => ({
        ...prev,
        gold: true
      }))
    }
    else if (score > 20 && !awardTrack.silver) {
      setAwards(prev => ['🥈', ...prev])
      setAwardTrack(prev => ({
        ...prev,
        silver: true
      }))
    }
    else if (score > 10 && !awardTrack.bronze) {
      setAwards(['🥉']);
      setAwardTrack(prev => ({
        ...prev,
        bronze: true
      }))
    }
  }

  useEffect(() => {
    const intervalId = setInterval(incrementTimeScore, 10000);
    return () => clearInterval(intervalId);
  })

  useEffect(() => {
    const intervalId = setInterval(updateRewards, 100);
    return () => clearInterval(intervalId);
  });

  const awardsDisplay = awards.map(award => <li>{award}</li>)

  // console.log(upgrades);

  return (
    <div>
      <h1>{score}</h1>
      <button onClick={incrementScore} id="clicker">
        Click me
      </button>
      <div className="upgradeDiv">
        <p>Upgrade Clicker</p>
        <button onClick={upgradeClicker} id="upgrade-clicker">
          Cost: {clickUpgradeCost}
        </button>
      </div>
      <div className="upgradeDiv">
        <p>Upgrade Clicker</p>
        <button id="upgrade-timer">Upgrade</button>
      </div>
      <div className="awardsDiv">
        <ul>{awardsDisplay}</ul>
      </div>
    </div>
  );
}
