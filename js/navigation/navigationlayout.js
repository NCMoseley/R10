import React, { Component } from 'react';
import { StackNavigation, TabNavigation, TabNavigationItem as TabItem } from '@expo/ex-navigation';
import Router from './../navigation/routes';

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };
  render() {
    return (
      <TabNavigation id="main" navigatorUID="main" initialTab="Schedule">
        <TabItem id="About" title="About">
          <StackNavigation
            id="About"
            navigatorUID="About"
            initialRoute={Router.getRoute('About')}
          />
        </TabItem>
        <TabItem id="Schedule" title="Schedule">
          <StackNavigation
            id="Schedule"
            navigatorUID="Schedule"
            initialRoute={Router.getRoute('Schedule')}
          />
        </TabItem>
        <TabItem id="Faves" title="Faves">
          <StackNavigation
            id="Faves"
            navigatorUID="Faves"
            initialRoute={Router.getRoute('Faves')}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}
export default NavigationLayout;
