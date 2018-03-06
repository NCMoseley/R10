import React, { Component } from "react";
import PropTypes from "prop-types";
import Speaker from "./Speaker";
import { connect } from "react-redux";
import { Text, Image, View } from "react-native";
import { styles } from "./styles";
import { fetchSchedule } from "../../redux/modules/schedule";
import speaker, { fetchSpeaker } from "../../redux/modules/speaker";
import router from "../../navigation/routes";
import { formatDataObject } from "../../lib/helpers";
import { formatSessionData } from "../../lib/helpers";

export default class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    console.log(this.props.route.params);

    return <Speaker speaker={this.props.route.params.speakerData} />;
  }
}

SpeakerContainer.propTypes = {
  route: PropTypes.object.isRequired
};
