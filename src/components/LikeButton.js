/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class LikeButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="ios-heart-empty" size={25} color="#fff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 42,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    borderRadius: 21,
    backgroundColor: '#DC4B5D',
  },
});
