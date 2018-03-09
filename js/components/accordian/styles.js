import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  paragraphText: { margin: 5, fontFamily: "Montserrat-Light" },

  contentHeader: {
    marginTop: 10,
    marginBottom: 10,
    color: "#9963ea",
    fontSize: 16,
    fontFamily: "Montserrat-Regular"
  },
  horiBar: {
    width: 9,
    height: 1,
    position: "relative",
    top: 5,
    backgroundColor: "#9963ea"
  },
  vertBar: {
    width: 1,
    height: 9,
    position: "relative",
    left: 4,
    top: 4,
    backgroundColor: "#9963ea"
  }
});
