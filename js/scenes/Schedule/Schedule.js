import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderComponent1 from '../../components/render/renderComponent1';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
  SectionList,
} from 'react-native';

import { styles } from './styles';

_goToSession = () => {
  this.props.navigator.push(Router.getRoute('Session'));
};

const Schedule = ({ data }) => (
  <View style={styles.mainContainer}>
    <Text onPress={this._goToSession}>
      <RenderComponent1 data={data} />
    </Text>
  </View>
);
export default Schedule;
