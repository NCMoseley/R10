import { StyleSheet } from "react-native";

// Medium Grey: #999999
// Light Grey: #e6e6e6
// Blue: #8797D6
// Purple: #9963ea
// Red: #cf392a

export const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1.5,
    borderBottomColor: "#e6e6e6"
  },
  locationHeart: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  location: {
    color: "#999999",
    fontSize: 15
  },
  title: {
    paddingLeft: 10,
    paddingBottom: 5,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Montserrat-Regular"
  },
  dateTitle: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 15,
    backgroundColor: "#e6e6e6",
    fontFamily: "Montserrat-Regular"
  },
  loadinggif: {
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center"
  }
});
