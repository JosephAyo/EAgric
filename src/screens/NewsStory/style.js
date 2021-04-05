import {StyleSheet} from 'react-native';
import {Colors} from '../../style/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
  },
  top_content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_article_webview: {
    width: 300,
    resizeMode: 'cover',
  },
});

export default styles;
