import AboutContainer from '../scenes/About';
import { createRouter } from '@expo/ex-navigation';

export default createRouter(() => ({
  // home: () => HomeScreen,
  About: () => AboutContainer,
}));
