import React, { Component } from "react";
import PropTypes from "prop-types";
import About from "../About/About";
import { connect } from "react-redux";
import { View, Image, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { fetchCodeOfConduct } from "../../redux/modules/about";
import HeaderGradient from "../../components/gradients/headerGradient";
import Accordian from "../../components/accordian/accordian";

// Thank you Lindsey for below

class AboutContainer extends Component {
  constructor() {
    super();
  }
  static route = {
    navigationBar: {
      title: "About",
      tintColor: "white",
      titleStyle: { fontFamily: "Montserrat-Regular" },
      renderBackground: HeaderGradient
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchCodeOfConduct());
  }

  render() {
    const { loading, data } = this.props;

    return loading ? (
      <View style={styles.loadinggif}>
        <Image source={require("../../assets/images/loading_blue.gif")} />
      </View>
    ) : (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="center"
            source={require("../../assets/images/r10_logo.png")}
          />
        </View>
        <View>
          <Text style={styles.titleDescription}>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.dateTitle}>Date & Venue</Text>
        </View>
        <View style={styles.container}>
          <Text>
            Don't miss the R10 conference that will take place on June 27, 2018
            in Vancouver, BC.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Code of Conduct</Text>
        </View>
        {data.map((text, i) => {
          return (
            <Accordian
              key={i}
              title={text.title}
              description={text.description}
            />
          );
        })}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.about.loading,
  data: state.about.data
});

AboutContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

AboutContainer.defaultProps = {
  loading: true,
  data: {},
  dispatch: null
};

export default connect(mapStateToProps)(AboutContainer);

// class AboutContainer extends Component {
//   static route = {
//     navigationBar: {
//       title: "About",
//       tintColor: "white",
//       titleStyle: { fontFamily: "Montserrat-Regular" },
//       renderBackground: HeaderGradient
//     }
//   };

//   componentDidMount() {
//     this.props.dispatch(fetchCodeOfConduct());
//   }

//   render() {
//     const { loading, data } = this.props;
//     if (loading) {
//       return (
//         <View style={styles.loadinggif}>
//           <Image source={require("../../assets/images/loading_blue.gif")} />
//         </View>
//       );
//     }
//     // console.log(data);
//     return <About data={data} />;
//   }
// }

// const mapStateToProps = state => ({
//   // convert states into props to pass in react class
//   loading: state.about.loading,
//   data: state.about.data
// });

// export default connect(mapStateToProps)(AboutContainer);
