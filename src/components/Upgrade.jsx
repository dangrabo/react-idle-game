export default function Upgrade({ upgrades, handleUpgrade, type }) {
  
  const upgradeCost = type === 'click' ? upgrades.clickUpgradeCost : upgrades.timeUpgradeCost;
  
  return (
    <div className="upgradeDiv">
        <p>Upgrade Clicker</p>
        <button onClick={handleUpgrade} id="upgrade-clicker">
          Cost: {upgradeCost}
        </button>
      </div>
  )
}