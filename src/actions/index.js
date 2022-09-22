import { 
    RETRIEVED_DATA_FROM_STORAGE,
    FOOD_FINISHED_CYCLE,
    MULTIPLE_BY_CHANGE,
    FOOD_PURCHASED
} from './types';
  
export function retrievedDataFromStorage(gameData) {
    return {
        type: RETRIEVED_DATA_FROM_STORAGE,
        payload: gameData
    }
}

export function foodFinishedCycle(food) {
    return {
        type: FOOD_FINISHED_CYCLE,
        payload: food.currentCycleValue
    }
}

export function multipleByChange(value) {
    return {
        type: MULTIPLE_BY_CHANGE,
        payload: value
    }
}

export function foodPurchased(food) {
    return {
        type: FOOD_PURCHASED,
        payload: food
    }
}