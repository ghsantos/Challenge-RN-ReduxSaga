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

const LikeButton = ({ onPress }) => (
  <View style={styles.container}>
    <Touchable
      onPress={() => setTimeout(() => onPress(), 0)}
      background={TouchableNativeFeedback.Ripple('', true)}
    >
      <View style={styles.content}>
        <Icon name="ios-heart-empty" size={25} color="#fff" />
      </View>
    </Touchable>
  </View>
);

export default LikeButton;

const styles = StyleSheet.create({
  container: {
    height: 42,
    width: 42,
    elevation: 4,
    borderRadius: 21,
    backgroundColor: '#DC4B5D',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
