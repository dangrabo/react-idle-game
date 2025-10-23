export default function Upgrade({ upgrades, handleUpgrade, type }) {
  
  const upgradeCost = type === 'click' ? upgrades.clickUpgradeCost : upgrades.timeUpgradeCost;
  
  return (
    <div className="upgradeDiv">
        <p>Upgrade {type}</p>
        <button onClick={handleUpgrade} id="upgrade-clicker">
          Cost: {upgradeCost}
        </button>
      </div>
  )
}
