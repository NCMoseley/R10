import React, { Component } from 'react';
import { Text, View, AppRegistry } from 'react-native';
import { NavigationProvider, StackNavigation, NavigationContext } from '@expo/ex-navigation';
import Router from './navigation/routes';
import About from './scenes/About/';
import Store from './redux/store';
import { Provider } from 'react-redux';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
});
export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext} router={Router}>
          <StackNavigation initialRoute={Router.getRoute('Layout')} />
        </NavigationProvider>
      </Provider>
    );
  }
}

// Without Routes:

// export default class App extends Component {
//   render() {
//     return (
//       // style={styles.container}
//       <View>
//         <AboutContainer />
//       </View>
//     );
//   }
// }
