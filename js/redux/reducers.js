import { NavigationReducer } from "@expo/ex-navigation";
import scheduleReducer from "./modules/schedule";
import aboutReducer from "./modules/about";
import speakerReducer from "./modules/speaker";
import favesReducer from "./modules/faves";
import { combineReducers } from "redux";

export default (rootReducer = combineReducers({
  navigation: NavigationReducer,
  about: aboutReducer,
  schedule: scheduleReducer,
  speaker: speakerReducer,
  faves: favesReducer
}));
