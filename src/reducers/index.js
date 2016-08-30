import { combineReducers } from 'redux';
import GifsReducer from './sample';

const rootReducer = combineReducers({
  gifs: GifsReducer
});

export default rootReducer;
