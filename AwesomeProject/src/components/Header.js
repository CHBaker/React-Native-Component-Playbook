import {Image, Text, View} from 'react-native';
import styles from '../containers/styles/sharedStyles.js';
import React from 'react';

export const Header = (props) => {
  return (
    <View style={styles.sectionContainer}>
      <Image style={styles.headerImage} source={props.image} />
      <Text style={props.style}>{props.heading}</Text>
    </View>
  );
};
