import { StyleSheet } from "react-native";

// Medium Grey: #999999
// Light Grey: #e6e6e6
// Blue: #8797D6
// Purple: #9963ea
// Red: #cf392a

export const styles = StyleSheet.create({
  mainContainer: {
    // marginTop: 25,
    paddingRight: 20,
    paddingLeft: 20
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    // backgroundColor: "#e6e6e6",
    fontFamily: "Montserrat-Regular"
  },
  dateTitle: {
    fontSize: 24,
    fontWeight: "bold"
    // backgroundColor: "lightgrey"
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
    height: 100
  },
  imageContainer: {
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1.5,
    marginTop: 10,
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
