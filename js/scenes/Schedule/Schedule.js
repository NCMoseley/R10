import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import Router from "../../navigation/routes";
import Store from "../../redux/store";
import { NavigationActions } from "@expo/ex-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { goToSession } from "../../lib/navigationHelpers";
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
  TouchableHighlight
} from "react-native";
import { styles } from "./styles";

const Schedule = ({ data, faves }) => (
  <View>
    <StatusBar barStyle="light-content" />
    <SectionList
      sections={data}
      renderItem={({ item }) => (
        <TouchableHighlight onPress={() => goToSession("Schedule", { item })}>
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.locationHeart}>
              <Text style={styles.location}>{item.location}</Text>
              {!!Object.keys(faves).includes(item.session_id) && (
                <Icon
                  raised
                  size={15}
                  style={styles.icon}
                  name="ios-heart"
                  type="ionicon"
                  color="#f50"
                />
              )}
            </View>
          </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.dateTitle}>
          {moment.unix(section.title).format("LT")}
        </Text>
      )}
      keyExtractor={(item, index) => index}
    />
  </View>
);
export default Schedule;
