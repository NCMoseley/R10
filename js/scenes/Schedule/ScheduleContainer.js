import React, { Component } from "react";
import PropTypes from "prop-types";
import Schedule from "../Schedule/Schedule";
import { connect } from "react-redux";
import { Text, Image, View } from "react-native";
import { styles } from "./styles";
import { fetchSchedule } from "../../redux/modules/schedule";

// import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";
class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSchedule());
  }

  render() {
    const { loading, data } = this.props;
    console.log(data);

    return loading ? (
      <View style={styles.loadinggif}>
        <Image source={require("../../assets/images/loading_blue.gif")} />
      </View>
    ) : (
      <Schedule data={data} />
    );
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.schedule.loading,
  data: state.schedule.data
});

export default connect(mapStateToProps)(ScheduleContainer);

// class ScheduleContainer extends Component {
//   static route = {
//     navigationBar: {
//       title: 'Schedule',
//     },
//   };
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//       isLoading: true,
//     };
//   }

//   componentDidMount() {
//     fetch('https://r10app-95fea.firebaseio.com/cXXXde_of_conduct.json')
//       .then(res => res.json())
//       .then(data => this.setState({ data }))
//       .catch(err => console.log(`Error fetching AboutContainer rest endpoint: ${err}`));
//   }
//   componentDidUpdate() {
//     if (this.state.isLoading) {
//       this.setState({ isLoading: false });
//     }
//   }

//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View style={styles.loadinggif}>
//           <Image source={require('../../assets/images/loading_blue.gif')} />
//         </View>
//       );
//     }
//     // console.log(this.state.data);
//     return <Schedule data={this.state.data} />;
//   }
// }
// export default ScheduleContainer;
