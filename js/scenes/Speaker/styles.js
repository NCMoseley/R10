import { StyleSheet } from "react-native";

// Medium Grey: #999999
// Light Grey: #e6e6e6
// Blue: #8797D6
// Purple: #9963ea
// Red: #cf392a

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 25,
    // justifyContent: "center",
    // alignItems: "center",
    // paddingRight: 20,
    // paddingLeft: 20,
    padding: 8,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 6
  },
  containerHeader: {
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
    // paddingTop: 20,
    // paddingBottom: 10
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
    fontSize: 30,
    fontWeight: "bold",
    // backgroundColor: "#e6e6e6",
    fontFamily: "Montserrat-Light"
  },
  dateTitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    backgroundColor: "lightgrey"
  },
  titlesCodeOfConduct: {
    fontSize: 20,
    color: "#8797D6",
    // backgroundColor: 'lightblue',
    fontFamily: "Montserrat-Regular"
  },
  description: {
    color: "black",
    fontFamily: "Montserrat-Light"
  },
  image: {
    width: 200,
    height: 100,
    marginTop: 10
  },
  imageContainer: {
    // borderBottomColor: "grey",
    // borderBottomWidth: 0.5,
    marginTop: 20,
    alignItems: "center",
    // backgroundColor: '#999999',
    justifyContent: "center"
  },
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
