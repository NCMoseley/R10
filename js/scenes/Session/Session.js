import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createFave, deleteFave } from "../../config/model";
import { toggleFave } from "../../redux/modules/faves";
import GradientButton from "../../components/gradients/gradientButton";
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
  TouchableOpacity
} from "react-native";
import { goToSpeaker } from "../../lib/navigationHelpers";
import { styles } from "./styles";

class Session extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { event, speaker, faves, toggleFave } = this.props;
    return (
      <View style={styles.mainContainer}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.titlesCodeOfConduct}>{event.item.title}</Text>
        <Text>{moment.unix(event.item.start_time).format("LT")}</Text>
        <Text style={styles.description}>{event.item.description}</Text>

        {/* {speaker && (NOTE */}
        <View>
          <Text>Presented by: </Text>
          <TouchableOpacity onPress={() => goToSpeaker(speaker)}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25
              }}
              source={{ uri: speaker.image }}
            />
            <Text>{speaker.name}</Text>
          </TouchableOpacity>
        </View>
        {/* )} */}

        <TouchableOpacity
          onPress={() =>
            toggleFave(
              event.item.session_id,
              !Object.keys(faves).includes(event.item.session_id)
            )
          }
        >
          <Text marginTop={15} marginLeft={50} fontSize={15}>
            {!!Object.keys(faves).includes(event.item.session_id)
              ? "Remove Fave"
              : "Add Fave"}
          </Text>
          {/* <GradientButton NOTE
            marginTop={15}
            marginLeft={50}
            fontSize={15}
            buttonText={
              !!Object.keys(faves).includes(event.item.session_id)
                ? "Remove Fave"
                : "Add Fave"
            }
          /> */}
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  faves: state.faves.faves
});

const mapDispatchToProps = dispatch => ({
  toggleFave: (session_id, onOrOff) => {
    dispatch(toggleFave(session_id, onOrOff));
  }
});

Session.propTypes = {
  faves: PropTypes.object.isRequired,
  toggleFave: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
  // speaker: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default connect(mapStateToProps, mapDispatchToProps)(Session);
