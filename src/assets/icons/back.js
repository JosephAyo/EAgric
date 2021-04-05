import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../style/index';

const size = 36;

const BackIcon = () => {
  return (
    <Ionicons
      name="arrow-back-circle-sharp"
      color={Colors.PRIMARY}
      size={size}
    />
  );
};

export {BackIcon};
