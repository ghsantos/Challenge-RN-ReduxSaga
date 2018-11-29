/* @flow */

import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Touchable =
  Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;

const ButtonIcon = ({ name, onPress, style, size = 30, color = '#333' }) => (
  <Touchable
    onPress={() => setTimeout(() => onPress(), 0)}
    background={TouchableNativeFeedback.Ripple('', true)}
  >
    <View style={[styles.container, style]}>
      <Icon name={name} size={size} color={color} />
    </View>
  </Touchable>
);

export default ButtonIcon;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    marginHorizontal: 4,
  },
});
