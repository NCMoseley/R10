import AboutContainer from '../scenes/About';
import { createRouter } from '@expo/ex-navigation';
// import './navigationlayout';
import NavigationLayout from './navigationlayout';
import ScheduleContainer from '../scenes/Schedule/ScheduleContainer';
import FavesContainer from '../scenes/Faves/FavesContainer';

export default createRouter(() => ({
  // home: () => HomeScreen,
  About: () => AboutContainer,
  Schedule: () => ScheduleContainer,
  Layout: () => NavigationLayout,
  Faves: () => FavesContainer,
}));
