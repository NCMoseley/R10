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
  <ScrollView>
    <SectionList
      sections={data}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.location}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.dateTitles}>{moment(section.title).format('LT')}</Text>
      )}
      keyExtractor={(item, index) => index}
    />
  </ScrollView>
);

export default renderComponent1;
