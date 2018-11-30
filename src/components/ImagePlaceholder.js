/* @flow weak */

import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';

const placeholder = require('../assets/Default_Image_Thumbnail.png');

const ImagePlaceholder = ({ source }) => (
  <ImageBackground source={placeholder} style={styles.container}>
    <Image source={source} style={styles.container} />
  </ImageBackground>
);

export default ImagePlaceholder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
