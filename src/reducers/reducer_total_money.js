import { RETRIEVED_DATA_FROM_STORAGE, FOOD_FINISHED_CYCLE, FOOD_PURCHASED } from '../actions/types';

export default function(state = 100000, action) {
    switch (action.type) {
        case RETRIEVED_DATA_FROM_STORAGE:
            return action.payload.totalMoney;
        case FOOD_FINISHED_CYCLE:
            return state + action.payload.currentCycleValue;
        // case FOOD_PURCHASED:
        //     return state - (action.payload.food)
        default:
            return state;
    }
}