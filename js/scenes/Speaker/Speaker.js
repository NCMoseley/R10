import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import { removeSpeaker } from "../../lib/navigationHelpers";
import GradientButton from "../../components/gradients/gradientButton";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  Linking
} from "react-native";

import { styles } from "./styles";

const Speaker = ({ speaker }) => {
  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={styles.containerHeader}>
          <Icon
            active
            style={{
              padding: 20
            }}
            name="ios-close"
            color="white"
            size={40}
            onPress={() => removeSpeaker()}
          />
          <Text style={styles.about}>About the Speaker</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 75
              }}
              source={{ uri: speaker.image }}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>{speaker.name}</Text>
            <Text style={styles.bio}>{speaker.bio}</Text>
          </View>
          <View style={styles.button}>
            <TouchableHighlight
              underlayColor="white"
              onPress={() => Linking.openURL(`${speaker.url}`)}
            >
              <GradientButton
                marginTop={15}
                marginLeft={15}
                buttonText={"Read More on Wikipedia"}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired
};

export default Speaker;
