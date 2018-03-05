import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import RenderComponent1 from "../../components/render/renderComponent1";
import { createFave, deleteFave } from "../../config/model";
import { toggleFave } from "../../redux/modules/faves";
import moment from "moment";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
  SectionList,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from "react-native";
import { goToSpeaker } from "../../lib/navigationHelpers";
import { styles } from "./styles";

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToFave: true,
      removeFromFave: false
    };

    this.renderAddToFave = this.renderAddToFave.bind(this);
    this.renderRemoveFave = this.renderRemoveFave.bind(this);
  }

  renderAddToFave() {
    createFave(this.props.event.item.session_id);
    // console.log(this.props.event.item.session_id);
    this.setState({
      addToFave: !this.state.addToFave
      // removeFromFave: !this.state.addToFave
    });
  }

  renderRemoveFave() {
    deleteFave(this.props.event.item.session_id);
    this.setState({
      removeFromFave: !this.state.removeFromFave
    });
  }

  render() {
    const { event, speaker, faves, toggleFave } = this.props;
    // console.log(this.props.event.item.session_id);
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.titlesCodeOfConduct}>{event.item.title}</Text>
        <Text>{moment.unix(event.item.start_time).format("LT")}</Text>
        <Text style={styles.description}>{event.item.description}</Text>
        <Text>Presented by: </Text>
        <TouchableOpacity onPress={() => goToSpeaker(speaker)}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 50
            }}
            source={{ uri: speaker.image }}
          />

          <Text>{speaker.name}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            toggleFave(event.item.session_id, !faves[event.item.session_id])
          }
        >
          <Text marginTop={15} marginLeft={50} fontSize={15}>
            {faves[event.item.session_id] ? "Remove Fave" : "Add Fave"}
          </Text>
        </TouchableOpacity>

        {/* {faves[speaker.session] === undefined && (
          <TouchableOpacity onPress={this.renderAddToFave}>
            <Text>Add To Faves</Text>
          </TouchableOpacity>
        )}
        {faves[speaker.session] && (
          <TouchableOpacity onPress={this.renderRemoveFave}>
            <Text>Remove From Faves</Text>
          </TouchableOpacity>
        )} */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  faves: state.faves.faves
});

const mapDispatchToProps = dispatch => ({
  toggleFave: (session_id, onOrOff) => {
    dispatch(toggleFave(session_id, onOrOff));
  }
});

// Session.propTypes = {
//   faves: PropTypes.array.isRequired,
//   toggleFave: PropTypes.func.isRequired,
//   event: PropTypes.object.isRequired,
//   speaker: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
// };

// export default connect(mapDispatchToProps)(Session);
export default connect(mapStateToProps, mapDispatchToProps)(Session);
