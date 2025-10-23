import { useState, useEffect } from "react";

export default function Awards({ score }) {
  const [awards, setAwards] = useState([]);
  const [awardTrack, setAwardTrack] = useState({
    bronze: false,
    silver: false,
    gold: false,
  });

  function updateRewards() {
    if (score >= 30 && !awardTrack.gold) {
      setAwards(() => ["🥇"]);
      setAwardTrack((prev) => ({
        ...prev,
        gold: true,
      }));
    } else if (score >= 20 && !awardTrack.silver) {
      setAwards(() => ["🥈"]);
      setAwardTrack((prev) => ({
        ...prev,
        silver: true,
      }));
    } else if (score >= 10 && !awardTrack.bronze) {
      setAwards(["🥉"]);
      setAwardTrack((prev) => ({
        ...prev,
        bronze: true,
      }));
    }
  }

  useEffect(() => {
    const intervalId = setInterval(updateRewards, 100);
    return () => clearInterval(intervalId);
  });

  const awardsDisplay = awards.map((award, index) => (
    <li key={index}>{award}</li>
  ));

  return (
    <div className="awardsDiv">
      <ul>{awardsDisplay}</ul>
    </div>
  );
}
