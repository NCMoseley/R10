/* global require */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Session from "./Session";
import { connect } from "react-redux";
import { Image, View } from "react-native";
import { styles } from "./styles";
import { formatDataObject } from "../../lib/helpers";
import { fetchFaves } from "../../redux/modules/faves";
import HeaderGradient from "../../components/gradients/headerGradient";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speaker: ""
    };
  }
  static route = {
    navigationBar: {
      title: "Session",
      tintColor: "white",
      titleStyle: { fontFamily: "Montserrat-Regular" },
      renderBackground: HeaderGradient
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchFaves());
    let speakerId = this.props.route.params.sessionData.item.speaker;

    fetch(
      `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`
    )
      .then(res => res.json())
      .then(name => {
        let thisName = formatDataObject(name);
        this.setState({ speaker: thisName });
      })
      .catch(err => err);
  }

  render() {
    const { loading } = this.props;

    return loading ? (
      <View style={styles.loadinggif}>
        <Image source={require("../../assets/images/loading_blue.gif")} />
      </View>
    ) : (
      <Session
        event={this.props.route.params.sessionData}
        speaker={this.state.speaker}
        faves={this.props.faves}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.speaker.loading,
  data: state.speaker.data,
  faves: state.faves.faves
});

SessionContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  faves: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(SessionContainer);
