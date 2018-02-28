import { NavigationReducer } from '@expo/ex-navigation';
import aboutReducer from './modules/about';
import { combineReducers } from 'redux';

export default (rootReducer = combineReducers({
  navigation: NavigationReducer,
  about: aboutReducer,
}));
