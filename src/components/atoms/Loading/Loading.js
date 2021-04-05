import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Colors} from '../../../style/index';
import styles from './style';
const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loading_text}>Loading...</Text>
      <ActivityIndicator size={50} color={Colors.WHITE} />
    </View>
  );
};

export default Loading;
