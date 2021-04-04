import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../style/index';

const size = 22;

const NewsIcon = () => {
  return <Ionicons name="reader" color={Colors.SECONDARY} size={size} />;
};

export {NewsIcon};
