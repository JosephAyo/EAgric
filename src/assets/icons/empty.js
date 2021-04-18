import React from 'react';
import {View, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../style/index';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="list-sharp" color={Colors.LIGHT_TEXT} size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  x_icon: {position: 'relative', left: -4, bottom: -2},
});

export default EmptyList;
