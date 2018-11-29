/* @flow weak */

import React from 'react';
import { View, StyleSheet } from 'react-native';

import ButtonIcon from './ButtonIcon';

const Rate = ({ onChange, value }) => (
  <View style={styles.container}>
    <ButtonIcon
      name="ios-star"
      onPress={() => onChange(1)}
      size={19}
      color={value > 0 ? '#333' : '#fff4'}
      style={styles.star}
    />

    <ButtonIcon
      name="ios-star"
      onPress={() => onChange(2)}
      size={19}
      color={value > 1 ? '#333' : '#fff4'}
      style={styles.star}
    />

    <ButtonIcon
      name="ios-star"
      onPress={() => onChange(3)}
      size={19}
      color={value > 2 ? '#333' : '#fff4'}
      style={styles.star}
    />

    <ButtonIcon
      name="ios-star"
      onPress={() => onChange(4)}
      size={19}
      color={value > 3 ? '#333' : '#fff4'}
      style={styles.star}
    />

    <ButtonIcon
      name="ios-star"
      onPress={() => onChange(5)}
      size={19}
      color={value > 4 ? '#333' : '#fff4'}
      style={styles.star}
    />
  </View>
);

export default Rate;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  star: {
    padding: 0,
  },
});
