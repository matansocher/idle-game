import React from 'react';
import * as common_methods from '../services/common_methods';

export default (props) => {
  
  // add logic to start money cycles - maybe interval

  const { image, displayName, isRevealed, cycleDuration, initialRevenue, initialCost, level } = props.food;

  const currentRevenuePerCycle = isRevealed ? common_methods.getCurrentRevenuePerCycle(initialRevenue, level) : 0;
  const currentUpgradeCost = common_methods.getCurrentUpgradeCost(initialCost, level, props.multipleBy, props.totalMoney);

  const purchaseClickHandler = () => {
    if (props.totalMoney < currentUpgradeCost) { // not enough money
      return;
    }
    props.itemPurchased(props.food);
  }

  return (
    <div className="food">
      
      <div className="food-left">
        <img className="food-image" src={require(`../assets/${image}`)} alt="food" />
      </div>
      
      <div className="food-middle">
        <div className="food-middle-top">
          <p className="food-name">{displayName}</p>
          <p className="food-level">Lv. {level}</p>
        </div>
        <div className="food-middle-center">
          <p>{common_methods.getTimeRemainingStrFromNumOfSeconds(cycleDuration) || '00:01:11'}</p>
        </div>
        <div className="food-middle-bottom">
          <div className="progress-bar">
            <div className="progress-bar-left">
              <p>$</p>
            </div>
            <div className="progress-bar-right">
              <div className="progress-bar-actual"></div>
              <p>${currentRevenuePerCycle}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="food-right" onClick={purchaseClickHandler}>
        <div className={props.totalMoney < currentUpgradeCost ? "upgrade-btn disabled" : "upgrade-btn"}>
          <div className="upgrade-btn-top">
            <img className="dollar-image" src={require(`../assets/dollar.png`)} alt="dollar bill" />
            <p>{common_methods.abbreviateNumber(currentUpgradeCost)}</p>
          </div>
          <div className="upgrade-btn-bottom">
            <p>UPGRADE</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
