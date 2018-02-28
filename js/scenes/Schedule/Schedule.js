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

const Schedule = ({ data }) => (
  <View style={styles.mainContainer}>
    <RenderComponent1 data={data} />
  </View>
);
export default Schedule;
