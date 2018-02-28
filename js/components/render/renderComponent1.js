import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Router from "../../navigation/routes";
import Store from "../../redux/store";
import { NavigationActions } from "@expo/ex-navigation";
// import goToSession from "../../lib/navigationHelpers";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
  SectionList,
  TouchableHighlight
} from "react-native";
import { styles } from "./styles";

const goToSession = (currentNavigatorUID, sessionData) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute("Session", { sessionData })
    )
  );
};

const renderComponent1 = ({ data }) => (
  <SectionList
    sections={data}
    renderItem={({ item }) => (
      <TouchableHighlight onPress={() => goToSession("schedule", { data })}>
        <View style={styles.container}>
          <Text>{item.title}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </TouchableHighlight>
    )}
    renderSectionHeader={({ section }) => (
      <Text style={styles.dateTitle}>
        {moment.unix(section.title).format("LT")}
      </Text>
    )}
    keyExtractor={(item, index) => index}
  />
);

export default renderComponent1;
