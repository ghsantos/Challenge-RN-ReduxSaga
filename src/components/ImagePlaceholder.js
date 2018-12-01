/* @flow weak */

import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';

const placeholder = require('../assets/Default_Image_Thumbnail.png');

const ImagePlaceholder = ({ uri }) => (
  <ImageBackground source={placeholder} style={styles.container}>
    {!!uri && <Image source={{ uri }} style={styles.container} />}
  </ImageBackground>
);

export default ImagePlaceholder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
