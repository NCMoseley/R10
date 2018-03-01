import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RenderComponent1 from "../../components/render/renderComponent1";
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
  SectionList
} from "react-native";
import {
  styles
} from "./styles";

// componentDidMount() {
//     this.props.dispatch(fetchSpeaker(speakerid));
// }

const Session = ({ data, name, image }) => (
  <View style={styles.mainContainer} >
    <Text style={styles.description} > {data.item.location} </Text> <Text style={styles.titlesCodeOfConduct} > {data.item.title} </Text> <Text > {moment.unix(data.item.start_time).format("LT")} </Text> <Text style={styles.description} > {data.item.description} </Text> <Text> Presented by: </Text> <Image style={{
      width: 50,
      height: 50,
      borderRadius: 50
    }} source={{ uri: image }
    }
    />
    <Text> {name} </Text>
  </View>
);

export default Session;