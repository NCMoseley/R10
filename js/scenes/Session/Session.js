import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RenderComponent1 from "../../components/render/renderComponent1";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
  SectionList
} from "react-native";
import { styles } from "./styles";

const Session = ({ data }) => (
  <View style={styles.mainContainer}>
    {/* <RenderComponent1 data={data} /> */}
    <Text>{item.title}</Text>
  </View>
);
export default Session;
