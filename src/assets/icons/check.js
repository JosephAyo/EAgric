import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../style/index';

const size = 36;

const CheckIcon = () => {
  return <Ionicons name="ios-checkbox" color={Colors.PRIMARY} size={size} />;
};

export default CheckIcon;
