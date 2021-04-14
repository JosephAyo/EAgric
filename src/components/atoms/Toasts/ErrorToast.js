import React from 'react';
import Toast from 'react-native-easy-toast';
import {Dimensions} from '../../../style';
import styles from './style';

const ErrorToast = ({setRef}) => {
  return (
    <Toast
      ref={(toast) => setRef(toast)}
      style={styles.error_toast}
      position="bottom"
      positionValue={Dimensions.HEIGHT * 0.4}
    />
  );
};

export default ErrorToast;
