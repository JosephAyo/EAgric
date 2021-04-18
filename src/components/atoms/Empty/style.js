import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  description_text: {
    color: Colors.LIGHT_TEXT,
  },
});

export default styles;
