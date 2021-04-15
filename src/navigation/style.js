import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../style/index';

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: Colors.PRIMARY,
    position: 'absolute',
    overflow: 'hidden',
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  drawer: {
    width: Dimensions.WIDTH * 0.65,
    backgroundColor: Colors.BACKGROUND,
  },
  drawer_content_container: {
    flex: 1,
    width: '100%',
  },
  drawer_content_scroll_view: {
    width: '100%',
  },
  drawer_item: {
    borderRadius: 0,
    borderWidth: 0,
    height: 60,
    justifyContent: 'center',
    borderColor: Colors.SHADED_TEXT,
    borderBottomWidth: 2,
    marginVertical: 0,
  },
  exit: {
    backgroundColor: '#bc0707',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 12,
    width: '92%',
    borderRadius: 0,
    borderWidth: 0,
  },
  exit_label: {
    color: Colors.WHITE,
  },
  focused_drawer_item: {
    borderLeftColor: Colors.WHITE,
    borderLeftWidth: 2,
    paddingLeft: 5,
  },
});

export default styles;
