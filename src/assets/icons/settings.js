import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../style/index';

const SettingsIcon = ({color, size}) => {
  return (
    <Ionicons name="settings" color={color || Colors.SECONDARY} size={size} />
  );
};

export default SettingsIcon;
