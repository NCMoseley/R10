import React, { Component } from 'react';
import PropTypes from 'prop-types';
import About from '../About/About';
import { connect } from 'react-redux';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';
import { fetchCodeOfConduct } from '../../redux/modules/about';

class AboutContainer extends Component {
  static route = {
    navigationBar: {
      title: 'About',
    },
  };

  componentDidMount() {
    this.props.dispatch(fetchCodeOfConduct());
  }

  render() {
    const { loading, data } = this.props;
    if (loading) {
      return (
        <View style={styles.loadinggif}>
          <Image source={require('../../assets/images/loading_blue.gif')} />
        </View>
      );
    }
    console.log(data);
    return <About data={data} />;
  }
}

const mapStateToProps = state => ({
  // convert states into props to pass in react class
  loading: state.about.loading,
  data: state.about.data,
});

export default connect(mapStateToProps)(AboutContainer);
