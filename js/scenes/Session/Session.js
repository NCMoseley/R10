import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleFave } from "../../redux/modules/faves";
import GradientButton from "../../components/gradients/gradientButton";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { goToSpeaker } from "../../lib/navigationHelpers";
import { styles } from "./styles";

class Session extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { event, speaker, faves, toggleFave } = this.props;
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.locationHeart}>
          <Text style={styles.location}>{event.item.location}</Text>
          {Object.keys(faves).includes(event.item.session_id) ? (
            <Icon
              onPress={() =>
                toggleFave(
                  event.item.session_id,
                  !Object.keys(faves).includes(event.item.session_id)
                )
              }
              name="ios-heart"
              color="red"
              size={20}
            />
          ) : (
            <Icon
              onPress={() =>
                toggleFave(
                  event.item.session_id,
                  !Object.keys(faves).includes(event.item.session_id)
                )
              }
              name="ios-heart"
              color="grey"
              size={20}
            />
          )}
        </View>
        <Text style={styles.titlesCodeOfConduct}>{event.item.title}</Text>
        <Text style={styles.dateTitle}>
          {moment.unix(event.item.start_time).format("LT")}
        </Text>
        <Text style={styles.description}>{event.item.description}</Text>
        {speaker ? (
          <View style={styles.speakerBox}>
            <Text style={styles.presented}>Presented by:</Text>
            <TouchableOpacity onPress={() => goToSpeaker(speaker)}>
              <View style={styles.speaker}>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                  source={{ uri: speaker.image }}
                />
                <Text style={styles.speakerName}>{speaker.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            toggleFave(
              event.item.session_id,
              !Object.keys(faves).includes(event.item.session_id)
            )
          }
        >
          <GradientButton
            marginTop={15}
            marginLeft={50}
            fontSize={15}
            buttonText={
              Object.keys(faves).includes(event.item.session_id)
                ? "Remove Favorites"
                : "Add Favorites"
            }
          />
        </TouchableOpacity>
      </ScrollView>
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
  event: PropTypes.object.isRequired,
  speaker: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default connect(mapStateToProps, mapDispatchToProps)(Session);
