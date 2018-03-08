import React, { Component } from "react";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";
import Router from "./../navigation/routes";
import { colors, typography } from "../config/styles";
import { Text, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };
  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="Schedule"
        tabBarColor={colors.black}
      >
        <TabItem
          id="About"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "ios-information-circle-outline")
          }
        >
          <StackNavigation
            id="About"
            navigatorUID="About"
            initialRoute={Router.getRoute("About")}
          />
        </TabItem>
        <TabItem
          id="Schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "ios-calendar-outline")
          }
        >
          <StackNavigation
            id="Schedule"
            navigatorUID="Schedule"
            initialRoute={Router.getRoute("Schedule")}
          />
        </TabItem>
        <TabItem
          id="Faves"
          title="Faves"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "ios-heart-outline")
          }
        >
          <StackNavigation
            id="Faves"
            navigatorUID="Faves"
            initialRoute={Router.getRoute("Faves")}
          />
        </TabItem>
        <TabItem
          id="Map"
          title="Map"
          renderTitle={this.renderTitle}
          onPress={() => {
            Alert.alert("Cannot find GPS.......");
          }}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "ios-map-outline")
          }
        >
          <StackNavigation
            id="Map"
            navigatorUID="Map"
            initialRoute={Router.getRoute("About")}
          />
        </TabItem>
      </TabNavigation>
    );
  }
  renderTitle(isSelected, title) {
    return (
      <Text
        style={{
          fontFamily: typography.fontMain,
          fontSize: 10,
          color: isSelected ? colors.white : colors.mediumGrey
        }}
      >
        {title}
      </Text>
    );
  }
  renderIcon(isSelected, iconName) {
    return (
      <Icon
        name={iconName}
        size={25}
        color={isSelected ? colors.white : colors.mediumGrey}
      />
    );
  }
}
export default NavigationLayout;
