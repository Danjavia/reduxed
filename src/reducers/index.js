import { combineReducers } from 'redux';
import GifsReducer from './sample';
import ModalReducer from './modal';

const rootReducer = combineReducers({
  gifs: GifsReducer,
  modal: ModalReducer
});

export default rootReducer;
