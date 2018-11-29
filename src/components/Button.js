/* @flow weak */

import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

const Touchable =
  Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;

const Button = ({ onPress, text }) => (
  <View style={styles.container}>
    <Touchable onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Touchable>
  </View>
);

export default Button;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: '#4A90E2',
    elevation: 4,
    borderRadius: 20,
    height: 40,
    width: 120,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
