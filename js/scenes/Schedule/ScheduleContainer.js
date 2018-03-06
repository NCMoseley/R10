import React, { Component } from "react";
import PropTypes from "prop-types";
import Schedule from "../Schedule/Schedule";
import { connect } from "react-redux";
import { Text, Image, View } from "react-native";
import { styles } from "./styles";
import { fetchSchedule } from "../../redux/modules/schedule";
import { fetchFaves } from "../../redux/modules/faves";
import { formatSessionData } from "../../lib/helpers";
import HeaderGradient from "../../components/gradients/headerGradient";
// import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";

class ScheduleContainer extends Component {
  constructor() {
    super();
  }
  static route = {
    navigationBar: {
      title: "Schedule",
      tintColor: "white",
      titleStyle: { fontFamily: "Montserrat-Regular" },
      renderBackground: HeaderGradient
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchFaves());
    this.props.dispatch(fetchSchedule());
  }

  render() {
    const { loading, data, faves } = this.props;
    const formattedData = formatSessionData(data);
    console.log(faves);

    return loading ? (
      <View style={styles.loadinggif}>
        <Image source={require("../../assets/images/loading_blue.gif")} />
      </View>
    ) : (
      <Schedule data={formattedData} faves={faves} />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.schedule.loading,
  data: state.schedule.data,
  faves: state.faves.faves
});

// ScheduleContainer.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   data: PropTypes.array.isRequired,
//   faves: PropTypes.array.isRequired,
//   dispatch: PropTypes.func.isRequired
// };

export default connect(mapStateToProps)(ScheduleContainer);
