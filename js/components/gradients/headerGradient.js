import React from "react";
import LinearGradient from "react-native-linear-gradient";

// This is Lindseys Gradient

const HeaderGradient = () => (
  <LinearGradient
    start={{ y: 0.0, x: 1.0 }}
    end={{ y: 1.0, x: 0.0 }}
    colors={["#9963ea", "#cf392a"]}
    style={{ flex: 1 }}
  />
);

export default HeaderGradient;
