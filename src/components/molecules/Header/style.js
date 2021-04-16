import {StyleSheet} from 'react-native';
import {Fonts} from '../../../style';

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  screen_name_view: {
    width: '70%',
  },
  screen_name_text: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: Fonts.RIGTHEOUS_REGULAR,
  },
  side_option_view: {
    width: '10%',
  },
});

export default styles;
