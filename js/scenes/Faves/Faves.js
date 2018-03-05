import React from "react";
import moment from "moment";
import propTypes from "prop-types";
import { Text, View, SectionList, TouchableOpacity } from "react-native";
import { goToSession } from "../../lib/navigationHelpers";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { toggleFave } from "../../redux/modules/faves";

const Faves = ({ faves, data }) => {
  // console.log(faves);
  // console.log(data);

  const theseFaves = data.filter(
    session => faves[session.session_id] === "true"
  );
  // console.log(theseFaves.map(fave => fave.location));

  return (
    <View>
      {theseFaves.map((fave, index) => {
        // console.log(data);
        // console.log(theseFaves);
        return (
          <View key={index}>
            <Text style={styles.dateTitle}>
              {moment.unix(fave.start_time).format("LT")}
            </Text>
            <TouchableOpacity onPress={() => goToSession("Faves", theseFaves)}>
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
                onPress={() =>
                  toggleFave(
                    event.item.session_id,
                    !faves[event.item.session_id]
                  )
                }
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
};

export default Faves;
