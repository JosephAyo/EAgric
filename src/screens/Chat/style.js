import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '../../style/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  top_content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chat_preamble_container: {},
  guideline_item: {
    width: Dimensions.WIDTH * 0.9,
    marginVertical: 10,
  },
  guidelines_preamble_view: {},
  guidelines_preamble_text: {
    color: Colors.LIGHT_TEXT,
    textAlign: 'justify',
  },
  guideline_point: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: Colors.BORDER_TWO,
  },
  guideline_point_text_container: {marginLeft: 5},
  guideline_point_text: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Fonts.ROBOTO_REGULAR,
  },
  goto_chat: {
    width: Dimensions.WIDTH * 0.9,
    position: 'absolute',
    bottom: 148,
  },
  goto_chat_btn: {
    width: 109,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  goto_chat_btn_text: {
    color: Colors.WHITE,
    fontSize: 14,
    fontFamily: Fonts.ROBOTO_REGULAR,
  },
  scroll_view: {
    maxHeight: Dimensions.HEIGHT * 0.68,
  },
  interact_view: {
    width: Dimensions.WIDTH * 0.95,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  text_input_view: {
    width: '85%',
    backgroundColor: Colors.DARK_BACKGROUND,
    borderRadius: Dimensions.WIDTH * 0.9 * 0.1,
    paddingHorizontal: 10,
  },
  text_input: {
    color: Colors.WHITE,
    minHeight: 48,
  },
  send_icon_view: {},
  contentContainer: {
    paddingBottom: 20,
  },
});

export default styles;
