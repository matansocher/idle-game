import { RETRIEVED_DATA_FROM_STORAGE } from '../actions/types';
import config from '../config';

export default function(state = config.foods, action) {
    switch (action.type) {
        case RETRIEVED_DATA_FROM_STORAGE:
            return action.payload.foods;
        // case MULTIPLE_BY_CHANGE:
        //     return action.payload;
        default:
            return state;
    }
}