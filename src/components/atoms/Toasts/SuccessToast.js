import React from 'react';
import Toast from 'react-native-easy-toast';
import {Dimensions} from '../../../style';
import styles from './style';

const SuccessToast = ({setRef}) => {
  return (
    <Toast
      ref={(toast) => setRef(toast)}
      style={styles.success_toast}
      position="bottom"
      positionValue={Dimensions.HEIGHT * 0.6}
    />
  );
};

export default SuccessToast;
