import React, { Component } from "react";
import PropTypes from "prop-types";
// import Schedule from '../Schedule/Schedule';
import Session from "./Session";
import { connect } from "react-redux";
import { Text, Image, View } from "react-native";
import { styles } from "./styles";
// import { fetchSchedule } from "../../redux/modules/schedule";
import router from "../../navigation/routes";
// import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";
class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: "Session"
    }
  };

  render() {
    const { loading, data } = this.props;
    console.log(data);

    return loading ? (
      <View style={styles.loadinggif}>
        <Image source={require("../../assets/images/loading_blue.gif")} />
      </View>
    ) : (
      <Session data={data} />
    );
  }
}

export default SessionContainer;
