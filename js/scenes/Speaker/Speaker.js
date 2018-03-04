import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import RenderComponent1 from "../../components/render/renderComponent1";
import Icon from "react-native-vector-icons/Ionicons";
import { removeSpeaker } from "../../lib/navigationHelpers";
import moment from "moment";
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
// import goToSpeaker from "../../lib/navigationHelpers";

import { styles } from "./styles";

const Speaker = ({ speaker }) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <TouchableHighlight onPress={() => removeSpeaker()}>
        <Icon active name="ios-close" color="black" size={40} />
      </TouchableHighlight>
      <View style={styles.container}>
        <Text style={styles.title}>{speaker.name}</Text>
        <Text>Made It</Text>
        <Text>{speaker.bio}</Text>
      </View>
      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL(speaker.url)}
      >
        Read More on Wikipedia
      </Text>
    </ScrollView>
  );
  console.log("kkkk");
};

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired
};

export default Speaker;
