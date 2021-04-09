import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../style/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  top_content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chat_preamble_container: {},
  chat_preamble: {
    width: Dimensions.WIDTH * 0.9,
    height: 100,
    backgroundColor: Colors.WHITE,
    borderLeftColor: Colors.PRIMARY,
    borderLeftWidth: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  scroll_view: {
    maxHeight: Dimensions.HEIGHT * 0.68,
  },
  interact_view: {
    width: Dimensions.WIDTH * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  text_input_view: {
    width: '82%',
    backgroundColor: Colors.DARK_BACKGROUND,
    borderRadius: Dimensions.WIDTH * 0.9 * 0.1,
    paddingHorizontal: 10,
  },
  text_input: {
    color: Colors.WHITE,
  },
  send_icon_view: {},
  contentContainer: {
    paddingBottom: 90,
  },
});

export default styles;
