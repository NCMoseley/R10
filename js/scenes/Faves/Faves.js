import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import propTypes from "prop-types";
import {
  Text,
  View,
  SectionList,
  TouchableOpacity,
  Image,
  Alert,
  Platform
} from "react-native";
import { goToSpeaker } from "../../lib/navigationHelpers";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { toggleFave } from "../../redux/modules/faves";

class Faves extends React.Component {
  render() {
    const { faves, data } = this.props;
    const theseFaves = data.filter(
      session => faves[session.session_id] === "true"
    );

    return (
      <View>
        {theseFaves.map((fave, index) => {
          return (
            <View key={index}>
              <Text style={styles.dateTitle}>
                {moment.unix(fave.start_time).format("LT")}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert("You you just had to click it.......");
                }}
              >
                <Text style={styles.titleDescription}>{fave.title}</Text>
              </TouchableOpacity>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{fave.location}</Text>
                <Icon
                  raised
                  size={15}
                  style={styles.icon}
                  name="ios-heart"
                  type="ionicon"
                  color="#f50"
                  onPress={() => {
                    this.props.toggleFave(fave.session_id, false);
                  }}
                />
              </View>
            </View>
          );
        })}
      </View>
      // <SectionList
      //   stickySectionHeadersEnabled={false}
      //   sections={data}
      //   renderItem={({ item }) => (
      //     <View>
      //       <TouchableOpacity onPress={() => goToSession(item)}>
      //         <Text>{item.title}</Text>
      //       </TouchableOpacity>
      //       <View>
      //         <Text>{item.location}</Text>
      //         <Text>{}</Text>
      //         {faves.includes(item.session_id) && <FaveIcon />}
      //       </View>
      //     </View>
      //   )}
      //   renderSectionHeader={({ section }) => (
      //     <Text style={styles.timeText}>
      //       {moment.unix(section.title).format("LT")}
      //     </Text>
      //   )}
      //   keyExtractor={(item, index) => index}
      // />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleFave: (session_id, onOrOff) => {
    dispatch(toggleFave(session_id, onOrOff));
  }
});

export default connect(null, mapDispatchToProps)(Faves);
