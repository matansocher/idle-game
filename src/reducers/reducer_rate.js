import { RETRIEVED_DATA_FROM_STORAGE } from '../actions/types';

export default function(state = 0, action) {
    switch (action.type) {
        case RETRIEVED_DATA_FROM_STORAGE:
            return action.payload.rate;
        // case FOOD_PURCHASED:
        //     return ........
        default:
            return state;
    }
}