/* @flow */

import React from 'react';
import { Platform, View, StatusBar, StyleSheet } from 'react-native';

import { colors } from '../styles';

const statusBarColor =
  Platform.Version === 21 || Platform.Version === 22
    ? colors.primaryDark
    : colors.primary;

const Header = ({ left, center, right }) => (
  <View style={styles.container}>
    <StatusBar backgroundColor={statusBarColor} barStyle="dark-content" />
    <View style={styles.left}>{left}</View>
    <View>{center}</View>
    <View style={styles.right}>{right}</View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    height: 55,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
