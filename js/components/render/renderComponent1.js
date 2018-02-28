import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
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

const renderComponent1 = ({ data }) => (
  <SectionList
    sections={data}
    renderItem={({ item }) => (
      <View style={styles.container}>
        <Text>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    )}
    renderSectionHeader={({ section }) => (
      <Text style={styles.dateTitle}>{moment.unix(section.title).format('LT')}</Text>
    )}
    keyExtractor={(item, index) => index}
  />
);

export default renderComponent1;
