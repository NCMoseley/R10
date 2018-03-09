import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import { goToSession } from "../../lib/navigationHelpers";
import { Text, View, SectionList, TouchableHighlight } from "react-native";
import { styles } from "./styles";

const Schedule = ({ data, faves }) => (
  <View>
    <SectionList
      sections={data}
      renderItem={({ item }) => (
        <TouchableHighlight onPress={() => goToSession("Schedule", { item })}>
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.locationHeart}>
              <Text style={styles.location}>{item.location}</Text>
              {!!Object.keys(faves).includes(item.session_id) && (
                <Icon
                  raised
                  size={15}
                  style={styles.icon}
                  name="ios-heart"
                  type="ionicon"
                  color="#f50"
                />
              )}
            </View>
          </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.dateTitle}>
          {moment.unix(section.title).format("LT")}
        </Text>
      )}
      keyExtractor={(item, index) => index}
    />
  </View>
);

Schedule.propTypes = {
  data: PropTypes.array.isRequired,
  faves: PropTypes.object.isRequired
};

export default Schedule;
