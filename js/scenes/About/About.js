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

class About extends React.Component {
  render() {
    // console.log(this.state.data);
    console.log(this.props);
    StatusBar.setBarStyle('dark-content', true);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="center"
            source={require('../../assets/images/r10_logo.png')}
          />
        </View>

        <View style={styles.container}>
          <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.dateTitle}> Date and Venue: </Text>
        </View>

        <View style={styles.container}>
          <Text>
            Don't miss the R10 conference that will take place on June 27, 2018 in Vancouver, BC.
          </Text>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}> Code of Conduct </Text>
          </View>

          <FlatList
            data={this.props.data}
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
  }
}

export default About;
