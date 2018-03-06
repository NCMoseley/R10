import React, { Component } from "react";
import PropTypes from "prop-types";
import Schedule from "../Schedule/Schedule";
import { connect } from "react-redux";
import { Text, Image, View } from "react-native";
import { styles } from "./styles";
import { fetchSchedule } from "../../redux/modules/schedule";
import { formatSessionData } from "../../lib/helpers";

// import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";

class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: "Schedule",
      tintColor: "black"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSchedule());
  }

  render() {
    const { loading, data } = this.props;
    const formattedData = formatSessionData(data);
    // console.log(formattedData);

    return loading ? (
      <View style={styles.loadinggif}>
        <Image source={require("../../assets/images/loading_blue.gif")} />
      </View>
    ) : (
      <Schedule data={formattedData} />
    );
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.schedule.loading,
  data: state.schedule.data
});

export default connect(mapStateToProps)(ScheduleContainer);
