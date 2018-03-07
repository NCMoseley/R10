import { StyleSheet } from "react-native";

// Medium Grey: #999999
// Light Grey: #e6e6e6
// Blue: #8797D6
// Purple: #9963ea
// Red: #cf392a

export const styles = StyleSheet.create({
  mainContainer: {
    padding: 8,
    backgroundColor: "white",
    height: 1000,
    borderRadius: 6
  },
  button: {
    alignSelf: "center",
    padding: 20
  },
  containerHeader: {
    paddingTop: 95,
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  about: {
    paddingLeft: 60,
    paddingRight: 60,
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center"
  },
  container: {
    marginTop: 15,
    marginBottom: 15
  },
  titleDescription: {
    marginTop: 15,
    marginBottom: 15,
    justifyContent: "center"
  },
  background: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: 1000,
    padding: 8,
    paddingTop: 20
  },
  title: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Montserrat-Light",
    paddingBottom: 20
  },
  dateTitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    backgroundColor: "lightgrey"
  },
  bio: {
    fontSize: 17,
    lineHeight: 24,
    fontFamily: "Montserrat-Light",
    paddingLeft: 10,
    paddingRight: 10
  },
  imageContainer: {
    marginTop: 20,
    alignItems: "center"
  },
  loadinggif: {
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center"
  }
});
