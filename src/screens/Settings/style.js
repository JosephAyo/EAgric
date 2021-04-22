import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '../../style/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    alignItems: 'center',
  },
  top_content: {
    flex: 1,
    alignItems: 'center',
    width: Dimensions.WIDTH * 0.9,
  },
  form: {
    flexDirection: 'row',
    width: '100%',
  },
  input_view: {
    width: '90%',
  },
  text_input_neutral: {},
  btn: {},
  description_view: {
    width: '100%',
  },
  description_text: {
    color: Colors.LIGHT_TEXT,
    textAlign: 'justify',
    fontFamily: Fonts.ROBOTO_REGULAR,
  },
});

export default styles;
