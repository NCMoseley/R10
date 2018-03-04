import React from "react";
import moment from "moment";
import propTypes from "prop-types";
import { Text, View, SectionList, TouchableOpacity } from "react-native";
import { goToSession } from "../../lib/navigationHelpers";

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
            <TouchableOpacity onPress={() => goToSession("Faves", theseFaves)}>
              <Text>{fave.title}</Text>
            </TouchableOpacity>
            <Text>{moment.unix(fave.start_time).format("LT")}</Text>
            <Text>{fave.location}</Text>
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
