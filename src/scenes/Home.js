/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Button from '../components/Button';
import Header from '../components/Header';

export default class Home extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.container}>
        <Header center={<Text style={styles.headerTitle}>Books</Text>} />

        <View style={styles.iconContainer}>
          <Icon name="book" size={180} color="#ddd" />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('List')}
            text="List Books"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
