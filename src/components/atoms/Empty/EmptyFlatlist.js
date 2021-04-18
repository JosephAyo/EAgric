import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import EmptyList from '../../../assets/icons/empty';
import {Dimensions} from '../../../style';

const EmptyFlatlist = ({title, heightOffset, isInverted}) => {
  return (
    <View
      style={[
        styles.container,
        {
          height: Dimensions.HEIGHT * (heightOffset || 0.5),
          transform: isInverted ? [{scaleY: -1}] : [{scaleY: 1}],
        },
      ]}>
      <View style={styles.description}>
        <Text style={styles.description_text}>No {title} to show </Text>
        <EmptyList />
      </View>
    </View>
  );
};

export default EmptyFlatlist;
