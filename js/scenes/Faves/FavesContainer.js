import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import About from '../About/About';
import Faves from '../Faves/Faves';
import { AppRegistry, ActivityIndicator, Text, Image, View } from 'react-native';
// import Load from "react-native-loading-gif";
import { styles } from './styles';

class FavesContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Faves',
    },
  };
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('https://r10app-95fea.firebaseio.com/cXXXode_of_conduct.json')
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log(`Error fetching AboutContainer rest endpoint: ${err}`));
  }
  componentDidUpdate() {
    if (this.state.isLoading) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loadinggif}>
          <Image source={require('../../assets/images/loading_blue.gif')} />
        </View>
      );
    }
    console.log(this.state.data);
    return <Faves data={this.state.data} />;
  }
}
export default FavesContainer;
