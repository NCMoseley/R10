import React, { Component } from "react";
import { StatusBar, Platform } from "react-native";
import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from "@expo/ex-navigation";
import Router from "./navigation/routes";
import Store from "./redux/store";
import { Provider } from "react-redux";

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext} router={Router}>
          <StatusBar
            barStyle="light-content"
            hidden={Platform.OS === "android"}
          />
          <StackNavigation
            navigatorUID="root"
            initialRoute={Router.getRoute("Layout")}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}
