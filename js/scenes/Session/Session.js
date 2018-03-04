import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import RenderComponent1 from "../../components/render/renderComponent1";
import { createFave, deleteFave } from "../../config/model";
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
  TouchableOpacity
} from "react-native";
import { goToSpeaker } from "../../lib/navigationHelpers";
import { styles } from "./styles";

const Session = ({ event, speaker }) => (
  <View style={styles.mainContainer}>
    <Text style={styles.description}>
      {(event.item.description, console.log(event.item.description))}
    </Text>
    <Text style={styles.titlesCodeOfConduct}>{event.item.title}</Text>
    <Text>{moment.unix(event.item.start_time).format("LT")}</Text>
    <Text style={styles.description}>{event.item.description}</Text>
    <Text>Presented by: </Text>

    <Image
      style={{
        width: 50,
        height: 50,
        borderRadius: 50
      }}
      source={{ uri: speaker.image }}
    />
    {/* <TouchableOpacity onPress={() => goToSpeaker(bio)}> */}
    <TouchableOpacity onPress={() => goToSpeaker(speaker)}>
      {/* <Image
          source={{ uri: speaker.image }}
          style={{ height: 100, width: 100, borderRadius: 50 }}
        /> */}
      <Text>{speaker.name}</Text>
    </TouchableOpacity>
    {/* <TouchableHighlight onPress={() => goToSpeaker(console.log(bio))}>
      <Text>{name}</Text>
    </TouchableHighlight> */}
  </View>
  // <Text> HI </Text>
);

Session.propTypes = {
  // faves: PropTypes.array.isRequired,
  // toggleFave: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
  // speaker: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Session;
