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
    // backgroundColor: Colors.PRIMARY,
    padding: 0,
  },
  drawer_item: {
    borderRadius: 0,
    borderWidth: 0,
    height: 60,
    justifyContent: 'center',
    margin: 0,
    // backgroundColor: Colors.ALERT,
  },
  exit: {
    position: 'absolute',
    bottom: 0,
    width: '92%',
  },
  exit_label: {
    color: Colors.ERROR,
  },
  drawer_icon_container: {flexDirection: 'row', alignItems: 'center'},
  focused_drawer_item: {
    borderRightColor: Colors.PRIMARY,
    borderRightWidth: 10,
    // paddingLeft: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 60,
    marginRight: 5,
  },
});

export default styles;
