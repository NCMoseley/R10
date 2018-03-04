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
    // return <Speaker />;
    return <Speaker speaker={this.props.route.params.speakerData} />;
  }
}

SpeakerContainer.propTypes = {
  route: PropTypes.object.isRequired
};

// class SpeakerContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       speaker: ""
//     };
//   }
//   static route = {
//     navigationBar: {
//       title: "Speaker",
//       tintColor: "grey"
//     }
//   };

//   componentDidMount() {
//     this.props.dispatch(fetchSpeaker());
//     const speaker = this.props.route.params;
//     // console.log(speaker);
//     //   let speaker = formatSessionData(res);
//     //   console.log(res);
//     //   this.setState({
//     //     speaker: speaker.name
//     //     // image: speaker.image,
//     //     // bio: speaker.bio,
//     //     // url: speaker.url
//   }

//   render() {
//     const { loading, data } = this.props;
//     // console.log("bla bla bla");
//     // console.log(data);
//     // console.log(this.state.speaker);

//     return loading ? (
//       <View style={styles.loadinggif}>
//         <Image source={require("../../assets/images/loading_blue.gif")} />
//       </View>
//     ) : (
//       <Speaker data={(data.bio, console.log())} />
//     );
//   }
// }

// const mapStateToProps = state => ({
//   // convert states into props to pass in react class
//   loading: state.speaker.loading,
//   data: state.speaker.data
// });

// export default connect(mapStateToProps)(SpeakerContainer);
