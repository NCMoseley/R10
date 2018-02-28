import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RenderComponent1 from "../../components/render/renderComponent1";
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

const Schedule = ({ data }) => (
  <View style={styles.mainContainer}>
    {/* <RenderComponent1 data={data} /> */}
    <SectionList
      sections={data}
      renderItem={({ item }) => (
        <TouchableHighlight onPress={() => goToSession("Schedule", { data })}>
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
  </View>
);
export default Schedule;
