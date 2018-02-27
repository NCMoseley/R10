import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';

import { styles } from './styles';

const Schedule = ({ data }) => (
  // StatusBar.setBarStyle('dark-content', true);
  <View style={styles.mainContainer}>
    <ScrollView>
      <Text style={styles.description}>
        {' '}
        ScheduleScheduleScheduleScheduleScheduleScheduleScheduleScheduleScheduleScheduleScheduleScheduleScheduleScheduleScheduleScheduleScheduleScheduleScheduleScheduleSchedule{' '}
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.titlesCodeOfConduct}> +{item.title} </Text>
          </View>
        )}
        keyExtractor={item => item.title}
      />
    </ScrollView>
  </View>
);
export default Schedule;
