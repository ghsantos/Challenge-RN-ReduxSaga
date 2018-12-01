/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../components/Button';
import Header from '../components/Header';

export default class Home extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.container}>
        <Header center={<Text style={styles.headerTitle}>Books</Text>} />

        <Button
          onPress={() => this.props.navigation.navigate('List')}
          text="Go to List"
        />
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
});
