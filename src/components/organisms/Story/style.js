import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '../../../style/index';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
    borderBottomWidth: 10,
    borderBottomColor: Colors.BORDER_TWO,
  },
  panel_image: {
    width: Dimensions.WIDTH,
    height: Dimensions.WIDTH,
  },
  article_title_view: {
    width: '90%',
  },
  article_title: {
    color: Colors.BLACK,
    textAlign: 'left',
    fontSize: 16,
    fontFamily: Fonts.ROBOTO_REGULAR,
    lineHeight: 25,
  },
  main_article: {
    width: '100%',
  },
  article_info: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  published_at: {fontSize: 14, fontFamily: Fonts.ROBOTO_REGULAR},
  view_less_view: {
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
