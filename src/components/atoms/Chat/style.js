import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.WIDTH * 0.9,
    justifyContent: 'center',
    marginVertical: 10,
  },
  container_sent: {
    alignItems: 'flex-end',
  },
  container_received: {
    alignItems: 'flex-start',
  },
  dialog_box: {
    maxWidth: 280,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  dialog_box_sent: {
    borderTopLeftRadius: 10,
    backgroundColor: Colors.PRIMARY,
  },
  dialog_box_received: {
    borderTopRightRadius: 10,
    backgroundColor: Colors.DARK_BACKGROUND,
  },
  dialog_text: {
    color: Colors.WHITE,
  },
  username_view: {
    alignItems: 'flex-start',
  },
  username_text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.BORDER_TWO,
  },
  time_sent_view: {
    alignItems: 'flex-end',
  },
  time_sent_text: {
    fontSize: 10,
    color: Colors.SHADED_TEXT,
  },
});

export default styles;
