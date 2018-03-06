import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

// This is Lindseys button

const GradientButton = ({ buttonText, marginTop, marginLeft, fontSize }) => (
  <LinearGradient
    start={{ y: 0.0, x: 1.0 }}
    end={{ y: 1.0, x: 0.0 }}
    colors={["#9963ea", "#8797D6"]}
    style={styles.gradientButton}
  >
    <Text
      style={[
        styles.buttonText,
        {
          marginLeft: marginLeft,
          marginTop: marginTop,
          fontSize: fontSize
        }
      ]}
    >
      {buttonText}
    </Text>
  </LinearGradient>
);

GradientButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  marginTop: PropTypes.number,
  marginLeft: PropTypes.number,
  fontSize: PropTypes.number
};
export default GradientButton;
