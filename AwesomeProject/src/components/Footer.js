import {Image, Text, View} from 'react-native';
import styles from '../containers/styles/sharedStyles.js';
import React from 'react';

export const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image style={styles.footerImage} source={require('../images/G.png')} />
      <Text styles={styles.sectionDescription}>
        {' '}
        All rights reserved by Globomantics Tech Conference 2020
      </Text>
    </View>
  );
};
