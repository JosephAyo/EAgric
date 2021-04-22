import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../style/index';

const HomeIcon = ({color, size}) => {
  return <Ionicons name="home" color={color || Colors.SECONDARY} size={size} />;
};

export default HomeIcon;
