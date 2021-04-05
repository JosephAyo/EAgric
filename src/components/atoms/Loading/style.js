import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
  },
  loading_text: {
    fontSize: 18,
    color: Colors.WHITE,
  },
});

export default styles;
