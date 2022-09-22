import config from '../config';

export function getInitailFoodsState() {
    // config.foods
    return null;
}

export function getCurrentRevenuePerCycle(initialRevenue, level) {
    let currentRevenuePerCycle = initialRevenue * level;
    for (let i = 0; i < config.cyclesJumps.length; i++) {
        if (level >= config.cyclesJumps[i]) {
            currentRevenuePerCycle = currentRevenuePerCycle * 2;
        }
    }
    return currentRevenuePerCycle;
}

export function getCurrentUpgradeCost(initialCost, level, multipleBy, totalMoney) {
    let currentUpgradeCost = initialCost * level;
    if (multipleBy === "Max") {
        currentUpgradeCost = getFoodMaxPurchase(currentUpgradeCost);
    } else {
        currentUpgradeCost = currentUpgradeCost * multipleBy;
    }
    return currentUpgradeCost;
}

function getFoodMaxPurchase(currentUpgradeCost) { // multipleBy = "Max"
    return currentUpgradeCost * 1;
}

export function getNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function abbreviateNumber(number) {
    let numberOfTimesDevidedByThousand = 0;
    while (number >= 1000) {
        number = number / 1000;
        numberOfTimesDevidedByThousand++;
    }
    number = number.toFixed(2);
    return `${number}${config.thousandsStrs[numberOfTimesDevidedByThousand]}`;
}

export function getTimeRemainingStrFromNumOfSeconds(numOfSeconds) {
    let numOfMinutes = 0;
    while (numOfSeconds > 59) {
        numOfMinutes++;
        numOfSeconds = numOfSeconds - 60;
    }
    return `00:${getTwoDigitNumber(numOfMinutes)}:${getTwoDigitNumber(numOfSeconds)}`
}

function getTwoDigitNumber(number) {
    return number < 10 ? `0${number}` : number
}
