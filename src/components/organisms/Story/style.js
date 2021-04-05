import {StyleSheet} from 'react-native';
import {Colors} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Colors.BORDER_ONE,
    marginVertical: 10,
    // elevation: 10,
  },
  panel_image: {
    width: 290,
    height: 290,
  },
  article_title_view: {
    width: '80%',
  },
  article_title: {
    color: Colors.BLACK,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
  },
  main_article: {
    // alignItems: 'center',
    width: '100%',
  },
  view_less_view: {
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
