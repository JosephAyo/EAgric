import {StyleSheet} from 'react-native';
import {Colors} from '../style/index';

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: Colors.PRIMARY,
    position: 'absolute',
    overflow: 'hidden',
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default styles;
