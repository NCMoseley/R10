import { StyleSheet } from "react-native";

// Medium Grey: #999999
// Light Grey: #e6e6e6
// Blue: #8797D6
// Purple: #9963ea
// Red: #cf392a

export const styles = StyleSheet.create({
  mainContainer: {
    padding: 20
  },
  locationHeart: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  location: {
    color: "#999999",
    fontSize: 15,
    fontFamily: "Montserrat-Regular"
  },
  button: {
    alignSelf: "center",
    padding: 20
  },
  container: {
    marginTop: 15,
    marginBottom: 15
  },
  description: {
    paddingTop: 15,
    paddingBottom: 15
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#e6e6e6",
    fontFamily: "Montserrat-Light"
  },
  dateTitle: {
    paddingTop: 15,
    fontSize: 15,
    color: "#cf392a"
  },
  titlesCodeOfConduct: {
    paddingTop: 15,
    fontSize: 20,
    fontFamily: "Montserrat-Regular"
  },
  description: {
    paddingTop: 15,
    fontFamily: "Montserrat-Light"
  },
  presented: {
    paddingTop: 15,
    color: "#999999"
  },
  speaker: {
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  speakerBox: {
    padding: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: "#e6e6e6"
  },
  speakerName: {
    padding: 20
  },
  // image: {
  //   width: 200,
  //   height: 100,
  //   paddingTop: 15,
  //   paddingBottom: 15
  // },
  // imageContainer: {
  //   borderBottomColor: "grey",
  //   borderBottomWidth: 0.5,
  //   marginTop: 20,
  //   alignItems: "center",
  //   backgroundColor: '#999999',
  //   justifyContent: "center"
  // },
  loadinggif: {
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center"
  },
  fontMontLight: {
    fontFamily: "Montserrat-Light"
  }
});

// export default styles;
