import React, { Component } from "react";
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";
import Router from "./../navigation/routes";
import { colors, typography } from "../config/styles";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class NavigationLayout extends React.Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    return (
      <DrawerNavigation
        id="main"
        initialItem="Schedule"
        drawerWidth={200}
        renderHeader={this._renderHeader}
      >
        <DrawerNavigationItem
          id="About"
          // selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this.renderTitle(isSelected, "About")}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "md-information-circle")
          }
        >
          <StackNavigation
            id="About"
            navigatorUID="About"
            initialRoute={Router.getRoute("About")}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="Schedule"
          // selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this.renderTitle(isSelected, "Schedule")}
          renderIcon={isSelected => this.renderIcon(isSelected, "md-calendar")}
        >
          <StackNavigation
            id="Schedule"
            navigatorUID="Schedule"
            initialRoute={Router.getRoute("Schedule")}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="Faves"
          // selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this.renderTitle(isSelected, "Faves")}
          renderIcon={isSelected => this.renderIcon(isSelected, "md-heart")}
        >
          <StackNavigation
            id="Faves"
            navigatorUID="Faves"
            initialRoute={Router.getRoute("Faves")}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="Map"
          // selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this.renderTitle(isSelected, "Map")}
          renderIcon={isSelected => this.renderIcon(isSelected, "md-map")}
        >
          <StackNavigation
            id="Map"
            navigatorUID="Map"
            initialRoute={Router.getRoute("About")}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }

  renderHeader = () => {
    return <View style={styles.header} />;
  };

  renderTitle(isSelected, title) {
    return (
      <Text
        style={{
          fontFamily: typography.fontMain,
          fontSize: 20,
          color: isSelected ? colors.red : colors.mediumGrey
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
        size={35}
        color={isSelected ? colors.red : colors.mediumGrey}
      />
    );
  }
}

export default NavigationLayout;

const styles = StyleSheet.create({
  header: {
    height: 20,
    backgroundColor: "blue"
  },

  selectedItemStyle: {
    backgroundColor: "blue"
  },

  titleText: {
    fontWeight: "bold"
  },

  selectedTitleText: {
    color: "white"
  }
});
