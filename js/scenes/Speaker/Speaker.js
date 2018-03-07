import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import { removeSpeaker } from "../../lib/navigationHelpers";
import GradientButton from "../../components/gradients/gradientButton";
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
  TouchableHighlight,
  Linking
} from "react-native";

import { styles } from "./styles";

const Speaker = ({ speaker }) => {
  return (
    <View style={styles.background}>
      <View style={styles.containerHeader}>
        <Icon
          active
          style={{ padding: 20 }}
          name="ios-close"
          color="white"
          size={40}
          onPress={() => removeSpeaker()}
        />
        <Text style={{ color: "white" }}>About the Speaker</Text>
      </View>

      <ScrollView style={styles.mainContainer}>
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
        <TouchableHighlight onPress={() => Linking.openURL(`${speaker.url}`)}>
          <GradientButton
            marginTop={15}
            marginLeft={15}
            buttonText={"Read More on Wikipedia"}
          />
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired
};

export default Speaker;
