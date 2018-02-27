import React, { Component } from 'react';
import { StackNavigation, TabNavigation, TabNavigationItem as TabItem } from '@expo/ex-navigation';
import Router from './../navigation/routes';
import { colors } from '../config/styles';
import { Text } from 'react-native';

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };
  render() {
    return (
      <TabNavigation id="main" navigatorUID="main" initialTab="Schedule" tabBarColor={colors.black}>
        <TabItem id="About" title="About" renderTitle={this.renderTitle}>
          <StackNavigation
            id="About"
            navigatorUID="About"
            initialRoute={Router.getRoute('About')}
          />
        </TabItem>
        <TabItem id="Schedule" title="Schedule" renderTitle={this.renderTitle}>
          <StackNavigation
            id="Schedule"
            navigatorUID="Schedule"
            initialRoute={Router.getRoute('Schedule')}
          />
        </TabItem>
        <TabItem id="Faves" title="Faves" renderTitle={this.renderTitle}>
          <StackNavigation
            id="Faves"
            navigatorUID="Faves"
            initialRoute={Router.getRoute('Faves')}
          />
        </TabItem>
      </TabNavigation>
    );
  }
  renderTitle(isSelected, title) {
    return <Text style={{ color: isSelected ? colors.white : colors.mediumGrey }}>{title}</Text>;
  }
}
export default NavigationLayout;
