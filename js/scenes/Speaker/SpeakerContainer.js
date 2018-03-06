import React, { Component } from "react";
import PropTypes from "prop-types";
import Speaker from "./Speaker";
import { connect } from "react-redux";
import speaker, { fetchSpeaker } from "../../redux/modules/speaker";

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
    return <Speaker speaker={this.props.route.params.speakerData} />;
  }
}

SpeakerContainer.propTypes = {
  route: PropTypes.object.isRequired
};
