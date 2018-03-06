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

import { styles } from "./styles";

const Speaker = ({ speaker }) => {
  return (
    <View style={styles.backgroud}>
      <ScrollView style={styles.mainContainer}>
        <TouchableHighlight onPress={() => removeSpeaker()}>
          <Icon active name="ios-close" color="black" size={40} />
        </TouchableHighlight>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 75
            }}
            source={{ uri: speaker.image }}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>{speaker.name}</Text>
          <Text>{speaker.bio}</Text>
        </View>
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL(speaker.url)}
        >
          Read More on Wikipedia
        </Text>
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired
};

export default Speaker;
