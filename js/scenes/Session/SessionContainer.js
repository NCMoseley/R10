import React, { Component } from "react";
import PropTypes from "prop-types";
import Session from "./Session";
import { connect } from "react-redux";
import { Text, Image, View } from "react-native";
import { styles } from "./styles";
import { fetchSchedule } from "../../redux/modules/schedule";
import { fetchSpeaker } from "../../redux/modules/speaker";
import router from "../../navigation/routes";
import { formatDataObject } from "../../lib/helpers";

// import { ScrollView, View, Image, Text, ActivityIndicator } from "react-native";

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
      tintColor: "grey"
    }
  };

  componentDidMount() {
    // this.props.dispatch(fetchSchedule());
    // this.props.dispatch(fetchSpeaker(this.props.route.params.event.speaker));
    let speakerId = this.props.route.params.sessionData.item.speaker;
    // console.log(speakerId);
    fetch(
      `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`
    )
      .then(res => res.json())
      .then(name => {
        let thisName = formatDataObject(name);
        this.setState({ speaker: thisName });
      })

      .catch(err => console.log(err));
  }

  render() {
    const { loading, data } = this.props;

    // console.log(this.state.speaker);

    return loading ? (
      <View style={styles.loadinggif}>
        <Image source={require("../../assets/images/loading_blue.gif")} />
      </View>
    ) : (
      <Session
        event={this.props.route.params.sessionData}
        speaker={this.state.speaker}
        // data={this.props.route.params.sessionData}
        // name={this.state.speaker}
        // image={this.state.image}
      />
    );
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.speaker.loading,
  data: state.speaker.data
  // faves: state.faves.faves
});

SessionContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  // faves: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(SessionContainer);

// import React, { Component } from "react";
// import Session from "./Session";
// // import Loader from "../../components/Loader";
// // import HeaderGradient from "../../components/HeaderGradient";
// import PropTypes from "prop-types";
// import { View } from "react-native";
// import { connect } from "react-redux";
// import { fetchSpeaker } from "../../redux/modules/speaker";
// import { styles } from "./styles";
// import { typography } from "../../config/styles";

// class SessionContainer extends Component {
//   constructor(props) {
//     super(props);
//   }
//   static route = {
//     navigationBar: {
//       title: "Session",
//       tintColor: "black",
//       titleStyle: { fontFamily: typography.fontMain },
//       renderBackground: HeaderGradient
//     }
//   };
//   componentDidMount() {
//     this.props.dispatch(fetchSpeaker(this.props.route.params.event.speaker));
//   }
//   render() {
//     const { loading, data, faves } = this.props;
//     return loading ? (
//       <View style={styles.loader}>
//         <Loader />
//       </View>
//     ) : (
//       <Session
//         event={this.props.route.params.event}
//         speaker={data}
//         faves={faves}
//       />
//     );
//   }
// }

// const mapStateToProps = state => ({
//   // convert states into props to pass in react class
//   loading: state.speaker.loading,
//   data: state.speaker.data,
//   faves: state.faves.faves
// });

// SessionContainer.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   faves: PropTypes.array.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   route: PropTypes.object.isRequired
// };

// export default connect(mapStateToProps)(SessionContainer);
