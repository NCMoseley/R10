import AboutContainer from "../scenes/About";
import { createRouter } from "@expo/ex-navigation";
import NavigationLayout from "./nav";
import ScheduleContainer from "../scenes/Schedule";
import FavesContainer from "../scenes/Faves";
import SessionContainer from "../scenes/Session";
import SpeakerContainer from "../scenes/Speaker";

export default createRouter(() => ({
  About: () => AboutContainer,
  Schedule: () => ScheduleContainer,
  Layout: () => NavigationLayout,
  Faves: () => FavesContainer,
  Session: () => SessionContainer,
  Speaker: () => SpeakerContainer
}));
