import React, { Component } from "react";
import { connect } from "react-redux";
// import realm, { queryFaves } from "../../config/model";
import { fetchFaves } from "../../redux/modules/faves";
import { popScene } from "../../lib/navigationHelpers";
import { formatSessionData } from "../../lib/helpers";

import Faves from "./Faves";

class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Faves"
    }
  };

  componentDidMount() {
    popScene();
    this.props.dispatch(fetchFaves(this.props.data));
  }

  render() {
    // console.log(this.props.faves);
    // console.log(this.props.data);
    return <Faves faves={this.props.faves} data={this.props.data} />;
  }
}

const mapStateToProps = state => ({
  faves: state.faves.faves,
  // sessionData: state.schedule.sessionData
  data: state.schedule.data
});

export default connect(mapStateToProps)(FavesContainer);
