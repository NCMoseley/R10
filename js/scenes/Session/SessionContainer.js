import React, {
  Component
} from "react";
import PropTypes from "prop-types";
import Session from "./Session";
import {
  connect
} from "react-redux";
import {
  Text,
  Image,
  View
} from "react-native";
import {
  styles
} from "./styles";
import {
  fetchSchedule
} from "../../redux/modules/schedule";
import router from "../../navigation/routes";
import {
  formatDataObject
} from "../../lib/helpers";
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
      title: "Session"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSchedule());
    const speakerId = this.props.route.params.sessionData.item.speaker;
    fetch(
        `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`
      )
      .then(res => res.json())
      .then(res => {
        let thisSpeaker = formatDataObject(res);
        this.setState({
          speaker: thisSpeaker.name,
          image: thisSpeaker.image
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      loading,
      data
    } = this.props;
    // console.log(data);
    // console.log(this.state.speaker);

    return loading ? ( <
      View style = {
        styles.loadinggif
      } >
      <
      Image source = {
        require("../../assets/images/loading_blue.gif")
      }
      /> <
      /View>



    ) : (



      <
      Session data = {
        this.props.route.params.sessionData
      }
      name = {
        this.state.speaker
      }
      image = {
        this.state.image
      }
      />
    );
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.schedule.loading,
  data: state.schedule.data
});

export default connect(mapStateToProps)(SessionContainer);