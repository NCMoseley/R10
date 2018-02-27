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

const Faves = ({ data }) => (
  // StatusBar.setBarStyle('dark-content', true);
  <View style={styles.mainContainer}>
    <ScrollView>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.titlesCodeOfConduct}> +{item.title} </Text>
            <Text style={styles.description}> +{item.description} </Text>
          </View>
        )}
        keyExtractor={item => item.title}
      />
    </ScrollView>
  </View>
);
export default Faves;
