import { RETRIEVED_DATA_FROM_STORAGE, MULTIPLE_BY_CHANGE } from '../actions/types';

export default function(state = 1, action) {
    switch (action.type) {
        case RETRIEVED_DATA_FROM_STORAGE:
            return action.payload.multipleBy;
        case MULTIPLE_BY_CHANGE:
            return action.payload;
        default:
            return state;
    }
}