export default function Upgrade({ upgrade }) {
  return (
    <div className="upgradeDiv">
      <p>Upgrade Clicker</p>
      <button onClick={upgradeClicker} id="upgrade-clicker">
        Cost: {clickUpgradeCost}
      </button>
    </div>
  );
}
