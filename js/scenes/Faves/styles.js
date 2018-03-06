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
    fontSize: 15,
    padding: 10,
    marginLeft: 5,
    color: "black",
    fontFamily: "Montserrat-Light",
    fontWeight: "bold"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#e6e6e6",
    fontFamily: "Montserrat-Light"
  },
  dateTitle: {
    // fontSize: 20,
    fontWeight: "bold",
    // fontStyle: "italic",
    padding: 5,
    paddingLeft: 10,
    backgroundColor: "#e6e6e6"
  },
  description: {
    // display: "flex",
    // justifyContent: "space-between",
    paddingBottom: 10,
    marginLeft: 15,
    color: "#999999",
    fontFamily: "Montserrat-Light"
    // fontWeight: "bold"
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
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
  icon: {
    // position: "absolute",
    paddingRight: 20
    // width: 50,
    // height: 50
  },
  fontMontLight: {
    fontFamily: "Montserrat-Light"
  }
});

// export default styles;
