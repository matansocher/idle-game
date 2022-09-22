import { combineReducers } from 'redux';
import foods from './reducer_foods';
import rate from './reducer_rate';
import assets from './reducer_assets';
import totalMoney from './reducer_total_money';
import multipleBy from './reducer_multiple_by';

const rootReducer = combineReducers({
  foods, rate, assets, totalMoney, multipleBy
});

export default rootReducer;