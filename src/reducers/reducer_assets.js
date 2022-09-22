import { RETRIEVED_DATA_FROM_STORAGE, FOOD_FINISHED_CYCLE } from '../actions/types';

export default function(state = 0, action) {
    switch (action.type) {
        case RETRIEVED_DATA_FROM_STORAGE:
            return action.payload.assets;
        case FOOD_FINISHED_CYCLE:
            return state + action.payload;
        default:
            return state;
    }
}