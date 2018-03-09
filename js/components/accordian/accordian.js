import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  Platform,
  UIManager,
  View
} from "react-native";
import { styles } from "./styles";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      rotate: new Animated.Value(0)
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this._onPress = this._onPress.bind(this);
  }
  _onPress() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ opened: !this.state.opened });
    !this.state.opened
      ? Animated.timing(this.state.rotate, {
          toValue: 1,
          duration: 500
        }).start()
      : Animated.timing(this.state.rotate, {
          toValue: 0,
          duration: 500
        }).start();
  }
  render() {
    const { title, description } = this.props;
    return (
      <View>
        <Animated.View
          style={[
            {
              transform: [
                {
                  rotate: this.state.rotate.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["121deg", "270deg"]
                  })
                }
              ]
            },
            styles.vertBar
          ]}
        />
        <Animated.View
          style={[
            {
              transform: [
                {
                  rotate: this.state.rotate.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["-31deg", "180deg"]
                  })
                }
              ]
            },
            styles.horiBar
          ]}
        />

        <TouchableOpacity onPress={this._onPress}>
          <Animated.Text style={styles.contentHeader}>
            {!this.state.opened && <Text>{title}</Text>}
            {this.state.opened && (
              <Text style={styles.paragraphText}>{description}</Text>
            )}
          </Animated.Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Accordian.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
export default Accordian;
